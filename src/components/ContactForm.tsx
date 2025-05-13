import React from "react";
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

const ContactForm = () => {
  return (
    <div className="bg-sinet-light bg-opacity-30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left mb-8">
              SIGN UP
            </h2>
            <form className="space-y-4">
              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fiber-edge">Fiber Edge</SelectItem>
                    <SelectItem value="fiber-plus">Fiber Plus</SelectItem>
                    <SelectItem value="dia-ddos">
                      DIA with DDoS Protection
                    </SelectItem>
                    <SelectItem value="fiber-home">Fiber Home</SelectItem>
                    <SelectItem value="fiber-prime">Fiber Prime</SelectItem>
                    <SelectItem value="first-class">
                      SINET - First Class
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Input type="text" placeholder="Name" />
              </div>

              <div>
                <Input type="tel" placeholder="Phone" />
              </div>

              <div>
                <Input type="email" placeholder="Email" />
              </div>

              <div>
                <Input type="text" placeholder="Address" />
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

          <div>
            <h2 className="text-3xl font-bold text-center md:text-left mb-8">
              CONTACT US
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Sales</h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Tel:</span> (+855) 81 801 999
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    sales@sinet.com.kh
                  </p>
                  <p>
                    <span className="font-medium">WhatsApp:</span> +855 81 801
                    999
                  </p>
                  <p>
                    <span className="font-medium">Telegram:</span>{" "}
                    https://t.me/SINET_KH
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Billing</h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Tel:</span> (+855) 81 301 999
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    billing@sinet.com.kh
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Technical Support
                </h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Tel:</span> (+855) 81 901 999
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    support@sinet.com.kh
                  </p>
                  <p>
                    <span className="font-medium">Telegram:</span> +855 81 901
                    999
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
