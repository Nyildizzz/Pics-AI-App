"use client"

import React from "react";
import style from "./singlePricing.module.css";
import  { useState } from "react";

const checkIcon = (
  <svg
    width="8"
    height="6"
    viewBox="0 0 8 6"
    className={style.checkIcon}
    fill="url(#gradient)"
  >
    <defs>
      <linearGradient id="gradient" gradientTransform="rotate(90)">
        <stop offset="0%" stopColor="#489BEF" />
        <stop offset="100%" stopColor="#0DC9C8" />
      </linearGradient>
    </defs>
    <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
  </svg>
);



const crossIcon = (
  <svg
    width="7"
    height="7"
    viewBox="0 0 8 8"
    className={style.crossIcon}
    fill="url(#gradient)"
  >
    <defs>
      <linearGradient id="gradient" gradientTransform="rotate(45)">
        <stop offset="0%" stopColor="#489BEF" />
        <stop offset="100%" stopColor="#0DC9C8" />
      </linearGradient>
    </defs>
    <path d="M7.4499 0.512524C7.1124 0.175024 6.5874 0.175024 6.2499 0.512524L3.9999 2.80002L1.7124 0.512524C1.3749 0.175024 0.849902 0.175024 0.512402 0.512524C0.174902 0.850024 0.174902 1.37502 0.512402 1.71252L2.7999 4.00002L0.512402 6.28752C0.174902 6.62502 0.174902 7.15002 0.512402 7.48752C0.662402 7.63752 0.887402 7.75002 1.1124 7.75002C1.3374 7.75002 1.5624 7.67502 1.7124 7.48752L3.9999 5.20002L6.2874 7.48752C6.4374 7.63752 6.6624 7.75002 6.8874 7.75002C7.1124 7.75002 7.3374 7.67502 7.4874 7.48752C7.8249 7.15002 7.8249 6.62502 7.4874 6.28752L5.1999 4.00002L7.4874 1.71252C7.7874 1.37502 7.7874 0.850024 7.4499 0.512524Z" />
  </svg>
);

const pricingData = [
  {
    id: 1,
    title: "Lite",
    price: 40,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, asperiores?",
    iconsText: [
      "All UI Components",
      "Use with Unlimited Projects",
      "Commercial Use",
      "Email Support",
      "Lifetime Access",
      "Free Lifetime Updates",
    ],
    icons: [checkIcon, checkIcon, checkIcon, checkIcon, crossIcon, crossIcon],
  },
  {
    id: 2,
    title: "Basic",
    price: 399,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, asperiores?",
    iconsText: [
      "All UI Components",
      "Use with Unlimited Projects",
      "Commercial Use",
      "Email Support",
      "Lifetime Access",
      "Free Lifetime Updates",
    ],
    icons: [checkIcon, checkIcon, checkIcon, checkIcon, checkIcon, crossIcon],
  },
  {
    id: 3,
    title: "Plus",
    price: 589,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, asperiores?",
    iconsText: [
      "All UI Components",
      "Use with Unlimited Projects",
      "Commercial Use",
      "Email Support",
      "Lifetime Access",
      "Free Lifetime Updates",
    ],
    icons: [checkIcon, checkIcon, checkIcon, checkIcon, checkIcon, checkIcon],
  },
];

 


function SinglePricing() {
 const [option, setOption] = useState(false);
 const options =  option ? 'year' : 'mo';

  return (
    <div className={style.container}>
      {pricingData.map((item) => (
        <div className={style.singlePricing} key={item.id}>
          <div className={style.textPricingContainer}>
            <p className={style.price}>${item.price}/{options}</p>
            <h1 className={style.title}>{item.title}</h1>
          </div>
          <div className={style.textDesc}>
            <p className={style.text}>{item.text}</p>
          </div>
          <button className={style.buyBtn}>Start Free Trial</button>
          <div className={style.iconsContainer}>
            {item.icons.map((icon, index) => (
              <div className={style.icon} key={index}>
                {icon}
                <p className={style.iconText}>{item.iconsText[index]}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SinglePricing;
