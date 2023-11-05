import React from 'react'
import style from './heroSection.module.css'
function  heroSection() {
  return (
    <div className={style.container}>
        <div className={style.header}>
         <h1 className={style.title}>Make your image <br />
        wonderful</h1>
        </div>
        <div className={style.textContainer}>
        <p className={style.desc}>
        Our landing page template works on all devices, so you only have to set it up once,<br />
        and get beautiful results forever. 
        </p>
        </div>
        <div className={style.btnContainer}>
        <button className={style.btnTrial}>Start Free Trial</button>
        <button className={style.btnMore}>Learn More</button>
        </div>
      

    </div>
  )
}

export default heroSection