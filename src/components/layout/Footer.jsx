import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Image from "next/image";
import logo from "./../../assets/images/teta-rtl.svg";
import banks from "./../../assets/images/banks.png";
import { PiPhoneCallLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

function Footer() {
  return (
    <>
      <section className="w-full container m-auto !py-0">
        <div className="row  flex  m-auto flex-wrap">
          <div className="w-full py-10 mb-6 bg-[#FDEECD] rounded-3xl">
            <div className="w-[88%]  m-auto lg:flex  gap-7 items-center">
              <div className=" w-full lg:w-[30%] h-[400px] flex flex-wrap items-start py-9">
                <div className="w-[86px] h-[44px] ">
                  <Image src={logo} alt="logo" />
                </div>
                <div className="flex text-[18px] w-full">
                  <span className="p-2   hover:text-[#f9467d] transition-all duration-500  delay-75">
                    <IoLogoFacebook />
                  </span>
                  <span className="p-2   hover:text-[#f9467d] transition-all duration-500  delay-75">
                    <FaTwitter />
                  </span>
                  <span className="p-2   hover:text-[#f9467d] transition-all duration-500  delay-75">
                    <FaYoutube />
                  </span>
                  <span className="p-2   hover:text-[#f9467d] transition-all duration-500  delay-75">
                    <FaPinterest />
                  </span>
                </div>
                <p className="w-[90%] text-[15px]">
                  کایت استودیو تیمی از توسعه دهندگان و طراحان جوان و خلاقی است
                  که علاقه مند به ایجاد تم های هنری هستند.
                </p>
                <Image src={banks} alt="banks" />
              </div>
              <div
                className=" w-full py-9 lg:w-[40%] h-[400px] grid
              grid-cols-3 *:py-1 "
              >
                <span className="">کالکشن ها</span>
                <span className="">فروشگاه </span>
                <span className="">محصولات</span>
                <span className="">درباره ما</span>
                <span className="">تماس با ما</span>

                <span className="">بلاگ</span>
                <span className="">ارسال کالا</span>
                <span className="">مرجوع کردن کالا</span>
                <span className="">قوانین شرکت</span>
                <span className="">محل ما</span>

                <span className="">ساعت کاری</span>
                <span className="">پشتیبانی</span>
                <span className="">علاقه مندی ها</span>
                <span className="">مشاغل</span>
                <span className="">گارانتی</span>
              </div>
              <div className=" w-full lg:w-[30%] h-[400px] flex flex-wrap items-start py-9">
                <span className="w-full">اشتراک</span>
                <div className="w-full h-[120px] flex flex-wrap items-center ">
                  <input
                    type="text"
                    placeholder="ایمیل"
                    className="w-[230px] p-3 outline-none hover:shadow-md transition-all duration-500  "
                  />
                  <button className="bg-[#f9467d] w-[230px] p-3 text-white hover:bg-[#FDEECD] border-2 border-[#f9467d] transition-all duration-500  delay-75 hover:text-[#f9467d]">
                    اشتراک
                  </button>
                </div>
                <div className="w-full flex items-center">
                  <TfiEmail className="text-[25px]"/>
                  <span className="mr-5">Company@gmail.com</span>
                </div>
                <div className="w-full flex items-center">
                  <PiPhoneCallLight className="text-[25px]" />
                  <span className="mr-5">021-81000000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mb-6 bg-[#172B7A] rounded-3xl h-[110px]">
            <div className="flex items-center h-full w-[88%] m-auto justify-between text-white">
              <p className="">توسعه توسط الناز مختاری | ۱۴۰۳ ©</p>
              <div className="flex">
                <span className="p-2 text-[23px]  hover:text-[#f9467d] transition-all duration-500  delay-75">
                  <IoLogoFacebook />
                </span>
                <span className="p-2 text-[23px]  hover:text-[#f9467d] transition-all duration-500  delay-75">
                  <FaTwitter />
                </span>
                <span className="p-2 text-[23px]  hover:text-[#f9467d] transition-all duration-500  delay-75">
                  <FaYoutube />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
