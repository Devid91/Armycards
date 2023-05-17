import "./index.css";
import React from "react";
import { themeRandomCard } from "./App";
import { useAtom } from "jotai";

function CardList({ cards }) {
  const [randomCard, setRandomCard] = useAtom(themeRandomCard);

  const hideCard = (event, index) => {
    setTimeout(() => {
      setRandomCard(
        randomCard.filter((card, cardIndex) => index !== cardIndex)
      );
    }, 2000);
  };

  return (
    <div className="flex flex-wrap flex-row gap-5">
      {cards.map((card, index) => {
        return (
          <div onClick={(event) => hideCard(event, index)} key={index}>
            {card}
          </div>
        );
      })}
    </div>
  );
}

export default CardList;
