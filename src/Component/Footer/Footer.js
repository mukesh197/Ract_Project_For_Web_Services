import React from 'react'
import './Footer.css'
import logo from '../../Asset/logo.png'

const Footer = () => {
  return (
    <>
    <div className='foot-wrapper'>
    <div className='foot-inn'>
      <div className="Box1Box2Cotainer">
      <div className='fbox box1'>
       
       Suraj Chanda
        <h2 style={{margin:"15px 0 10px 0"}}>Our Google Reviews</h2>
        <h3>
           4.9
           <span style={{color:"yellow",fontSize:"18px"}}> 
           <i className="fa-solid fa-star" style={{marginLeft:"10px"}}></i>
               <i className="fa-solid fa-star" style={{marginLeft:"7px"}}></i> 
               <i className="fa-solid fa-star" style={{marginLeft:"7px"}}></i>
               <i className="fa-solid fa-star" style={{marginLeft:"7px"}}></i>
               <i className="fa-solid fa-star" style={{marginLeft:"7px"}}></i>
                </span>     
          </h3>
          <h6>See Our 35 Reviews</h6>
      </div>
      <div className='fbox box2'>
        <h1>GET IN TOUCH</h1>
        <h4><i className="fa-solid fa-envelope" style={{marginRight:"10px",marginTop:"15px"}}></i> himukuji1997@gmail.com</h4>
        <h4><i className="fa-solid fa-phone-volume" style={{marginRight:"10px",marginTop:"10px"}}></i> +91700438895</h4>
        <h6><i className="fa-solid fa-map-location-dot" style={{marginRight:"10px",fontSize:"22px",marginTop:"10px"}}></i> 127 azadgarh regent park tollygunj<br></br> &nbsp;   &nbsp;  &nbsp; &nbsp; kolkata=700040</h6>
        <h5 style={{marginTop:"10px"}}><i className="fa-brands fa-facebook"></i> &nbsp; <i className="fa-brands fa-linkedin"></i> &nbsp; <i className="fa-brands fa-square-instagram"></i> &nbsp; <i className="fa-brands fa-github"></i> &nbsp; <i className="fa-solid fa-basketball"></i></h5>
      </div>
      </div>

      <div className='fbox box3'>
       <h4 style={{textAlign:"center"}}> QUICK LINKS </h4>
       <div className='quick-links' style={{marginTop:"20px"}}>
        <div>
          <ul>
            <li><a href='#'>Web Devlopment</a></li>
            <li><a href='#'>UX/UI Desgin</a></li>
            <li><a href='#'>Digital Marketing</a></li>
          </ul>
        </div>
        <div>
          <ul>
          <li><a href='#'>App Devlopment</a></li>
          <li><a href='#'>IOT</a></li>
          <li><a href='#'>About Us</a></li>
          </ul>
        </div> 
       </div>
      </div>
      </div>
      
      <h3 style={{textAlign:"center",marginTop:"30px",position:"relative",zIndex:"2"}} className="cradit">Created and Crafted by &copy; Mukesh kumar Tiwary</h3>
    <div className='fback'></div>
    </div>
   
    </>
  )
}

export default Footer