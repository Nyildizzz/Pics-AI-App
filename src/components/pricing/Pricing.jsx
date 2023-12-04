"use client";

import React from "react";
import style from "./pricing.module.css";
import { Switch } from "antd";
import { useState } from "react";
import SinglePricing from "./SinglePricing";

const onChange = () => {};



function Pricing() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.title}>Simple and Affordable Pricing</h1>
        <p className={style.desc}>
        There are many variations of passages of Lorem Ipsum available but the<br />
        majority have suffered alteration in some form.
        </p>
      </div>
      <div className={style.toggle}>
      <p className={style.toggleText}>Monthly</p>
        <Switch className={style.toggleBtn} defaultChecked onChange={onChange} />
        <p className={style.toggleText}>Yearly</p>
      </div>
      <div className={style.singlePricingContainer}>
        <SinglePricing />
      </div>
    </div>
  );
}

export default Pricing;
