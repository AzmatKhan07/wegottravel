import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function MakePayment() {
  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card className="border-none shadow-2xl overflow-hidden rounded-[32px] bg-card">
          <CardContent className="p-8 md:p-12">
            <div className="mb-10">
              <h1 className="text-3xl font-black text-foreground mb-3 relative inline-block">
                Make Payments
                <span className="absolute -bottom-2 left-0 w-12 h-1.5 bg-primary rounded-full"></span>
              </h1>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* Order ID */}
              <div className="space-y-2.5">
                <Label htmlFor="order-id" className="text-[14px] font-bold text-foreground/80 flex items-center">
                  Order ID <span className="text-destructive ml-1 text-lg leading-none">*</span>
                </Label>
                <Input
                  id="order-id"
                  placeholder="Enter order ID"
                  className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                />
              </div>

              {/* Name */}
              <div className="space-y-2.5">
                <Label className="text-[14px] font-bold text-foreground/80 flex items-center">
                  Name <span className="text-destructive ml-1 text-lg leading-none">*</span>
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="First"
                    className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                  />
                  <Input
                    placeholder="Last"
                    className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                  />
                </div>
              </div>

              {/* Bank Name */}
              <div className="space-y-2.5">
                <Label htmlFor="bank-name" className="text-[14px] font-bold text-foreground/80">
                  Bank Name
                </Label>
                <Input
                  id="bank-name"
                  placeholder="Enter bank name"
                  className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                />
              </div>

              {/* Amount */}
              <div className="space-y-2.5">
                <Label htmlFor="amount" className="text-[14px] font-bold text-foreground/80 flex items-center">
                  Amount <span className="text-destructive ml-1 text-lg leading-none">*</span>
                </Label>
                <Input
                  id="amount"
                  placeholder="Enter amount"
                  className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                />
              </div>

              {/* Email & Mobile */}
              <div className="space-y-2.5">
                <Label className="text-[14px] font-bold text-foreground/80 flex items-center">
                  Email & Mobile Number <span className="text-destructive ml-1 text-lg leading-none">*</span>
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                  />
                  <Input
                    type="tel"
                    placeholder="Mobile Number"
                    className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                  />
                </div>
              </div>

              {/* Address Section */}
              <div className="space-y-6 pt-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-foreground relative inline-block">
                    Address
                    <span className="absolute -bottom-1.5 left-0 w-8 h-1 bg-primary rounded-full"></span>
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <Input
                    placeholder="Street Address"
                    className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                  />
                  <Input
                    placeholder="Address Line 2"
                    className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="City"
                      className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                    />
                    <Input
                      placeholder="State / Province / Region"
                      className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="ZIP / Postal Code"
                      className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                    />
                    <Select>
                      <SelectTrigger className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold">
                        <SelectValue placeholder="United Kingdom" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-border">
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="pk">Pakistan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Bank Card Details Section */}
              <div className="space-y-6 pt-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-foreground relative inline-block">
                    Bank Card Details
                    <span className="absolute -bottom-1.5 left-0 w-8 h-1 bg-primary rounded-full"></span>
                  </h2>
                </div>

                <div className="space-y-4">
                  <Input
                    placeholder="Card Number"
                    className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="123"
                      className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                    />
                    <Input
                      placeholder="MM/YY"
                      className="h-14 rounded-2xl border-border bg-secondary/5 focus:bg-background focus:ring-primary/20 transition-all font-semibold"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button className="w-full h-16 rounded-2xl text-lg font-black bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 transition-all transform active:scale-[0.98]">
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default MakePayment;
