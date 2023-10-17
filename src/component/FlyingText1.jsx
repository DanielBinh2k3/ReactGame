import React, { useState } from "react";
import './main.scss'

const FlyingText1 = ({ onAnimationEnd }) => {
  const handleAnimationEnd = () => {
    if (onAnimationEnd) {
      onAnimationEnd();
    }
  };

  return (
    <div className="wrapper" onAnimationEnd={handleAnimationEnd}>
      <ul className="dynamic-txts">
        <li><span>Happy Birthday To LinhCac</span></li>
        <li><span>Be Ready to finish the game</span></li>
        <li><span>Phase 1</span></li>
        <li><span>Let's Started</span></li>
      </ul>
    </div>
  );
}

export default FlyingText1;
