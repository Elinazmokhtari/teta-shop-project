"use client";

import useBasketStore from "@/zustand/useBasketStore";
import Image from "next/image";
import { BsDash, BsPlus } from "react-icons/bs";
import empty from "../../assets/images/empty-cart.svg";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function page() {
  const { products, increase, decrease, deleteFromBasket } = useBasketStore();
  return (
    <div className="container !p-0">
      <div className="grid grid-cols-12 gap-4  mb-4">
        <div className="col-span-12 lg:col-span-8 p-4">
          {products.length > 0 ? (
            products.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center gap-4 mb-4 justify-between select-none shadow p-4"
              >
                <div className=" flex items-center gap-2 shrink-0">
                  <Image
                    src={item.image1}
                    alt={item.title}
                    width={70}
                    height={70}
                  />
                  <p>{item.title}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <p>{(item.price * item.count).toLocaleString()} تومان</p>
                  <div className="flex items-center gap-2">
                    <div
                      onClick={() => increase(item.id)}
                      className="cursor-pointer size-[30px] rounded-full flex items-center justify-center bg-slate-100"
                    >
                      <BsPlus className="text-[24px] text-[#f9467d] " />
                    </div>
                    <p className="text-lg">{item.count}</p>
                    <div
                      onClick={() => {
                        if (item.count !== 1) {
                          decrease(item.id);
                        } else {
                          deleteFromBasket(item.id);
                        }
                      }}
                      className={`cursor-pointer size-[30px] rounded-full flex items-center justify-center bg-slate-100 ${
                        item.count === 1 ? "" : ""
                      }`}
                    >
                      {item.count === 1 ? (
                        <RiDeleteBin5Line className="text-red-500" />
                      ) : (
                        <BsDash className="text-[24px] text-[#f9467d] " />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full h-full flex flex-wrap items-center justify-center ">
              <div className=" flex flex-wrap justify-center text-center">
                <Image src={empty} />
                <p className="mt-6 font-bold text-[20px] w-full">
                  سبد خرید شما خالی است!
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="col-span-12 lg:col-span-4 p-4">
          <div className="drop-shadow-lg p-4 bg-white rounded-md ">
            <div className="flex items-center gap-2 justify-between">
              <p className="text-lg">جمع کل :</p>
              <p className="font-bold">
                {products
                  .reduce((total, item) => total + item.price * item.count, 0)
                  .toLocaleString()}{" "}
                تومان
              </p>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها
              از سبد حذف می‌شوند
            </p>
            <div className="border border-[#f9467d] mt-4 rounded-md p-4">
              <p className="font-bold text-[#f9467d] mb-2">ارسال رایگان</p>
              <p className="text-sm text-slate-400">
                ارسال رایگان برای کاربران ویژه
              </p>
              <button className="mt-4 h-[40px] w-full px-2 flex items-center justify-center text-white bg-lime-500">
                خرید اشتراک ویژه
              </button>
            </div>
            <button className="mt-4 h-[40px] w-full px-2 flex items-center justify-center text-white bg-[#f9467d]">
              پرداخت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
