"use client";
import products from "@/data/productsData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchDrop() {
    const [searchStatus, setSearchStatus] = useState(false);
    const [word, setWord] = useState("");
    return (
        <span className="relative">
            <span
                onClick={() => setSearchStatus(!searchStatus)}
                className="cursor-pointer block relative bg-stone-50 p-2 rounded-md hover:bg-stone-200 transition-all duration-500"
            >
                <IoSearchOutline />
            </span>
            {searchStatus ? (
                <div className="w-[300px] h-[500px] overflow-auto p-4 bg-white absolute top-12 z-50 left-0 rounded-md drop-shadow-2xl border">
                    <input
                        value={word}
                        autoFocus
                        type="text"
                        className="border h-[40px] mb-4 rounded-md w-full outline-none text-[14px] px-2 bg-slate-50"
                        placeholder="جستجو کنید"
                        onChange={(e) => setWord(e.target.value)}
                    />
                    {word
                        ? products
                              .filter((item) => item.title.includes(word))
                              .map((item) => (
                                  <div key={item.id} onClick={() => setSearchStatus(false)}>
                                      <Link href={`/product/${item.id}`}>
                                          <div className="flex items-center gap-4 mb-4">
                                              <Image
                                                  src={item.image1}
                                                  alt={item.title}
                                                  width={70}
                                                  height={70}
                                              />
                                              <div>
                                                  <p className="text-sm">{item.title}</p>
                                              </div>
                                          </div>
                                      </Link>
                                  </div>
                              ))
                        : null}
                </div>
            ) : null}
        </span>
    );
}
