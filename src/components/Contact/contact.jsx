import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aw2g2n5', 'template_um9xbpl', form.current, 'p_iDWZPXlZUZr9MB_')
    e.target.reset();
  };
 
  
  
  
  return (
    <section id='contact'>
      <h5>Lets Talk Myabe</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
             <MdOutlineEmail className="contact__option-icon"/>
             <h4>Email</h4>
             <h5>hassanjawwad12@gmail.com</h5>
             <a href="mailto:hassanjawwad12@gmail.com" target="_blank">Send a message dude!</a>             
          </article>
          <article className="contact__option">
             <RiMessengerLine className="contact__option-icon"/>
             <h4>Messenger</h4>
             <h5>Hassan Jawwad</h5>
             <a href="https://m.me/profile.php?id=100010183145812" target="_blank">Send a message dude!</a> 
          </article>
          <article className="contact__option">
             <BsWhatsapp className="contact__option-icon" />
             <h4>WhatsApp</h4>
             <h5>Sab kuch bata doon bestfriend bana loon</h5>
             <a href="https://api.whatsapp.com/send?phone=+923218058100" target="_blank">Send a message dude!</a>             
          </article>



        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea type="message" rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send bhi kar do itna likh lia hay to...</button>
        </form>
      </div>
    </section>
  )
}

export default Contact