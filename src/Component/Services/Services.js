import React, { useState } from "react";
import CardFOrSurvice from "./CardFOrSurvice";
import "./Services.css";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { BsWordpress } from "react-icons/bs";
import { DiNodejsSmall } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { useSelector } from "react-redux";
const Services = () => {
  const suviesApi = useSelector((state) => state.SurviceApi.value);
  console.log(suviesApi);
  return (
    <div className="services-wrapper">
      <div className="surviceHading">
        <h2>Get Our Epic Service</h2>
        <span>With</span>
        <p> all the new technology around the globe</p>
      </div>
      <div className="GlowingAnimation">
        <ul>
          <li>
            <AiFillHtml5 />
          </li>
          <li>
            <TbBrandCss3 />
          </li>
          <li>
            <IoLogoJavascript />
          </li>
          <li>
            <DiReact />
          </li>
          <li>
            <FiFigma />
          </li>
          <li>
            <BsWordpress />
          </li>
          <li>
            <DiNodejsSmall />
          </li>
          <li>
            <SiRedux />
          </li>
        </ul>
      </div>
      <div className="serv-inn">
        {/* <div className="box box1">
          <h2>DIGITAL MARKETING</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="serv-btn">START NOW</button>
        </div>
        <div className="box box2">
          <h2>WEB DEVELOPMENT</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="serv-btn">START NOW</button>
        </div>
        <div className="box box3">
          <h2>UX UI DESIGNING</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="serv-btn">START NOW</button>
        </div>
        <div className="box box4">
          <h2>APP DEVELOPMENT</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="serv-btn">START NOW</button>
        </div>
        <div className="box box5">
          <h2>IT SERVICES</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="serv-btn">START NOW</button>
        </div>
        <div className="box box6">
          <h2>IOT</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="serv-btn">START NOW</button>
        </div> */}
        {suviesApi.map((item) => {
          return (
            <CardFOrSurvice
              key={item.id}
              img={item.img}
              color={item.color}
              name={item.CardName}
              Content={item.Content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
