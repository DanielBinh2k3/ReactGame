import React, { useState, useEffect } from "react";
import GameScrissor from "./GameScrissor";
import FlyingText1 from "./FlyingText1";
import FlyingText2 from "./FlyingText2";
import FlyingText3 from "./FlyingText3";
import FlyingText4 from "./FlyingText4";
import Game from "../src1/components/Game";
import GameTenzies from "../src2/App";
import Footer from "../src1/main";

function Main() {
  const [currentPhase, setCurrentPhase] = useState(1);

  useEffect(() => {
    console.log(currentPhase)
  }, [currentPhase]);



  const handleNextPhase = () => {
    setCurrentPhase(currentPhase + 1);
  };

  return (
    <div className="App">
      {currentPhase === 1 && (
        <FlyingText1 onAnimationEnd={handleNextPhase} />
      )}
      {currentPhase === 2 && (
        <GameTenzies onNextPhase={handleNextPhase} />
      )}
      {currentPhase === 3 && (
        <FlyingText2 onAnimationEnd={handleNextPhase} />
      )}
      {currentPhase === 4 && (
        <Footer onNextPhase={handleNextPhase}/>
      )}
      {currentPhase === 5 && (
        <FlyingText3 onAnimationEnd={handleNextPhase} />
      )}
      {currentPhase === 6 && (
        <GameScrissor onNextPhase={handleNextPhase} />
      )}
      {currentPhase === 7 && (
        <FlyingText4></FlyingText4>
      )}
    </div>
  );
}

export default Main;
