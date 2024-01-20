import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../Asset/img1.jpg"
import img2 from "../../Asset/img2.jpg"
import img3 from "../../Asset/img3.webp"
import { Rating } from "@mui/material"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "./Testimonial.css";
import { Pagination, Autoplay } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Testimonial() {
  const [value, setValue] = React.useState(5);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '" style={{marginTop:"20px"}}>' + (index + 1) + "</span>";
    },
  };

  return (

    <>
      <div  className="testi-wrapper" style={{background:"#0d65cd",paddingTop:"80px",paddingBottom:"50px"}}>
        <h2 className="getintuch">Clint Stories</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          modules={[Pagination, Autoplay]}
          className="mySwiper ForBigSScreen"
          style={{ background: "#0d65cd" }}
        >
          <SwiperSlide className="testimonial"  style={{background:"#0d65cd"}}>
            <div className="card" data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="200"
              data-aos-duration="1000">
              <div className="layer"></div>
              <div className="content">

                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                <div className="image">
                  <img src={img2} style={{ borderRadius: "50%", width: "100%", height: "100%s" }}></img>
                </div>
                <Rating value={value} style={{ marginTop: "20px" }} />
                <div className="details">
                  <h2>Someone Famouse <br></br> <span>Website Designer</span></h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial"  style={{background:"#0d65cd"}}>
            <div className="card" data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="200"
              data-aos-duration="1000">
              <div className="layer"></div>
              <div className="content">

                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                <div className="image">
                  <img src={img2} style={{ borderRadius: "50%", width: "100%", height: "100%s" }}></img>
                </div>
                <Rating value={value} style={{ marginTop: "20px" }} />
                <div className="details">
                  <h2>Someone Famouse <br></br> <span>Website Designer</span></h2>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="testimonial"  style={{background:"#0d65cd"}} >
            <div className="card"
            data-aos="fade-up"
              data-aos-delay="600"
              data-aos-offset="400"
              data-aos-duration="1500"
            >
              <div className="layer"></div>
              <div className="content">

                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                <div className="image">
                  <img src={img1} style={{ borderRadius: "50%", width: "100%", height: "100%s" }}></img>
                </div>
                <Rating value={value} style={{ marginTop: "20px" }} />
                <div className="details">
                  <h2>Someone Famouse <br></br> <span>Website Designer</span></h2>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="testimonial"  style={{background:"#0d65cd"}}>
            <div className="card"
            data-aos="fade-up"
              data-aos-delay="900"
              data-aos-offset="400"
              data-aos-duration="1500"
            >
              <div className="layer"></div>
              <div className="content">

                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                <div className="image">
                  <img src={img3} style={{ borderRadius: "50%", width: "100%", height: "100%s" }}></img>
                </div>
                <Rating value={value} style={{ marginTop: "20px" }} />
                <div className="details">
                  <h2>Someone Famouse <br></br> <span>Website Designer</span></h2>
                </div>
              </div>
            </div>
          </SwiperSlide>

          
        </Swiper>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          modules={[Pagination, Autoplay]}
          className="mySwiper ForSmallScreen"
          style={{ background: "#0d65cd"}}
        >
          <SwiperSlide className="testimonial"  style={{background:"#0d65cd"}}>
            <div className="card" data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="200"
              data-aos-duration="1000">
              <div className="layer"></div>
              <div className="content">

                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                <div className="image">
                  <img src={img2} style={{ borderRadius: "50%", width: "100%", height: "100%s" }}></img>
                </div>
                <Rating value={value} style={{ marginTop: "20px" }} />
                <div className="details">
                  <h2>Someone Famouse <br></br> <span>Website Designer</span></h2>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="testimonial"  style={{background:"#0d65cd"}} >
            <div className="card"
            data-aos="fade-up"
              data-aos-delay="600"
              data-aos-offset="400"
              data-aos-duration="1500"
            >
              <div className="layer"></div>
              <div className="content">

                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                <div className="image">
                  <img src={img1} style={{ borderRadius: "50%", width: "100%", height: "100%s" }}></img>
                </div>
                <Rating value={value} style={{ marginTop: "20px" }} />
                <div className="details">
                  <h2>Someone Famouse <br></br> <span>Website Designer</span></h2>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="testimonial"  style={{background:"#0d65cd"}}>
            <div className="card"
            data-aos="fade-up"
              data-aos-delay="900"
              data-aos-offset="400"
              data-aos-duration="1500"
            >
              <div className="layer"></div>
              <div className="content">

                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                <div className="image">
                  <img src={img3} style={{ borderRadius: "50%", width: "100%", height: "100%s" }}></img>
                </div>
                <Rating value={value} style={{ marginTop: "20px" }} />
                <div className="details">
                  <h2>Someone Famouse <br></br> <span>Website Designer</span></h2>
                </div>
              </div>
            </div>
          </SwiperSlide>

          
        </Swiper>
      </div>
    </>
  );
}
  