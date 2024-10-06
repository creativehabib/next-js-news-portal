import React from 'react';
import {NewsItem} from "@/types/news";
import Link from "next/link";
import Image from "next/image";
interface NewsCardProps {
    item: NewsItem
}

const NewsCard = ({item}: NewsCardProps) => {
    return (
        <div className="border p-4 rounded-md shadow-sm relative">
            <Link href={`/category/${item.category}`}><span className="absolute top-5 right-5 z-10 bg-slate-800 py-2 text-white rounded-full px-6">{item.category_name}</span></Link>
            <Link href={`/news/${item.encode_titl}`}>
                <Image src={item.image_thumb} alt={item.post_title} width={500}  height={500}
                    className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-300"
                />
            </Link>
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <Link href={`/author/${item.post_by_id}`} className="flex items-center">
                            <Image src={item.post_by_image} alt={item.post_by_name} width={25} height={25} className="rounded-full"/>
                            <span className="ml-2">{item?.post_by_name}</span>
                        </Link>
                    </div>
                    <span>{item?.post_date}</span>
                </div>
                <Link href={`/news/${item.encode_titl}`}>
                    <h2 className="text-lg font-semibold my-3 hover:text-destructive">{item.post_title.substring(0, 65)}</h2>
                </Link>
            </div>

        </div>
    );
};

export default NewsCard;