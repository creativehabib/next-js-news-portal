import React from 'react';
import {NewsItem} from "@/types/news";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
interface NewsCardProps {
    item: NewsItem
}

const NewsCard = ({item}: NewsCardProps) => {
    return (
        <div className="border p-4 rounded-md shadow-sm">
            <Link href={`/news/${item.encode_titl}`}>
                <Image src={item.image_thumb} alt={item.post_title} width={500}  height={500}
                    className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-300"
                />
            </Link>
            <div>
                <h2 className="text-xl font-semibold my-3">{item.post_title.substring(0,65)}</h2>
                <Link href={`/news/${item.encode_titl}`}>
                    <Button className="text-blue-500 hover:underline">Read More</Button>
                </Link>
            </div>

        </div>
    );
};

export default NewsCard;