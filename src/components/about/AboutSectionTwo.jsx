import React from "react";
import style from "./aboutSectionTwo.module.css";
import Image from "next/image";

const textList = [
  {
    id: 1,
    title: `Bug free code`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
  {
    id: 2,
    title: `Premier support`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`,
  },
  {
    id: 3,
    title: `Next.js`,
    text: `Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt consectetur adipiscing elit setim.`,
  },
];

 
const TextPart = () => {
  return (
    <div className={style.textContainer}>
      {textList.map((item) => (
        <div key={item.id} className={style.textItem}>
          <h2 className={style.title}>{item.title}</h2>
          <p className={style.text}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

function AboutSectionTwo() {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
         <Image alt='1' width={500} height={480} src="./aboutThree.svg"></Image>
        </div>
      <TextPart />
    </div>
  );
}

export default AboutSectionTwo;
