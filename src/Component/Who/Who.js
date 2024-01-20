import React from "react";
import "./Who.css";
import glob from "../../Asset/glob.png";


const Who = () => {
  return (
    <>
      <div className="who-wrapper">
        <div className="who-content">
          <img src={glob} alt="Globe" className="img" />
          <div className="NeonText">
            <div className="who-text">
              <span className="webdev">WHO WE ARE ?</span>
              <span className="socod">
                We are a global creative agency that combines design expertise
                with technology and intelligence to revolutionize your business.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Who;
