"use client"
import React, {useEffect, useState} from "react";
import {categoryItem} from "@/types/news";
import Link from "next/link";

export const revalidate = 60;
export const dynamicParams = true;

const CategoryList = () => {
    const [category, setCategory] = useState<categoryItem[]>([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://bn.ebdresults.com/api/category-list')
            .then((res) => res.json())
            .then((data) => {
                setCategory(data.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Data is loading...</p>;
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
                {
                    category.map((item) => (
                        <div key={item.menu_content_id}>
                            <Link href={`/category/${item.slug}`}>{item.menu_lavel}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryList;