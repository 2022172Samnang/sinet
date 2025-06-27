// components/SignUpForm.tsx (or your path)
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface SignUpFormProps {
  title?: string;
  className?: string; // To be used by ContactForm for p-0 bg-transparent
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  title = "SIGN UP",
  className,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", {
      ...formData,
    });
  };

  // The main change is removing the `div.container.mx-auto.px-4` that previously
  // wrapped the title and the form section.
  // The `className` prop from ContactForm (e.g., "bg-transparent p-0") will be applied here,
  // ensuring no extra padding from SignUpForm's root when embedded.
  return (
    <div id="signup" className={`overflow-hidden ${className} md:mb-2`}>
      {/* Title section - centered */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">{title}</h2>
      </div>

      {/* Form card and helper text section - uses max-w-2xl mx-auto for its own centering and width constraint */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Phone
                </label>
                <Input
                  type="tel"
                  id="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="comment"
                className="block text-gray-700 mb-2 font-medium"
              >
                Comment
              </label>
              <Textarea
                id="comment"
                placeholder="Any specific requirements or questions..."
                rows={4}
                value={formData.comment}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-sinet hover:bg-sinet-dark text-white py-3 text-lg font-semibold rounded-md"
                // Ensure your tailwind.config.js has `sinet` and `sinet-dark` colors
                // e.g., colors: { sinet: '''#YOUR_SINET_COLOR''', '''sinet-dark''': '''#YOUR_SINET_DARK_COLOR''' }
                // If not, fall back to the teal colors or use the ones from your previous form:
                // className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-lg font-semibold rounded-md"
              >
                Send
              </Button>
            </div>
          </form>
        </div>

        {/* <div className="text-center mt-8 text-gray-600">
          <p className="mb-2">
            Or Chat with our Sales Team by Whatsapp or Telegram via{" "}
            <a
              href="tel:+85581801999"
              className="text-teal-600 hover:underline font-medium"
            >
              +855 81 801 999
            </a>
          </p>
          <p className="mb-2">
            or call{" "}
            <a
              href="tel:+85581801999"
              className="text-teal-600 hover:underline font-medium"
            >
              +855 81 801 999
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:sales@sinet.com.kh"
              className="text-teal-600 hover:underline font-medium"
            >
              sales@sinet.com.kh
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default SignUpForm;

