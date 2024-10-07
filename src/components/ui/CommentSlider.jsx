"use client";
import React from "react";
import Image from "next/image";
import woman from "../../assets/images/woman.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import logo from "../../assets/images/logo.svg";
import logo2 from "../../assets/images/logo2.svg";
import commentSlider1 from "../../assets/images/commentSlider1.jpg";
import commentSlider2 from "../../assets/images/commentSlider2.jpg";

function CommentSlider() {
    return (
        <>
            <section className="container" data-aos="fade-up">
                <div className="grid grid-cols-3 gap-4 text-center md:text-right px-5 xl:px-0 ">
                    <div className="col-span-3 lg:col-span-2">
                        <div>
                            <h1 className="mb-5 text-[32px] text-[#172C7B]">
                                عشق از مشتریان ما در سراسر جهان
                            </h1>
                            <p className="text-[#54595F] mb-5">
                                {" "}
                                محصولات تتا تضمینی برای بهره مندی از بالاترین کیفیت محصولات و
                                معتبرترین برندها در سراسر جهان هستند. هدف اصلی ما جلب اعتماد مشتریان
                                و تبدیل آنها به یک تجربه خرید مطمئن و برد برد است.
                            </p>
                            <div id="homeSlider" className="bg-[#F9F8F8] w-full p-4">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={32}
                                    slidesPerView={1}
                                    loop={true}
                                    navigation={true}
                                    autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                                    breakpoints={{
                                        500: {
                                            spaceBetween: 16,
                                            slidesPerView: 2,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="p-8 bg-[#F3F3F3] flex justify-center items-center flex-wrap text-center">
                                            <p className="mb-4 text-[15px]">
                                                یک پروفسور لاتین در کالج سیدنی ویرجینیا، بیشتر نگاه
                                                کرد.
                                            </p>
                                            <Image
                                                src={commentSlider1}
                                                alt="pic"
                                                className="mb-2 rounded-full w-[80px] h-[80px]"
                                            />
                                            <span className="w-full font-bold text-[#A08989]">
                                                سارا جوناس
                                            </span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="p-8 bg-[#F3F3F3] flex justify-center items-center flex-wrap text-center">
                                            <p className="mb-4 text-[15px]">
                                                یک پروفسور لاتین در کالج سیدنی ویرجینیا، بیشتر نگاه
                                                کرد.
                                            </p>
                                            <Image
                                                src={commentSlider2}
                                                alt="pic"
                                                className="mb-2 rounded-full w-[80px] h-[80px] "
                                            />
                                            <span className="w-full font-bold text-[#A08989]">
                                                جان دو
                                            </span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="p-8 bg-[#F3F3F3] flex justify-center items-center flex-wrap text-center">
                                            <p className="mb-4 text-[15px]">
                                                یک پروفسور لاتین در کالج سیدنی ویرجینیا، بیشتر نگاه
                                                کرد.
                                            </p>
                                            <Image
                                                src={commentSlider1}
                                                alt="pic"
                                                className="mb-2 rounded-full w-[80px] h-[80px]"
                                            />
                                            <span className="w-full font-bold text-[#A08989]">
                                                سارا جوناس
                                            </span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="p-8 bg-[#F3F3F3] flex justify-center items-center flex-wrap text-center">
                                            <p className="mb-4 text-[15px]">
                                                یک پروفسور لاتین در کالج سیدنی ویرجینیا، بیشتر نگاه
                                                کرد.
                                            </p>
                                            <Image
                                                src={commentSlider2}
                                                alt="pic"
                                                className="mb-2 rounded-full w-[80px] h-[80px] "
                                            />
                                            <span className="w-full font-bold text-[#A08989]">
                                                جان دو
                                            </span>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        {/* <Swiper */}
                    </div>
                    <div className="col-span-3 mx-auto md:col-span-1 ">
                        <Image
                            className="bg-cover mt-4 md:mt-0 w-[200px] h-[280px] md:w-full md:h-full flex md:hidden  lg:flex"
                            src={woman}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default CommentSlider;
