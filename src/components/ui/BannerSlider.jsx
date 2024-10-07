"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import Image from "next/image";
import leaf from "../../assets/images/leaf1.png";
import leaf2 from "../../assets/images/leaf2.png";
import leaf3 from "../../assets/images/leaf3.png";
import pro1 from "../../assets/images/pro-1.png";
import pro2 from "../../assets/images/pro-2.png";

function BannerSlider() {
    return (
        <>
            <section className="container !pt-0">
                <div id="homeSlider" className="w-full">
                    <Swiper
                        modules={[Navigation, Autoplay, EffectFade]}
                        effect="fade"
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={true}
                        loop={true}
                        // autoplay option disable on Tuoch => disableOnInteraction: true
                        autoplay={{ delay: 3000 }}
                    >
                        <SwiperSlide>
                            <div className="w-full h-[700px] bg-[#FDEECD]  flex flex-wrap-reverse lg:flex-nowrap justify-center  items-center gap-8 lg:px-[10px]">
                                <div className="p-4 pr-12 lg:pr-24">
                                    <h1 className="text-[48px] mb-8 font-bold text-[#384063] animate__animated animate__fadeInRight">
                                        کرم پودر <br /> انواع پوست <br /> حاوی ویتامین E4
                                    </h1>
                                    <p className="mb-8 text-[#737373] animate__animated animate__fadeInRight">
                                        کرم پودر در طیف رنگی مختلف به شما امکان پیدا کردن رنگ مناسب
                                        را می دهد. این کرم پودر برای انواع پوست مناسب است.
                                    </p>
                                    <button className="animate__animated animate__fadeInRight px-6 h-[50px] bg-[#384063] flex items-center justify-center text-white rounded-full font-bold">
                                        مشاهده ی محصول
                                    </button>
                                </div>
                                <div className="hidden lg:block w-[650px] flex-grow h-full  shrink-0 relative">
                                    <Image src={leaf} className="absolute left-0" />
                                    <div className="bg-[#FEF6E4] w-[300px] h-[300px] rounded-full absolute top-10 righ-0 "></div>
                                    <div className="bg-[#FFD991] w-[480px] h-[480px] rounded-full absolute top-[18%] left-[8%]">
                                        <Image
                                            src={leaf2}
                                            className="absolute right-20 -top-24 z-10 animate__animated animate__fadeInRight"
                                        />

                                        <Image
                                            src={leaf3}
                                            className="absolute left-[30%] bottom-20 animate__animated animate__fadeInLeft"
                                        />
                                        <Image
                                            src={pro2}
                                            className="z-[100] absolute top-16 left-10 animate__animated animate__fadeInUp"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-[700px] bg-[#CDFDFF] flex flex-wrap-reverse lg:flex-nowrap justify-center  items-center gap-8 lg:px-[10px]">
                                <div className="p-4  pr-12 lg:pr-24 ">
                                    <h1 className="text-[48px] mb-8 font-bold text-[#384063] animate__animated animate__fadeInRight">
                                        کرم پودر <br /> انواع پوست <br /> حاوی ویتامین E4
                                    </h1>
                                    <p className="mb-8 text-[#737373] animate__animated animate__fadeInRight">
                                        شامپو تقویت کننده و حجم دهنده حاوی روغن آملا عصاره مالوا و
                                        عصاره زیرفون می باشد که باعث تغذیه ی مو و استحکام بخشیدن به
                                        مو می شود.
                                    </p>
                                    <button className="animate__animated animate__fadeInRight px-6 h-[50px] bg-[#384063] flex items-center justify-center text-white rounded-full font-bold">
                                        مشاهده ی محصول
                                    </button>
                                </div>
                                <div className="hidden lg:block w-[650px] flex-grow h-full  shrink-0 relative">
                                    <Image src={leaf} className="absolute left-0" />
                                    <div className="bg-[#E2FFFE] w-[300px] h-[300px] rounded-full absolute top-12 right-[10%] "></div>

                                    <div className="bg-[#9EF5FF] w-[480px] h-[480px] rounded-full absolute top-[18%] left-[12%]">
                                        <Image
                                            src={leaf2}
                                            className="absolute right-20 -top-24 z-10 animate__animated animate__fadeInRight"
                                        />

                                        <Image
                                            src={leaf3}
                                            className="absolute left-[30%] bottom-20 animate__animated animate__fadeInLeft"
                                        />
                                        <Image
                                            src={pro1}
                                            className="z-[100] absolute top-16 left-10 animate__animated animate__fadeInUp"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default BannerSlider;
