import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input.tsx";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  return (
    <>
      <div>
        <h2 className="text-xl">
          Subscribe to our newsletter to get latest updates and news
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Register now to get latest updates on promotions & coupons. <br />
          Don't worry, we don't spam!
        </p>
      </div>
      <div className="w-fit">
        <div className="flex items-center relative">
          <Mail color="#555555" size={20} className="z-10 absolute left-2" />
          <Input
            type="email"
            placeholder="Email"
            className="w-full pl-8 text-black dark:text-white"
          />
          <Button
            type="submit"
            className="bg-greeny dark:bg-greeny rounded-l-none absolute right-0 hover:bg-black"
          >
            Subscribe
          </Button>
        </div>
        <span className="xl:text-sm text-xs mt-2 w-fit-content mx-auto">
          By subscribing you agree to our{" "}
          <span className="text-greeny">
            Terms & Conditions and Privacy Policy
          </span>
        </span>
      </div>
    </>
  );
}
