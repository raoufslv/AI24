import { articles } from "@/constants/articles";
import ArticleCard from "@/components/customUI/ArticleCard";
import { useEffect, useState } from "react";

export default function LatestArticles() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let maxArticles;
  if (screenWidth >= 768) {
    maxArticles = 4;
  } else {
    maxArticles = 3;
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

      {articles.slice(0, maxArticles).map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
}
