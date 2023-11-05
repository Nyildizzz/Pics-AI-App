import React from 'react'
import style from './aboutOneSection.module.css'
import Image from 'next/image'

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className={style.fillColor}>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#489BEF' }} />
        <stop offset="100%" style={{ stopColor: '#0DC9C8' }} />
      </linearGradient>
    </defs>
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" fill="url(#gradient)" />
  </svg>
);

const List = () => {
  return (
    <div className={style.listContainer}>
      {[0, 1, 2].map((row) => (
        <div key={row} className={style.listRow}>
          {listText.slice(row * 2, row * 2 + 2).map((item) => (
            <div key={item.id} className={style.listItem}>
              <div className={style.icon}>{item.icon}</div>
              <p className={style.text}>{item.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}



const listText = [
  {
    id: 1,
    text: 'Premium quality',
    icon: checkIcon
  },
  {
    id: 2,
    text: 'Tailwind CSS',
    icon: checkIcon
  },
  {
    id: 3,
    text: 'Use for lifetime',
    icon: checkIcon
  },
  {
    id: 4,
    text: 'Next.js',
    icon: checkIcon
  },
  {
    id: 5,
    text: 'Rich documentation',
    icon: checkIcon
  },
  {
    id: 6,
    text: 'Developer friendly',
    icon: checkIcon
  },
]


function AboutOneSection(){
  return (
    <div className={style.container}>
        <div className={style.textContainer}>
          <h2 className={style.header}>
          Crafted for Startup, SaaS<br />and Business Sites.
          </h2>
          <p className={style.desc}>
          The main ‘thrust’ is to focus on educating attendees on how to <br />
          best protect highly vulnerable business applications with <br />
          interactive panel discussions and roundtables.         
          </p>
          <List />
        </div>
        <div className={style.imageContainer}>
            <Image alt='1' width={500} height={480} src="./aboutTwo.svg"></Image>
        </div>
    </div>
  )
}

export default AboutOneSection