import React, { useState } from "react";
import './main.scss'

const FlyingText3 = ({ onAnimationEnd }) => {
  const handleAnimationEnd = () => {
    if (onAnimationEnd) {
      onAnimationEnd();
    }
  };

  return (
    <div className="wrapper" onAnimationEnd={handleAnimationEnd}>
      <ul className="dynamic-txts">
        <li><span>Woahh 🙉🙉🙉</span></li>
        <li><span>This is the last phase</span></li>
        <li><span>Final boss is coming 😈😈😈</span></li>
        <li><span>Finish that to take the password</span></li>
      </ul>
    </div>
  );
}

export default FlyingText3;
