import React from "react";
import "./Why.css";
import com from "../../Asset/COM.png";

const Why = () => {
  return (
    <div className="why-wrapper">
  
      <div className="why-text " >
        <div className="why-Container block">
          <div className="why-text-container">
          <h1>WHY CHOOSE US?</h1>
          <ul>
            <li>
               BEST WEB
              DEVELOPMENT COMPANY IN KOLKATA{" "}
            </li>
            <li>
               WE HAVE BEST
              DESIGNERS AND DEVELOPERS
            </li>
            <li>
               WE GIVE OUR BEST
              TO COMPLETE ANY PROJECT
            </li>
          </ul>
          </div>
          <div className="why-img-container">
          <img src={com} alt='screen' className="why-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
