import CategoryList from "@/components/CategoryList";

const CategoryPost = () => {
    return (
        <section className="py-12 px-8">
            <h2 className="text-xl font-bold leading-tight">Latest News</h2>
            <CategoryList/>
        </section>
    );
};

export default CategoryPost;