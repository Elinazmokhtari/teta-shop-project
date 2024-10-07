"use client";
import useBasketStore from "@/zustand/useBasketStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";

export default function BasketDrawer() {
    const { products, basketDrawerStatus, closeBasketDrawer } = useBasketStore();
    return (
        <div
            className="h-full w-full fixed bg-black bg-opacity-70 top-0 left-0 z-50"
            style={{ visibility: basketDrawerStatus ? "visible" : "hidden" }}
        >
            <div
                className="h-full w-[300px] bg-white fixed flex flex-col transition-all duration-500"
                style={{ left: basketDrawerStatus ? "0" : "-300px" }}
            >
                <div className="p-4 flex items-center justify-between bg-[#F3F6F8]">
                    <div>
                        <p className="text-slate-900">سبد خرید</p>
                        <p className="text-slate-500">{products.length} مورد</p>
                    </div>
                    <div onClick={closeBasketDrawer} className="cursor-pointer">
                        <IoMdClose className="text-[24px]" />
                    </div>
                </div>
                <div className="flex-1 overflow-auto p-4">
                    {products.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 mb-4">
                            <Image src={item.image1} alt={item.title} width={70} height={70} />
                            <div>
                                <p>{item.title}</p>
                                <p>
                                    {item.count} * {item.price.toLocaleString()} تومان
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-[#F3F6F8] p-4">
                    <div className="flex items-center justify-between">
                        <p>جمع: </p>
                        <p>
                            {products
                                .reduce((total, item) => total + item.price * item.count, 0)
                                .toLocaleString()}{" "}
                            تومان
                        </p>
                    </div>
                    <Link href="/basket">
                        <button
                            onClick={closeBasketDrawer}
                            className="mt-4 h-[40px] w-full px-2 flex items-center justify-center text-white bg-[#f9467d]"
                        >
                            مشاهده سبد خرید
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
