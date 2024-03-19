import React from 'react'
import { articles } from '@/constants/articles'
import ArticleCard from '@/components/customUI/ArticleCard'

export default function LatestArticles() {
  return (
    <div className="flex flex-wrap justify-start space-x-24 w-full">
    {articles.map((article, index) => (
      <ArticleCard key={index} article={article} />
    ))}
  </div>
  )
}
