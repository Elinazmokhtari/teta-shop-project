"use client";
import React, { useRef, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";
import { HiOutlineTruck } from "react-icons/hi2";
import banks from "./../../../assets/images/banks.png";
import Image from "next/image";
import {
  FaFacebook,
  FaLinkedinIn,
  FaPinterest,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import data from "../../../data/productsData";
import { notFound } from "next/navigation";
import Products from "@/components/ui/Products";
import NewProducts from "@/components/ui/NewProducts";
import useBasketStore from "@/zustand/useBasketStore";

function ProductPage({ params }) {
  // const [swiper, setSwiper] = useState();
  const { addToBasket, products, deleteFromBasket, increase, decrease } =
    useBasketStore();

  const swiper = useRef();

  const id = params.id;

  const product = data.find((item) => {
    if (item.id == id) {
      return true;
    }
    return false;
  });

  const productInBasket = products.find((item) => {
    if (item.id == id) {
      return true;
    }
    return false;
  });

  if (!product) {
    return notFound();
  }

  return (
    <>
      <section className="container !p-0">
        <div className="w-full h-full grid grid-cols-3 md:grid-cols-5 ">
          <div className="col-span-5 md:col-span-3 flex p-2">
            <div className=" w-[30%] hidden lg:grid grid-rows-4 gap-2 *:border">
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  swiper.current.slideTo(0);
                }}
              >
                <Image src={product.image1} alt="pro1" fill />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  swiper.current.slideTo(1);
                }}
              >
                <Image src={product.image2} alt="pro1" fill />
              </div>
            </div>
            <div
              id="homeSlider"
              className=" w-full h-full  lg:w-[70%]  lg:mr-2  "
            >
              <Swiper
                modules={[Navigation]}
                spaceBetween={1}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                navigation={true}
                className="h-full"
                onSwiper={(slider) => {
                  // setSwiper(slider);
                  swiper.current = slider;
                }}
              >
                <SwiperSlide>
                  <div className=" h-full w-full">
                    <Image
                      src={product.image1}
                      alt="cover"
                      className="w-full h-full bg-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-full w-full">
                    <Image
                      src={product.image2}
                      alt="cover"
                      className="w-full h-full bg-cover"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-span-5 md:col-span-2 p-2 ">
            <div className="  bg-white p-6 shadow">
              <div className="w-full  ">
                <span> {product.title}</span>
              </div>
              <div className="flex items-center w-full mt-3">
                <IoMdStar className="text-[17px] text-[#FFD87F]" />
                <IoMdStar className="text-[17px] text-[#FFD87F]" />
                <IoMdStar className="text-[17px] text-[#FFD87F]" />
                <IoMdStar className="text-[17px] text-[#FFD87F]" />
                <IoMdStar className="text-[17px] text-[#FFD87F]" />
                <span className="pr-2 text-[12px]">1نظرات</span>
              </div>
              <div className="w-full mt-4">
                {product.price.toLocaleString()}
              </div>
              <div className="w-full mt-5 text-[14px]">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
              <div className="w-full mt-5 grid grid-cols-3">
                <div className="col-span-2">
                  <div className="grid grid-cols-3 gap-3">
                    {productInBasket && (
                      <div className="col-span-2 sm:col-span-1  bg-gray-300 flex items-center  h-full p-2 rounded-sm ">
                        <button
                          onClick={() => increase(product.id)}
                          className="outline-none  flex items-center hover:text-slate-500 transition-all duration-200"
                        >
                          <FiPlus />
                        </button>
                        <span className="flex flex-1 justify-center items-center">
                          {productInBasket ? productInBasket.count : 1}
                        </span>
                        <button
                          onClick={() => {
                            if (productInBasket.count !== 1) {
                              decrease(product.id);
                            }
                          }}
                          className="outline-none flex items-center hover:text-slate-500  transition-all duration-200"
                        >
                          <FiMinus />
                        </button>
                      </div>
                    )}
                    <div className="col-span-3 sm:col-span-2 h-full  text-white">
                      {products
                        .map((item) => {
                          return item.id;
                        })
                        .includes(product.id) ? (
                        <button
                          onClick={() => deleteFromBasket(product.id)}
                          className=" h-full w-full bg-[#e73333] rounded-sm  text-[17px] p-2 hover:bg-[#8a2525] transition-all duration-300"
                        >
                          حذف از سبد خرید{" "}
                        </button>
                      ) : (
                        <button
                          onClick={() => addToBasket({ ...product, count: 1 })}
                          className=" h-full w-full bg-[#00BE6B] rounded-sm  text-[17px] p-2 hover:bg-[#019957e7] transition-all duration-300"
                        >
                          افزودن به سبد خرید
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="bg-[#FF5556] mt-3 p-2 rounded-sm flex items-center justify-center text-white hover:bg-[#dd3838dc] transition-all duration-300">
                    <button>خرید سریع</button>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-wrap items-center text-[#9B9B9B]   mt-7">
                <div className="flex items-center text-[15px]">
                  <IoHeartOutline />
                  <h4 className="mr-3">افزودن به علاقه مندی ها</h4>
                </div>
                <div className="flex items-center text-[15px] mr-10">
                  <SlRefresh />
                  <h4 className="mr-3">مقایسه</h4>
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-6 mt-5 text-[13px] text-[#9B9B9B]  ">
                <a href="" className="border-b-2 pb-1 border-b-[#9B9B9B]">
                  راهنمای اندازه
                </a>
                <a href="" className="border-b-2 border-b-[#9B9B9B]">
                  مرجوع کردن کالا
                </a>
                <a href="" className="border-b-2 border-b-[#9B9B9B]">
                  سوالات متداول
                </a>
              </div>
              <div className="flex  flex-wrap mt-5 items-center gap-2 text-[15px]">
                <HiOutlineTruck className="text-[21px]" />
                <h3>ارسال رایگان با خرید</h3>
                <div className="text-[#FF5556]">
                  <span>650,000</span>تومان
                </div>
              </div>
              <div className="mt-5 text-[12px]">
                <h4>
                  شناسه<span className="mr-1">:</span>
                  <a className="mr-1">123458</a>
                </h4>
                <h4>
                  دسته بندی ها<span className="mr-1">:</span>
                  <a className="mr-1 hover:text-blue-700"> حمام و بدن</a>
                  <a href="" className="mr-1 hover:text-blue-700">
                    , درمان بدن
                  </a>
                </h4>
                <h4>
                  برچسب ها<span className="mr-1">:</span>
                  <a className="mr-1 hover:text-blue-700">بدن</a>
                  <a href="" className="mr-1 hover:text-blue-700">
                    , حمام
                  </a>
                </h4>
              </div>
              <div className="flex flex-row-reverse flex-wrap w-full justify-end items-center gap-5  mt-6 text-[#ADADAD] text-[15px]">
                <FaPinterest />
                <FaLinkedinIn />
                <FaWhatsapp />
                <FaTelegram />
                <FaTwitter />
                <MdEmail />
                <FaFacebook />
              </div>
              <div className="mt-5 ">
                <Image src={banks} alt="banks" />
              </div>
            </div>
          </div>
        </div>
        <NewProducts />
      </section>
    </>
  );
}

export default ProductPage;
