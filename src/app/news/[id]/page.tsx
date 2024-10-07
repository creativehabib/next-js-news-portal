import Image from "next/image";
import NewsCard from "@/components/NewsCard";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const news = await fetch(`https://bn.ebdresults.com/api/latest-post`
  ).then((res) => res.json());

  const data = news.data;

  return data.map((item:any) => ({
    id: item?.encode_titl,
  }));
  
}

const NewsDetail = async ({ params }: { params: { id: string } }) => {
    const post = await fetch(`https://bn.ebdresults.com/api/post-detail/${params.id}`
    ).then((res) => res.json());
    if (!post) {
      return <div>News is Not Found!</div>;
    }
    return (
        <section className="py-12">
            <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg">
                {
                    post.data.image_thumb && (
                      <div>
                        <Image src={post.data.image_thumb} alt={post.data.title}
                               width={800}
                               height={450}
                               className="rounded-md object-cover"
                        />
                      </div>
                    )
                }
                <div className="my-5">
                    <h2 className="text-3xl font-bold mb-4">{post.data.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: post.data.news}}/>
                </div>
            </article>

            <div className="max-w-7xl mx-auto my-12 px-8">
            <h2 className="text-2xl font-bold mb-8">Related News</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
                {
                    post.data.relatedPost.map((item:any) => (
                        <NewsCard key={item.news_id} item={item} />
                    ))
                }
            </div>
        </div>
        </section>
    )
}

export default NewsDetail
