import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FaLifeRing } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
function Services() {
    return (
        <>
            <section
                data-aos="fade-up"
                className="container w-[90%] md:w-full py-10  m-auto bg-[#F3FCFE] rounded-3xl  my-20"
            >
                <div className=" w-[88%] h-full m-auto grid lg:grid-cols-3 p-6 gap-7 text-[#172B7A] ">
                    <div className="flex  p-2 gap-6 ">
                        <FaLifeRing className=" text-[50px]" />
                        <div className="  w-full h-full flex flex-wrap items-center">
                            <h3 className="w-full  font-[600] ">پشتیبانی عالی</h3>
                            <span className="text-[14px]">پشتیبانی 8 تا 5 عصر</span>
                        </div>
                    </div>

                    <div className="flex  p-2 gap-6 ">
                        <FaShippingFast className=" text-[50px]" />
                        <div className=" w-full h-full flex flex-wrap items-center">
                            <h3 className="w-full  font-[600] ">تحویل سریع</h3>
                            <span className="text-[14px]">تحویل در یک نگاه</span>
                        </div>
                    </div>
                    <div className="flex  p-2 gap-6">
                        <FaMoneyCheckAlt className=" text-[50px]" />
                        <div className=" w-full h-full flex flex-wrap items-center">
                            <h3 className=" w-full font-[600]">پرداخت امن</h3>
                            <span className="text-[14px]">پشتیبانی از تمام کارت های اعتباری</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;
