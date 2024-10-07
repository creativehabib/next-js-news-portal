"use client"
import {useEffect, useState} from "react";
import {NewsItem} from "@/types/news";
import {fetchNews} from "@/lib/fetchNews";
import SearchBar from "@/components/news/SearchBar";
import CategoryFilter from "@/components/news/CategoryFilter";
import NewsCard from "@/components/NewsCard";

const NewsList = () => {
    const [news, setNews] = useState<NewsItem[]>([])
    const [category, setCategory] = useState<string>("")
    const [search, setSearch] = useState<string>("")

    useEffect(() => {
        const getNews = async () => {
            const data = await fetchNews(category,search);
            setNews(data.data)
        }
        getNews()
    }, [category, search]);
    console.log(news)
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-12 mb-5">
                {/* Search bar */}
                <SearchBar onSearch={setSearch} />

                {/* Category filtering */}
                <CategoryFilter onCategoryChange={setCategory} />
            </div>
        {/* Latest News */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
                {news.map((item) => (
                    <NewsCard item={item} key={item?.news_id}/>
                ))}
            </div>
        </div>
    );
};

export default NewsList;