"use client"

import Image from "next/image";
import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";
import { PiEyeLight } from "react-icons/pi";
import { SlBasket } from "react-icons/sl";
import Link from "next/link";


function ProductCard({ product, isNew }) {

  return (
    <>
      <Link href={`/product/${product.id}`}>
        <div className="w-full bg-white  relative group">
          <div className="aspect-square relative cursor-pointer">
            <Image src={product.image2} fill />
            <Image
              src={product.image1}
              fill
              className="group-hover:opacity-0 transition-opacity duration-500"
            />
            {isNew ? (
              <div className="opacity-0 group-hover:opacity-100 transition-opacity  w-full  h-[45px] duration-500   absolute bottom-1   flex items-center  group ">
                <span className="bg-[#F9467D] h-full w-full mx-2 rounded-[2px] font-bold text-white text-[15px] flex items-center  justify-center ">
                  <SlBasket className="pl-1 text-[23px]" />
                  انتخاب گزینه ها
                </span>
              </div>
            ) : (
              <div className="opacity-0 group-hover:opacity-100 transition-opacity  h-[40px] duration-500  bg-white absolute bottom-1 right-1 border border-gray flex items-center  px-3 gap-3 *:text-[20px] group ">
                <SlBasket className="hover:text-[#F9467D] transition-all duration-300 " />
                <PiEyeLight className="hover:text-[#F9467D] transition-all duration-300 " />
                <SlRefresh className="hover:text-[#F9467D] transition-all duration-300 " />
                <IoHeartOutline className="hover:text-[#F9467D] transition-all duration-300 " />
              </div>
            )}
          </div>

          <div className="p-2">
            <span className="font-bold text-[16px]">{product.title}</span>
            <div className="*:text-[#8F8F8F] text-[14px] font-bold">
              <span>آرایش</span>.<span>صورت</span>
            </div>
            <p className="text-[15px]">
              {product.price.toLocaleString()}
              <span className="mr-1">تومان</span>
            </p>
            <div className="text-[13px] font-bold flex items-center">
              <IoMdStar className="text-[17px] text-[#FFD87F] ml-1" />
              {product.rate.toFixed(2)}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
