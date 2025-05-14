
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface PackageOption {
  value: string;
  label: string;
}

interface SignUpFormProps {
  title?: string;
  packageOptions: PackageOption[];
  selectedPackage?: string;
  className?: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  title = "SIGN UP",
  packageOptions,
  selectedPackage,
  className,
}) => {
  const [selectedPkg, setSelectedPkg] = useState<string | undefined>(selectedPackage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic can be added here
    console.log("Form submitted with package:", selectedPkg);
  };

  return (
    <div className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        )}
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              {selectedPackage ? (
                <div className="mb-6">
                  <p className="text-lg border-b border-gray-200 pb-2">{selectedPackage}</p>
                </div>
              ) : (
                <div className="mb-6">
                  <Label htmlFor="package-select" className="mb-2 block">Select Package</Label>
                  <Select
                    value={selectedPkg}
                    onValueChange={(value) => setSelectedPkg(value)}
                  >
                    <SelectTrigger id="package-select" className="w-full bg-white border-gray-200 h-12">
                      <SelectValue placeholder="Select Package" />
                    </SelectTrigger>
                    <SelectContent>
                      {packageOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="mb-2 block">Name</Label>
                <Input 
                  id="name"
                  type="text" 
                  placeholder="Name" 
                  required 
                  className="bg-white border-gray-200 h-12 w-full" 
                />
              </div>
              <div>
                <Label htmlFor="phone" className="mb-2 block">Phone</Label>
                <Input 
                  id="phone"
                  type="tel" 
                  placeholder="Phone" 
                  required 
                  className="bg-white border-gray-200 h-12 w-full" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="mb-2 block">Email</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Email" 
                  required 
                  className="bg-white border-gray-200 h-12 w-full" 
                />
              </div>
              <div>
                <Label htmlFor="address" className="mb-2 block">Address</Label>
                <Input 
                  id="address"
                  type="text" 
                  placeholder="Address" 
                  required 
                  className="bg-white border-gray-200 h-12 w-full" 
                />
              </div>
            </div>

            <div>
              <Label htmlFor="comment" className="mb-2 block">Comment</Label>
              <Textarea 
                id="comment"
                placeholder="Comment" 
                rows={5} 
                className="bg-white border-gray-200 w-full" 
              />
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 h-12 text-lg"
              >
                Send
              </Button>
            </div>
          </form>

          <div className="text-center mt-6 hidden md:block">
            <p className="mb-2">
              Or Chat with our Sales Team by Whatsapp or Telegram via +855 81 801 999
            </p>
            <p className="mb-2">or call +855 81 801 999</p>
            <p>Email: sales@sinet.com.kh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
