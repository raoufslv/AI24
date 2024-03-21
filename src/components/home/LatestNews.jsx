import { news } from "@/constants/news";
import NewsCard from "@/components/customUI/NewsCard";
import { useEffect, useState } from "react";

export default function LatestNews() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let maxNews;
  if (screenWidth >= 768) {
    maxNews = 4;
  } else {
    maxNews = 3;
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2
    xl:grid-cols-3 3xl:grid-cols-4
    gap-4 w-full
    "
    >
      {/* //"flex flex-wrap justify-start space-x-24 w-full"> */}

      {news.slice(0, maxNews).map((onenews, index) => (
        <NewsCard key={index} news={onenews} />
      ))}
    </div>
  );
}
