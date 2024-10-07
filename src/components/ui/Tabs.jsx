"use client";

import React, { useState } from "react";

const items = [
  {
    id: 1,
    title: "پرفروش ترین",
  },
  {
    id: 2,
    title: "ویژه",
  },
  {
    id: 3,
    title: "با تخفیف",
  },
  {
    id: 4,
    title: "قیمت برجسته ",
  },
];

function Tabs() {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className=" w-full flex pb-3 cursor-pointer  ">
        <ul className="w-full flex py-2 gap-6 flex-wrap">
          {items.map((val) => {
            return (
              <li
                key={val.id}
                className={`${active === val.id ? "!text-[#F9467D] border-b-2 border-[#F9467D] " : "border-b-2 border-transparent"}  text-[#BCBCBC] pb-2 transition-all  `}
                onClick={() => setActive(val.id)}
              >
                {val.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Tabs;
