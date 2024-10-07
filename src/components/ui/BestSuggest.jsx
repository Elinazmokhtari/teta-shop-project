import React from "react";
import Image from "next/image";
import banner4 from "./../../assets/images/banner4.jpg";
// import banner2 from "./../../assets/images/banner2.jpg";
import banner5 from "./../../assets/images/banner5.jpg";

function BestSuggest() {
    return (
        <>
            <section className=" container  my-10 " data-aos="fade-up bg-rose-400 ">
                <div className="  grid grid-cols-1 md:grid-cols-2 gap-10 text-[#172B7A] px-5 md:px-0 ">
                    <div className="relative rounded-[30px]  overflow-hidden group  ">
                        <Image
                            src={banner4}
                            className="group-hover:scale-105 transition-all duration-500 "
                        />
                        <div className="absolute bottom-[0%] right-[0] flex flex-wrap items-center justify-center gap-2 p-4 md:p-10 h-full ">
                            <div>
                                <h3 className="font-bold text-[28px] ">ضد آفتاب</h3>
                                <span className="text-[15px]">از پوست خود مراقبت کنید</span>
                                <a className="flex w-full text-[13px] mt-2 " href="">
                                    خرید کنید
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-[30px]  overflow-hidden group  ">
                        <Image
                            src={banner5}
                            className="group-hover:scale-105 transition-all duration-500 "
                            alt="logo"
                        />
                        <div className="absolute bottom-[0%] right-[0] flex flex-wrap items-center justify-center gap-2 p-4 md:p-10 h-full  ">
                            <div>
                                <h3 className="font-bold text-[28px] ">ماسک صورت</h3>
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

export default BestSuggest;
