import React from "react";
import style from "./singleComment.module.css";
import Image from "next/image";

const userList = [
  {
    id: 1,
    name: "Musharof Chy",
    title: "Founder @TailGrids",
    text: "“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/auth-01.png",
  },
  {
    id: 2,
    name: "Devid Weilium",
    title: "Founder @UIdeck",
    text: "“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/auth-02.png",


  },
  {
    id: 3,
    name: "Lethium Frenci",
    title: "Founder @Lineicons",
    text: "“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/auth-03.png",

  },
];

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className={style.starSvg}>
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);
function SingleComment() {
  return (
    <div className={style.container}>
      <div className={style.commentsContainer}>
        {userList.map((user) => (
          <div className={style.singleComment} key={user.id}>
            <div className={style.rating}>
              <div className={style.starContainer}>
                {starIcon}
                {starIcon}
                {starIcon}
                {starIcon}
                {starIcon}
              </div>
            </div>
            <div className={style.userImage}>
              <Image src={user.image} width={50} height={50} />
            </div>
            <div className={style.userDetails}>
              <h4 className={style.userName}>{user.name}</h4>
              <span className={style.userTitle}>{user.title}</span>
            </div>
            <div className={style.comment}>
              <p className={style.userText}>{user.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SingleComment;
