import React from "react";
import Image from "next/image";
import flower1 from "./../../assets/images/floralog1.png";
import flower2 from "./../../assets/images/floralog2.png";
import circle from "./../../assets/images/Ellipse.svg";

function NewsLetterForm() {
    return (
        <>
            <section
                data-aos="fade-up"
                className="w-[90%] md:w-full  h-[240px]  container bg-[#FCF1F1] rounded-3xl overflow-hidden  "
            >
                <div className="relative ">
                    <Image src={flower1} className="absolute right-10 top-6 z-10" />
                    <div className="h-[450px] w-[450px] bg-[#FEF9F8] rounded-full absolute right-[20%] top-[50px] "></div>
                    <Image src={flower2} className="absolute left-20 top-0 " />
                </div>
                <div className=" w-full h-full  flex justify-center items-cente flex-wrap relative z-50 ">
                    <p className="w-[60%] justify-center  items-end flex text-[26px] text-center text-[#172B7A]">
                        جهت عضویت در خبرنامه ایمیل خود را وارد کنید
                    </p>
                    <div className="  w-[90%] flex items-start justify-center py-6 ">
                        <input
                            type="text"
                            placeholder="ایمیل"
                            className="w-[350px] p-3  outline-none rounded bg-stone-200 hover:bg-stone-100 text-gray-700 transition-all duration-500 delay-75"
                        />
                        <button className="w-[150px] p-3 mr-2 bg-stone-900 text-white font-bold rounded transition-all duration-500  hover:bg-[#f9467d]  ">
                            اشتراک
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewsLetterForm;
