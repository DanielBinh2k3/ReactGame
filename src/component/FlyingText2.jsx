import React, { useState } from "react";
import './main.scss'

const FlyingText2 = ({ onAnimationEnd }) => {
  const handleAnimationEnd = () => {
    if (onAnimationEnd) {
      onAnimationEnd();
    }
  };

  return (
    <div className="wrapper" onAnimationEnd={handleAnimationEnd}>
      <ul className="dynamic-txts">
        <li><span>Woah, Impressive From My Lover</span></li>
        <li><span>Be Ready to next phase</span></li>
        <li><span>Phase 2 in coming</span></li>
        <li><span>Lets Goooooooo !!!</span></li>
      </ul>
    </div>
  );
}

export default FlyingText2;
