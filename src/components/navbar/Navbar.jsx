"use client"

import React, { useState, useEffect } from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${style.container} ${isSticky ? style.sticky : ""}`}>
      <div className={style.logo}>
        <Image src={logo} width={40} height={40} alt="logo" />
        <Link className={style.logoName} href="/">
          PicsAI
        </Link>
      </div>
      <div className={style.links}>
        <Link className={style.link} href="/">
          Pricing
        </Link>
        <Link className={style.link} href="/about">
          About Us
        </Link>
        <Link className={style.link} href="/tutorials">
          Tutorials
        </Link>
        <Link className={style.link} href="/blog">
          Blog
        </Link>
        <Link className={style.link} href="/resources">
          Resources
        </Link>
      </div>
      <div className={style.login}>
        <button className={style.btnSignIn}>Sign In</button>
        <button className={style.btnSignUp}>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
