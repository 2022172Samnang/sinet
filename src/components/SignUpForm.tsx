
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
    <div className={`${className}`}>
      {title && (
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      )}
      <div className="mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Select
                value={selectedPkg}
                onValueChange={(value) => setSelectedPkg(value)}
              >
                <SelectTrigger className="w-full">
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

            <div>
              <Input type="text" placeholder="Name" required />
            </div>

            <div>
              <Input type="tel" placeholder="Phone" required />
            </div>

            <div>
              <Input type="email" placeholder="Email" required />
            </div>

            <div>
              <Input type="text" placeholder="Address" required />
            </div>

            <div>
              <Textarea placeholder="Comment" rows={5} />
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-sinet-dark hover:bg-sinet-darkest"
              >
                Send
              </Button>
            </div>
          </form>
        </div>

        <div className="text-center mt-6">
          <p className="mb-2">
            Or Chat with our Sales Team by Whatsapp or Telegram via +855 81 801 999
          </p>
          <p className="mb-2">or call +855 81 801 999</p>
          <p>Email: sales@sinet.com.kh</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
