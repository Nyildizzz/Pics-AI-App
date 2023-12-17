import React from 'react'
import style from './footer.module.css'
import logo from '../../../public/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
function Footer() {
  return (
    <div className={style.container}>
        <div className={style.logoPart}>
            <Image className={style.logo} src={logo} alt="logo" />
            <h3 className={style.logoName}>PicsAI</h3>
            <p className={style.logoText}>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Integer lobortis.</p>
            <div className={style.socialLinks}>
                <Link href="https://www.facebook.com/">
                </Link>
                <Link href="https://www.twitter.com/">
                </Link>
                <Link href="https://www.instagram.com/">
                </Link>
                <Link href="https://www.youtube.com/">
                </Link>
            </div>
        </div>
        <div className={style.linksPart}>
            <div className={style.Links}>
                <h4 className={style.titleLink}>
                Useful Links
                </h4>
                <Link href="/">
                    Blog
                </Link>
                <Link href="/">
                    Pricing
                </Link>
                <Link href="/">
                    About
                </Link>
            </div>
            <div className={style.Links}>
            <h4 className={style.titleLink}>Terms</h4>
                <Link href="/">
                    Terms of Service
                </Link>
                <Link href="/">
                    Privacy Policy
                </Link>
                <Link href="/">
                    Cookie Policy
                </Link>
            </div>
            <div className={style.Links}>
            <h4 className={style.titleLink}>
            Support & Help
            </h4>
                <Link href="/">
                    Open Support Tickect
                </Link>
                <Link href="/">
                    Terms of Service
                </Link>
                <Link href="/">
                    About
                </Link>
            </div>
        </div> 
    </div>
    
  )
}

export default Footer