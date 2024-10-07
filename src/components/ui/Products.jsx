import React from "react";
import data from "../../data/productsData";
import { GoArrowLeft } from "react-icons/go";
import ProductCard from "./ProductCard";
import Link from "next/link";

function Products() {
    return (
        <>
            <section className="container" data-aos="fade-up">
                <div className=" flex flex-wrap px-5 xl:px-0">
                    <div className=" w-full flex flex-wrap items-center my-12">
                        <h2 className="text-[20px] ml-6 text-[#415092]">
                            با پرفروش ترین های ما آشنا شوید
                        </h2>

                        <a className="flex  items-center mt-2 xs:mt-0 text-[#F9467D]" href="">
                            بیشتر ببین
                            <GoArrowLeft className="mr-2 text-[22px]" />
                        </a>
                    </div>

                    <div className="w-full  grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-3">
                        {data.slice(0, 10).map((item) => {
                            return <ProductCard product={item} key={item.id} />;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Products;
