import React from "react";
import { Mail, Phone, MapPin, Send, Globe, Share2, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { sendEmail } from "@/lib/sendEmail";

const Contact = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState({ state: "idle", text: "" });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      details: ["61A Mill Hey", "Haworth", "KEIGHLEY", "BD22 8NA"],
      color: "text-blue-600",
      bg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: Phone,
      title: "Contact Number",
      details: ["+447348588939"],
      color: "text-emerald-600",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["support@wegottravel.com", "info@wegottravel.com"],
      color: "text-purple-600",
      bg: "bg-purple-50 dark:bg-purple-900/20",
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
            Get in <span className="text-primary tracking-tighter italic">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions about our travel packages or need help with a booking? 
            Our dedicated team is here to assist you 24/7.
          </p>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-none shadow-xl rounded-[28px] overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className={`${info.bg} ${info.color} p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground font-medium leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media Card */}
            <Card className="border-none shadow-xl rounded-[28px] bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-6">Connect with us</h3>
                <div className="flex gap-4">
                  {[Globe, Share2, Users, MessageSquare].map((Icon, idx) => (
                    <button key={idx} className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors">
                      <Icon className="w-6 h-6" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-2xl rounded-[32px] overflow-hidden bg-card">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
                  Send us a Message
                  <span className="w-12 h-1 bg-primary/20 rounded-full" />
                </h2>
                
                <form
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (status.state === "sending") return;

                    setStatus({ state: "sending", text: "Sending..." });
                    try {
                      await sendEmail({
                        type: "contact",
                        fullName,
                        email,
                        subject,
                        message,
                      });
                      setStatus({ state: "sent", text: "Message sent successfully." });
                      setFullName("");
                      setEmail("");
                      setSubject("");
                      setMessage("");
                    } catch (err) {
                      setStatus({
                        state: "error",
                        text: err?.message || "Failed to send message.",
                      });
                    }
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground/80 ml-1">Full Name</label>
                      <Input 
                        placeholder="John Doe" 
                        className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground/80 ml-1">Email Address</label>
                      <Input 
                        type="email"
                        placeholder="john@example.com" 
                        className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/80 ml-1">Subject</label>
                    <Input 
                      placeholder="How can we help you?" 
                      className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/80 ml-1">Message</label>
                    <Textarea 
                      placeholder="Type your message here..." 
                      className="min-h-[180px] rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold p-4 resize-none"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  {status.state !== "idle" && (
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm font-bold ${
                        status.state === "sent"
                          ? "bg-emerald-50 text-emerald-700"
                          : status.state === "error"
                            ? "bg-red-50 text-red-700"
                            : "bg-secondary/20 text-foreground"
                      }`}
                      role="status"
                      aria-live="polite"
                    >
                      {status.text}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status.state === "sending"}
                    className="w-full h-16 rounded-2xl text-lg font-black bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    <Send className="w-5 h-5" />
                    {status.state === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
