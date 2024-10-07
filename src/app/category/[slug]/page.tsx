import NewsCard from "@/components/NewsCard";

export async function generateStaticParams() {
    const category = await fetch(`https://bn.ebdresults.com/api/latest-post`
    ).then((res) => res.json());

    const data = category.data;

    return data.map((item:any) => ({
        slug: item?.category,
    }));

}

const CategoryPost = async ({ params }: { params: { slug: string } }) => {
    const categories = await fetch(`https://bn.ebdresults.com/api/category-post/${params.slug}`
    ).then((res) => res.json());
    if (!categories) {
        return <div>News is Not Found!</div>;
    }
    console.log(categories)
    return (
        <section>
            <div className="max-w-7xl mx-auto my-12 px-8">
                <h2 className="text-2xl font-bold mb-8">Post Count- ({categories.data.posts_count})</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
                    {
                        categories.data.posts.map((item:any, index) => (
                            <NewsCard key={index} item={item}/>
                        ))
                    }
                </div>
            </div>

        </section>
    );
};

export default CategoryPost;