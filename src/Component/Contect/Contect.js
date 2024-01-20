import React,{useRef} from 'react';
import emailjs from 'emailjs-com'
import './Contect.css';
import {BsMailbox} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger,BsWhatsapp} from 'react-icons/bs'

const Contect = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pe2b7jv', 'template_qp259bn', form.current, 'kRUU724Ni_jw-tx_y')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='letsTalk'>
    <section id='contect' className='contect'>
      <h2 className='getintuch'>Get In Touch</h2>

      <div className='container contect_container'>
        <div className='contect_options'>
          <article className='conetct_option'>
            <AiOutlineMail className='conetct_option-icon'/>
            <h4>Email</h4>
            <h5>CodeCasper96@gmail.com</h5>
            <a href='mailto:mukeshkumartiwary1997@gmail.com' rel="noreferrer" target='_blank'>Send A Message</a>
          </article>

          <article className='conetct_option'>
            <BsMessenger className='conetct_option-icon'/>
            <h4>Messenger</h4>
            <h5>CodeCasper</h5>
            <a href='https://m.me/t/100003666811069' rel="noreferrer" target='_blank' >Send A Message</a>
          </article>

          <article className='conetct_option'>
            <BsWhatsapp className='conetct_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+917004388895</h5>
            <a href='http://api.whatsapp.com/send?phone=+917004388895' rel="noreferrer" target='_blank'>Send A Message</a>
          </article>

        </div> 
        <form className='' ref={form} onSubmit={sendEmail} style={{marginTop:"0.4rem"}}>
           <input type='text' name='name' placeholder='Enter Your Fullname' required ></input>
           <input type='mail' name='mail' placeholder='Enter Your Fullname' required style={{marginTop:"1rem"}}></input>
           <textarea name='message' rows='7' placeholder='Your Message' required style={{marginTop:"1rem"}}></textarea>
           <button type='submit' className='btn btn-primary' style={{marginTop:"2rem"}}>Send Message</button>
        </form>
      </div>
    </section>
    </div>
  )
}

export default Contect
