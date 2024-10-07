import React from "react";
import Image from "next/image";
import banner1 from "./../../assets/images/banner.jpg";
import banner2 from "./../../assets/images/banner2.jpg";
import banner3 from "./../../assets/images/banner3.jpg";

function Suggestion() {
    return (
        <>
            <section className="container" data-aos="fade-up">
                <div className="flex flex-wrap px-5 md:px-0 md:flex-nowrap gap-2 justify-center lg:justify-evenly ">
                    <div className="relative w-[400px] h-full rounded-[30px]  overflow-hidden group ">
                        <Image
                            src={banner3}
                            className="group-hover:scale-105 transition-all duration-500 "
                        />
                        <div className="absolute bottom-[0%] left-[0] flex flex-wrap items-center gap-2 h-[90%] w-[50%] *:w-full px-3">
                            <div className="flex flex-wrap  text-[#172B7A]">
                                <h3 className="font-bold text-[20px] ">ضد آفتاب</h3>
                                <span className="text-[15px]">از پوست خود مراقبت کنید</span>
                                <a className="flex w-full text-[13px] mt-2 " href="">
                                    خرید کنید
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[400px] h-full rounded-[30px]  overflow-hidden group ">
                        <Image
                            src={banner1}
                            className="group-hover:scale-105 transition-all duration-500 "
                            alt="logo"
                        />
                        <div className="absolute bottom-[0%] left-[0] flex flex-wrap items-center gap-2  h-[90%] w-[50%] *:w-full px-3">
                            <div className="flex flex-wrap    text-[#172B7A]">
                                <h3 className="font-bold text-[20px] ">ماسک صورت</h3>
                                <span className="text-[15px]">از پوست خود مراقبت کنید</span>
                                <a className="flex w-full text-[13px] mt-2" href="">
                                    خرید کنید
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[400px] h-full rounded-[30px]  overflow-hidden group ">
                        <Image
                            src={banner2}
                            className="group-hover:scale-105 transition-all duration-500 "
                        />
                        <div className="absolute bottom-[0%] left-[0] flex flex-wrap items-center gap-2  h-[90%] w-[50%] *:w-full px-3">
                            <div className="flex flex-wrap   text-[#172B7A]">
                                <h3 className="font-bold text-[20px]  ">مراقبت از پوست</h3>
                                <span className="text-[15px]">از پوست خود مراقبت کنید</span>
                                <a className="flex w-full text-[13px] mt-2" href="">
                                    خرید کنید
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Suggestion;
