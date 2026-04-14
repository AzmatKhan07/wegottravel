<?php
declare(strict_types=1);

header("Content-Type: application/json; charset=utf-8");

// Basic CORS for same-origin + local dev.
$origin = $_SERVER["HTTP_ORIGIN"] ?? "";
if ($origin) {
  header("Access-Control-Allow-Origin: " . $origin);
  header("Vary: Origin");
  header("Access-Control-Allow-Credentials: true");
}
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(204);
  exit;
}

if (($_SERVER["REQUEST_METHOD"] ?? "") !== "POST") {
  http_response_code(405);
  echo json_encode(["ok" => false, "error" => "Method not allowed"]);
  exit;
}

// Simple rate limit (one request every ~8 seconds per session).
if (function_exists("session_start")) {
  @session_start();
  $now = time();
  $last = (int)($_SESSION["last_send_email_ts"] ?? 0);
  if ($last && ($now - $last) < 8) {
    http_response_code(429);
    echo json_encode(["ok" => false, "error" => "Please wait a moment and try again."]);
    exit;
  }
  $_SESSION["last_send_email_ts"] = $now;
}

$raw = file_get_contents("php://input");
$data = json_decode($raw ?: "{}", true);
if (!is_array($data)) $data = [];

function clean_one_line($v): string {
  $s = trim((string)$v);
  $s = str_replace(["\r", "\n"], " ", $s);
  return preg_replace("/\s+/", " ", $s) ?? "";
}

function clean_text($v, int $maxLen): string {
  $s = trim((string)$v);
  $lenFn = function_exists("mb_strlen") ? "mb_strlen" : "strlen";
  $subFn = function_exists("mb_substr") ? "mb_substr" : "substr";
  if ($lenFn($s) > $maxLen) $s = $subFn($s, 0, $maxLen);
  return $s;
}

$configPath = __DIR__ . "/config.php";
$config = [
  "to_email" => "contact@supertravel.world",
  "from_email" => "contact@supertravel.world",
  "from_name" => "Super Travel Website",
];
if (file_exists($configPath)) {
  $loaded = include $configPath;
  if (is_array($loaded)) {
    $config = array_merge($config, $loaded);
  }
}

$type = clean_one_line($data["type"] ?? "");
if ($type === "") {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "Missing type"]);
  exit;
}

$site = clean_one_line($_SERVER["HTTP_HOST"] ?? "supertravel.world");
$to = clean_one_line($config["to_email"] ?? "contact@supertravel.world");
$fromEmail = clean_one_line($config["from_email"] ?? $to);
$fromName = clean_one_line($config["from_name"] ?? "Super Travel Website");

$replyTo = "";
$subject = "";
$body = "";

if ($type === "contact") {
  $fullName = clean_one_line($data["fullName"] ?? "");
  $email = clean_one_line($data["email"] ?? "");
  $subj = clean_one_line($data["subject"] ?? "");
  $msg = clean_text($data["message"] ?? "", 5000);

  if ($fullName === "" || $email === "" || $subj === "" || trim($msg) === "") {
    http_response_code(400);
    echo json_encode(["ok" => false, "error" => "Please fill all required fields."]);
    exit;
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["ok" => false, "error" => "Please enter a valid email address."]);
    exit;
  }

  $replyTo = $email;
  $subject = "[Contact] " . $subj;
  $body = "New contact message from " . $site . "\n\n"
    . "Name: " . $fullName . "\n"
    . "Email: " . $email . "\n"
    . "Subject: " . $subj . "\n\n"
    . "Message:\n" . $msg . "\n";
} elseif ($type === "query") {
  $tab = clean_one_line($data["tab"] ?? "");
  $subject = "[Query] " . ($tab !== "" ? $tab : "travel") . " — " . $site;
  $body = "New travel query from " . $site . "\n\n"
    . json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n";
} elseif ($type === "newsletter") {
  $email = clean_one_line($data["email"] ?? "");
  if ($email === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["ok" => false, "error" => "Please enter a valid email address."]);
    exit;
  }
  $replyTo = $email;
  $subject = "[Newsletter] New signup — " . $site;
  $body = "New newsletter signup from " . $site . "\n\nEmail: " . $email . "\n";
} else {
  http_response_code(400);
  echo json_encode(["ok" => false, "error" => "Unsupported type"]);
  exit;
}

$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "From: " . ($fromName !== "" ? $fromName : "Website") . " <" . $fromEmail . ">";
if ($replyTo !== "") {
  $headers[] = "Reply-To: " . $replyTo;
}

$ok = @mail($to, $subject, $body, implode("\r\n", $headers));
if (!$ok) {
  http_response_code(500);
  echo json_encode(["ok" => false, "error" => "Mail failed on server."]);
  exit;
}

echo json_encode(["ok" => true]);

