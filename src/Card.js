import "animate.css";
import "./index.css";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { themeHideMode } from "./App";

function Card({ image, description, className }) {
  const [animated, setAnimated] = useState(false);
  const [randomCardHide, setrandomCardHide] = useState(false);
  const [hideMode] = useAtom(themeHideMode);

  const handleNoHideClick = () => {
    setAnimated(true);
  };
  const onAnimationEnd = () => {
    setAnimated(false);
  };

  const handleHideClick = () => {
    if (hideMode) {
      setrandomCardHide(true);
    }
  };

  const animationCardHide = randomCardHide
    ? "animate__animated animate__hinge"
    : "";

  const animationClass = animated
    ? "animate__animated animate__backInDown"
    : "";

  useEffect(() => {
    if (hideMode === true) {
      setAnimated(false);
    }
  }, [hideMode]);

  return (
    <div
      className={`${className} ${animationClass} ${animationCardHide} scale-[0.75]  `}
      onClick={() => {
        handleNoHideClick();
        handleHideClick();
      }}
      onAnimationEnd={onAnimationEnd}
    >
      <img
        className="h-60 w-60 hover:scale-75 ease-in duration-300 animate__animated animate__backInRight "
        src={image}
        alt="pictures"
      ></img>
      <p className="text-center p-2 animate__animated animate__backInRigh">
        {description}
      </p>
    </div>
  );
}

export default Card;
