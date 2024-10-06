import Banner from "@/components/Banner";
import {NewsItem} from "@/types/news";
import NewsCard from "@/components/NewsCard";
import NewsLetter from "@/components/NewsLetter";

export default async function Home() {
    const response = await fetch(`https://bn.ebdresults.com/api/latest-post`);
    const news = await response.json();
  return (
    <div>
      <Banner/>
        <div className="max-w-7xl mx-auto my-12 px-8">
            <h2 className="text-2xl font-bold mb-8">Latest News</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
                {
                    news.data.slice(0,3).map((item: NewsItem) => (
                        <NewsCard key={item.news_id} item={item} />
                    ))
                }
            </div>
        </div>
        <NewsLetter/>
    </div>
  );
}