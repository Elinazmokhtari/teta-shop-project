"use client";

import React from "react";
import { GoArrowLeft } from "react-icons/go";
import data from "../../data/productsData";
import BestProductCard from "./BestProductCard";
function BestProduct() {
    return (
        <section className="container" data-aos="fade-up">
            <div className=" flex flex-wrap bg-rose px-5 xl:px-0">
                <div className=" w-full flex flex-wrap  items-center">
                    <h2 className="text-[20px] ml-6 text-[#415092]">محصول کامل، بهترین تجربه</h2>
                    <a className="flex  items-center mt-2 xs:mt-0 text-[#F9467D] " href="">
                        بیشتر ببین
                        <GoArrowLeft className="mr-2 text-[22px]" />
                    </a>
                </div>

                <div className="w-full  grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-3 sm:col-span-1 p-5">
                        <div className="px-2 text-black-transparent py-5 text-[25px]">
                            <span>محبوب ها</span>
                        </div>
                        {data.slice(0, 4).map((item) => (
                            <BestProductCard product={item} />
                        ))}
                    </div>
                    <div className="col-span-3 sm:col-span-1 p-5 ">
                        <div className="px-2 text-black-transparent py-5 text-[25px]">
                            <span>بهترین فروشندگان</span>
                        </div>
                        {data.slice(4, 8).map((item) => (
                            <BestProductCard product={item} />
                        ))}
                    </div>
                    <div className="col-span-3 sm:col-span-1 bg-[#F3F3F3] rounded-3xl p-5">
                        <div className="px-2 text-black-transparent py-5 text-[25px]">
                            <span>با تخفیف</span>
                        </div>
                        {data.slice(8, 12).map((item) => (
                            <BestProductCard product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BestProduct;
