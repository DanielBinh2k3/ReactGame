import React, { useEffect, useState } from "react";
import './main.scss'

const FlyingText4 = () => {
  const [showText, setShowText] = useState(false);
  // Add a setTimeout to show the password after 3 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 13000); // 3000 milliseconds = 3 seconds

    // Clear the timeout if the component unmounts before 3 seconds
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); 
  return (
    <div className="wrapper" >
      {!showText && (    
      <ul className="dynamic-txts">
        <li><span>Congratulation 👏🏻👏🏻👏🏻</span></li>
        <li><span>Love U</span></li>
        <li><span>Binh Daniel x Big Bomb</span></li>
        <li><span>Wait for seconds to show password</span></li>
      </ul>)}
      {showText &&
      <div class="static-txt">SXUgTGluaCBDYWM=2003</div>}
    </div>
  );
}

export default FlyingText4;
