import React from "react";

// Inline solid SVGs for premium social connection links (Zero-dependency & crash-proof)
const FacebookIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TiktokIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.15 4.31-2.92 5.56-1.78 1.25-4.14 1.51-6.14.73-2.01-.78-3.56-2.5-3.95-4.63-.39-2.12.39-4.32 2.05-5.69 1.65-1.37 3.96-1.63 5.92-.81.08-1.45.02-2.91.03-4.36-1.19-.38-2.48-.48-3.7-.18-1.55.38-2.95 1.34-3.78 2.69-.83 1.35-1.13 3.01-.79 4.58.33 1.58 1.36 2.96 2.72 3.75 1.35.79 3.05 1.01 4.54.54 1.49-.47 2.74-1.57 3.39-2.98.63-1.41.67-3.04.59-4.57-.08-4.71-.04-9.42-.04-14.13z" />
  </svg>
);

function Footer() {
  return (
    <footer className="w-full bg-[#f8f9fa] dark:bg-card pt-20 pb-8 mt-12 md:mt-16 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-20">
          {/* Brand Column (Spans 4 columns on large screens) */}
          <div className="lg:col-span-4 flex flex-col pr-0 lg:pr-8">
            <h2 className="text-[28px] md:text-3xl font-black text-foreground mb-5 tracking-tight flex items-center">
              Wegottravel<span className="text-primary ml-1">.</span>
            </h2>
            <p className="text-[14px] md:text-[15px] text-muted-foreground leading-relaxed max-w-sm mb-8 font-medium">
              Redefining the premium travel experience. Seamless digital
              concierge services, curated destinations, and unmissable global
              deals.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center hover:bg-primary transition-all duration-300 group hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-[18px] h-[18px] text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center hover:bg-primary transition-all duration-300 group hover:-translate-y-1"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-[18px] h-[18px] text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center hover:bg-primary transition-all duration-300 group hover:-translate-y-1"
                aria-label="TikTok"
              >
                <TiktokIcon className="w-[16px] h-[16px] text-primary group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Spacer for big screens */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Explore */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.15em] mb-6">
              Explore
            </h3>
            <ul className="flex flex-col gap-4">
              {["Flights", "Hotels", "Packages", "Trending"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[14px] font-medium text-muted-foreground hover:text-primary hover:translate-x-1.5 inline-block transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.15em] mb-6">
              Company
            </h3>
            <ul className="flex flex-col gap-4">
              {["About Us", "Careers", "Sustainability", "Press Center"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] font-medium text-muted-foreground hover:text-primary hover:translate-x-1.5 inline-block transition-all duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.15em] mb-6">
              Support
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                "Help Center",
                "Terms of Service",
                "Privacy Policy",
                "Cookies",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[14px] font-medium text-muted-foreground hover:text-primary hover:translate-x-1.5 inline-block transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Horizontal Line & Copyright */}
        <div className="pt-8 border-t border-border/20 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground font-medium">
            © {new Date().getFullYear()} Wegottravel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
