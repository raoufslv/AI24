import NewsletterSection from "@/components/shared/footer/NewsletterSection";
import ContactInfo from "@/components/shared/footer/ContactInfo";
import ExploreSection from "@/components/shared/footer/ExploreSection";
import AboutUsSection from "@/components/shared/footer/AboutUsSection";
import FollowUsSection from "@/components/shared/footer/FollowUsSection";

export default function Footer() {
  return (
    <div className="w-full bg-darky flex flex-col items-center justify-start text-white pt-10 xl:px-56 lg:px-28 md:px-20 sm:px-16 px-10">
      <div className="border-b-2 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-start pb-16 w-full">
        <NewsletterSection />
      </div>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full">
        <ContactInfo />
        <ExploreSection />
        <AboutUsSection />
        <FollowUsSection />
      </div>
      <div>
        <p className="text-center text-sm mt-10 mb-4">
          © 2024 All Rights Reserved. Designed by CGVortex
        </p>
      </div>
    </div>
  );
}
