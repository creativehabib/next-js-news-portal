import React from 'react';
import Image from "next/image";
import bannerImage from "@/assets/banner.jpg"
import {Button} from "@/components/ui/button";

const Banner = () => {
    return (
        <section className="bg-gray-100 py-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 lg:px-8">
                <div className="w-full">
                    <Image src={bannerImage} alt={'banner image'} placeholder={'blur'} className={'w-full h-auto object-cover rounded-md'}/>
                </div>
                {/* content */}
                <div className="flex flex-col space-y-6">
                    <h4 className="text-sm font-medium text-gray-500">Technology</h4>
                    <h2 className="text-3xl font-bold text-gray-900">OpenAi is Growing Fast and Burning Throw Piles of Money</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit interdum inceptos nec, duis mus curae nullam primis orci dictum nascetur phasellus penatibus, ac ad varius risus pulvinar bibendum imperdiet himenaeos enim. Est consequat fermentum mauris mi aptent penatibus litora duis, rutrum ligula turpis phasellus quam per commodo sociosqu, quis aliquet sagittis ultrices vulputate aliquam hac.</p>
                    <p>dictum dignissim nisi porttitor nam fermentum. Sapien sagittis dignissim nunc commodo accumsan erat metus habitasse cum scelerisque eu euismod torquent, hendrerit libero nam pulvinar curabitur interdum egestas imperdiet montes id cubilia. Torquent penatibus integer semper nec justo tristique varius nisl massa, pulvinar posuere arcu parturient consequat nisi ligula ad, aptent auctor neque feugiat praesent volutpat pretium vulputate.</p>
                    <Button variant={'default'}>Read More</Button>
                </div>
            </div>
        </section>
    );
};

export default Banner;