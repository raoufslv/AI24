import { news } from "@/constants/news";
import NewsHorizontalCard from "@/components/customUI/NewsHorizontalCard";
import { useEffect, useState } from "react";

export default function NewsList() {
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
      className="grid  gap-4 xl:w-1/2
    "
    >
      {/* //"flex flex-wrap justify-start space-x-24 w-full"> */}

      {news.slice(0, maxNews).map((onenews, index) => (
        <NewsHorizontalCard key={index} news={onenews} />
      ))}
    </div>
  );
}
