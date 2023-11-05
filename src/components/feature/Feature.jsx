import React from "react";
import style from "./feature.module.css";
import FeatureData from "./FeatureData.jsx";
import SingleFeature from "./SingleFeature.jsx";
function Feature() {
  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <h2 className={style.header}>Main Features</h2>
        <p className={style.desc}>
          There are many variations of passages of Lorem Ipsum available <br />
          but the majority have suffered alteration in some form.
        </p>
      </div>
      <div className={style.features}>
        {FeatureData.map((feature) => {
          return <SingleFeature key={feature.id} feature={feature} />;
        })}
      </div>
    </div>
  );
}

export default Feature;
