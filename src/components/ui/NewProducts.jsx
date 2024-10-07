import React from "react";
import data from "../../data/productsData";
import { GoArrowLeft } from "react-icons/go";
import ProductCard from "./ProductCard";
import Tabs from "./Tabs";
import Link from "next/link";

function NewProducts() {
    return (
        <>
            <section className="container" data-aos="fade-up">
                <div className=" flex flex-wrap bg-rose px-5 xl:px-0">
                    <div className=" w-full flex flex-wrap  items-center my-12">
                        <h2 className="text-[20px] ml-6 text-[#415092]">
                            محصولات جدید برای این تعطیلات
                        </h2>
                        <Link className="flex  items-center mt-2 xs:mt-0 text-[#F9467D] " href="/">
                            بیشتر ببین
                            <GoArrowLeft className="mr-2 text-[22px]" />
                        </Link>
                    </div>
                    <Tabs />
                    <div className="w-full  grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {data.slice(8, 12).map((item) => {
                            return <ProductCard product={item} key={item.id} isNew={true} />;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewProducts;
