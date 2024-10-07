"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import logo2 from "../../assets/images/logo2.svg";
import logo3 from "../../assets/images/logo3.svg";
import logo4 from "../../assets/images/logo4.svg";
import logo5 from "../../assets/images/logo5.svg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function LogoSlider() {
    return (
        <>
            <section
                className="h-[300px]  container flex justify-center items-center"
                data-aos="fade-up"
            >
                <div className="w-[90%] container mx-auto mb-4">
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={8}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{ delay: 1000 }}
                        breakpoints={{
                            640: {
                                spaceBetween: 16,
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className=" h-[100px] flex  justify-center items-center">
                                <Image src={logo} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" h-[100px] flex  justify-center items-center">
                                <Image src={logo2} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" h-[100px] flex  justify-center items-center">
                                <Image src={logo3} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" h-[100px] flex  justify-center items-center">
                                <Image src={logo4} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" h-[100px] flex  justify-center items-center">
                                <Image src={logo5} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" h-[100px] flex  justify-center items-center">
                                <Image src={logo} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" h-[100px] flex  justify-center items-center">
                                <Image src={logo2} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" h-[100px] flex  justify-center items-center">
                                <Image src={logo3} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" h-[100px] flex  justify-center items-center">
                                <Image src={logo4} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" h-[100px] flex  justify-center items-center">
                                <Image src={logo5} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default LogoSlider;
