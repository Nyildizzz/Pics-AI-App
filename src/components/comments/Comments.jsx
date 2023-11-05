import React from "react";
import style from "./comments.module.css";
import SingleComment from "./SingleComment";
function Comments() {
  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <h2 className={style.header}>What Our Users Says</h2>
        <p className={style.desc}>
          There are many variations of passages of Lorem Ipsum available <br />{" "}
          but the majority have suffered alteration in some form.
        </p>
      </div>
      <SingleComment />
    </div>
  );
}

export default Comments;
