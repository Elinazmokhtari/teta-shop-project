"use client";

import React from "react";
import { IoMdStar } from "react-icons/io";
import Image from "next/image";


function BestProductCard({ product }) {
  return (
    <>
      <section>
        <div className="">
          <div className="w-full h-full flex my-4">
            <div className=" w-[100px] pl-3">
              <Image src={product.image1} />
            </div>
            <div className=" w-full">
              <a href="" className="text-[#707070] text-[15px]">
                {product.title}
              </a>
              <div className="flex items-center text-[13px] ">
                <IoMdStar className="text-[17px] text-[#FFD87F] ml-1" />
                {product.rate.toFixed(2)}
              </div>
              <div className="text-[#F9467D] text-[14px]">
                {product.price.toLocaleString()}تومان
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BestProductCard;
