import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { useState } from 'react';
import Flip from 'react-reveal/Flip';

export const Contact = () => {
  const [input_username, setUserName] = useState('');
  const [input_email, setEmail] = useState('');
  const [input_message, setMessage] = useState('');

  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs.sendForm('service_miclkz2', 'template_3vy91zb', form.current, 'Fn_zxEFg1IdXStiDB')
    .then((result) => {
      alert("Thanks for reaching out, I will get back to you soon!");
  }, (error) => {
      console.log(error.text);
  });
  setUserName('');
    setEmail('');
    setMessage('');
};

return (
 <section id="Contact">
  <div className="contactFormContainer">
<h2 class="contactHeader">Contact Us</h2>
<form className="contactForm" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="btn" type="submit" value="Send" />
    </form>
    </div>
</section>
);
}

export default Contact;

