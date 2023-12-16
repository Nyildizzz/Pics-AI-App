import React from 'react'
import style from './contact.module.css'
function Contact() {
  return (
    <div className={style.container}>
      <div className={style.contactContainer}>
        <h1 className={style.title}>Need Help? Open a Ticket</h1>
        <p className={style.subtitle}>We're here to help. Find articles, help and advice about iFunny stuff.</p>
        <div className={style.contactInfo}>
          <div className={style.namePart}>
            <label>Your Name</label>
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div className={style.emailPart}>
            <label>Your Email</label>
            <input type="text" placeholder="Enter Your Email" />
          </div>
        </div>
        <div className={style.messagePart}>
          <label>Your Message</label>
          <textarea placeholder="Enter Your Message" />
        </div>
        <div className={style.btnDiv}>
        <button className={style.submitMessageBtn}>
          Submit Ticket
        </button>
        </div>
      </div>
      <div className={style.subsContainer}>
        <h1 className={style.titleForSubs}>Subscribe to our Newsletter</h1>
        <p className={style.subtitleForSubs}>Subscribe to our newsletter to get the latest news, announcements, and special offers.</p>
        <div className={style.emailPartForSubs}>
          <input type="text" placeholder="Enter Your Email" />
          <button className={style.subscribeBtn}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact