import CameraIcon from "@material-ui/icons/Camera";
import React, { useState } from "react";
import "./Card.css";
type Props = {
  handleCLick: Function;
};
const Card: React.FC<Props> = ({ handleCLick }) => {
  return (
    <div>
      <div className="card">
        <CameraIcon className="icon" style={{ fontSize: 80 }} />
        <div className="title">MANGROVE</div>
        <div className="content">
          Mangroves shorelines from damaging storm and hurricane winds, waves,
          and floods....
        </div>
        <div className="buttongroup">
          <span className="custom_btn" onClick={() => handleCLick()}>
            Launch
          </span>
          <span className="custom_btn" onClick={() => handleCLick()}>
            Documentation
          </span>
          <span className="custom_btn" onClick={() => handleCLick()}>
            Technical Specs
          </span>
          <span className="custom_btn" onClick={() => handleCLick()}>
            Report Bug
          </span>
        </div>
        <div className="back"></div>
        {/* {flag && <div className="detail">welcome to my website.</div>} */}
      </div>
    </div>
  );
};

export default Card;
