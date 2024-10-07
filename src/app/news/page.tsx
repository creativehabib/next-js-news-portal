import NewsList from "@/components/news/NewsList";

const NewsPage = () => {
    return (
        <section className="py-12 px-8">
            <h2 className="text-xl font-bold leading-tight">Latest News</h2>
            <NewsList/>
        </section>
    );
};

export default NewsPage;