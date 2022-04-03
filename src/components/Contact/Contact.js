import React from 'react';
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai';
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef} from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3f1sepx', 'template_nnxt9p7', form.current, 'hnjI_N7M1uaQA2RVA')
      e.target.reset();
    };


  return (
    <section id="contact">
    <h5>Get in touch</h5>
    <h2>Contact me</h2>

    <div className='container contact_container'>
    
    <div className='contact_options'>
        <article className='contact_option'>
            <AiOutlineMail/>
            <h4>Email</h4>
            <h5>rogenaramze@gmail.com</h5>
            <a href="mailto:rogenaramze@gmail.com" target='-blank'>Send a message</a>
        </article>

        <article className='contact_option'>
            <BsMessenger/>
            <h4>Facebook</h4>
            <h5>rogenaramze</h5>
            <a href="http://m.me/rogena.ramze.1" target='-blank'>Send a message</a>
        </article>

        <article className='contact_option'>
            <BsWhatsapp/>
            <h4>whatsapp</h4>
            <h5>+0201210974697</h5>
            <a href="https://wa.me/+201210974697" target='-blank'>Send a message</a>
        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='your full name' required/>
        <input type='email' name='email' placeholder='your email' required/>
        <textarea name='message' rows="7" placeholder='your message' required></textarea>
        <button type="submit" className='btn btn-primary'>Send message</button>
      </form>

    </div>
    </section>
  )
}
