"use client";
import Image from "next/image";
import logo from "./../../assets/images/teta-rtl.svg";
import { IoPersonOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoBasketOutline } from "react-icons/io5";
import useBasketStore from "@/zustand/useBasketStore";
import Link from "next/link";
import { useEffect } from "react";
import BasketDrawer from "../ui/BasketDrawer";
import SearchDrop from "../ui/SearchDrop";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

function Header() {
    const { products, openBasketDrawer, setProductsFromLocalStorage } = useBasketStore();

    useEffect(() => {
        AOS.init({ duration: 1000, delay: 200 });
        AOS.refresh();
    }, []);

    useEffect(() => {
        const productsInLocalStorage = localStorage.getItem("productsStorage");
        if (productsInLocalStorage) {
            setProductsFromLocalStorage(JSON.parse(productsInLocalStorage));
        } else {
            localStorage.setItem("productsStorage", "[]");
        }
    }, []);

    return (
        <>
            <section className="w-full h-[90px] container m-auto !py-0 !px-2 lg:px-0">
                <div className="row  h-full m-auto flex justify-between items-center">
                    <div className="w-full h-full flex  items-center ">
                        <Link href="/">
                            <div className="w-[86px] h-[44px]">
                                <Image src={logo} alt="logo" />
                            </div>
                        </Link>
                        <Link href="/">
                            <ul className="hidden mr-10 w-[100%] h-full lg:flex lg:items-center  ">
                                <li className="m-4 hover:text-[#f9467d] transition-all duration-300 delay-75">
                                    دموها
                                </li>
                                <li className="m-4 hover:text-[#f9467d] transition-all duration-300 delay-75">
                                    فروشگاه
                                </li>
                                <li className="m-4 hover:text-[#f9467d] transition-all duration-300 delay-75">
                                    محصولات
                                </li>
                                <li className="m-4 hover:text-[#f9467d] transition-all duration-300 delay-75">
                                    وبلاگ
                                </li>
                                <li className="m-4 hover:text-[#f9467d] transition-all duration-300 delay-75">
                                    صفحات
                                </li>
                            </ul>
                        </Link>
                    </div>
                    <div className="flex justify-between h-full items-center w-[220px] text-[28px]">
                        <span
                            onClick={openBasketDrawer}
                            className="relative cursor-pointer bg-stone-50 p-2 rounded-md hover:bg-stone-200 transition-all duration-500"
                        >
                            <IoBasketOutline />
                            <div className="size-[18px] text-white flex items-center justify-center text-sm bg-[#f9467d] absolute -top-1 rounded-sm -right-1">
                                {products.length}
                            </div>
                        </span>
                        <span className="bg-stone-50 p-2 rounded-md hover:bg-stone-200 transition-all duration-500">
                            <IoHeartOutline />
                        </span>
                        <span className="bg-stone-50 p-2 rounded-md hover:bg-stone-200 transition-all duration-500">
                            <IoPersonOutline />
                        </span>
                        <SearchDrop />
                    </div>
                </div>
            </section>
            {/* Basket Drawer */}
            <BasketDrawer />
        </>
    );
}

export default Header;
