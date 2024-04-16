import { Mail, MapPin, Phone } from "lucide-react";
import Info from "@/components/contact/Info";
import FollowUsSection from "@/components/shared/footer/FollowUsSection";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <div
      className="text-white dark:text-white bg-emerald-800 rounded-xl p-24 
    flex justify-between items-start md:flex-row flex-col"
    >
      <div className="flex flex-col justify-start items-start gap-16">
        <h2 className="font-bruno text-2xl ">Contact Us</h2>
        <ul className="flex flex-col gap-8 items-start justify-center">
          <Info icon={<Mail />} email="contact@codequestarena.com" />
          <Info icon={<Phone />} text="+213 561 21 54 32" />
          <Info icon={<MapPin />} text="usthb, Bab ezzouar, Alger" />
        </ul>
        <FollowUsSection flag="notitle" />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
