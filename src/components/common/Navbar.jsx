import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Plane, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import assets from "@/assets/assets";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Flights", path: "/flights" },
  { name: "Hotels", path: "/hotels" },
  { name: "Packages", path: "/packages" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex items-center gap-2 transition-transform hover:scale-105"
            >
              <img className="w-26" src={assets.assets.Logo} alt="logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Link to="/payment">
              <Button size="lg" className="uppercase">
                Make Payment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 animate-in slide-in-from-top-2">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors border-l-2 pl-2 ${
                      isActive
                        ? "text-primary border-primary"
                        : "text-foreground hover:text-primary border-transparent hover:border-primary"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="flex flex-col space-y-3 pt-4 border-t border-border/50">
              <Link to="/payment" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full justify-center rounded-full shadow-lg shadow-primary/20">
                  Make Payment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
