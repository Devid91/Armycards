import React, { useState, useEffect, useRef, useCallback } from "react";
import { atom, useAtom } from "jotai";
import "./index.css";
import "animate.css";
import Chaos from "./images/Chaos.png";
import SM from "./images/Space Marines.png";
import Eldar from "./images/Eldar.png";
import Orks from "./images/Orks.png";
import IG from "./images/Imperial guard.png";
import Necrons from "./images/Necrons.png";
import Tau from "./images/Tau.png";
import Tyranids from "./images/Tyranids.png";
import Card from "./Card";
import SearchBar from "./SearchBar";
import CardList from "./CardList";

export const themeHideMode = atom(false);
export const themeRandomCard = atom([]);

function App() {
  const [randomCard, setRandomCard] = useAtom(themeRandomCard);
  const [cards, setCards] = useState([]);
  const [hideMode, sethideMode] = useAtom(themeHideMode);
  const [animatedEntry, setAnimatedEntry] = useState(false);
  const [animatedExit, setAnimatedExit] = useState(false);
  const addButtonRefFIRST = useRef(null);
  const addButtonRefSECOND = useRef(null);
  const addCardRef = useRef(null);
  const addButtonRefDeleteLastArrayElement = useRef(null);

  const cardDescriptions = {
    SM: "Space marines",
    Chaos: "Chaos",
    Orks: "Orks",
    IG: "Imperial Guard",
    Necrons: "Necrons",
    Tau: "Tau Empire",
    Tyranids: "Tyranids",
    Eldar: "Eldar",
  };

  const cardColor = {
    SM: "SMColor",
    Chaos: "ChaosColor",
    Ork: "OrkColor",
    IG: "IGColor",
    Necrons: "NecronColor",
    Tau: "TauColor",
    Tyranids: "TyranidColor",
    Eldar: "EldarColor",
  };

  const cardImage = {
    SM,
    Chaos,
    Orks,
    IG,
    Necrons,
    Tau,
    Tyranids,
    Eldar,
  };

  const SMCardObj = {
    component: (
      <Card
        image={cardImage.SM}
        description={cardDescriptions.SM}
        className={`${cardColor.SM} card-list-item`}
      />
    ),
    name: "Space Marines",
    indexOfSearchTerm: "",
  };
  const ChaosCardObj = {
    component: (
      <Card
        image={cardImage.Chaos}
        description={cardDescriptions.Chaos}
        className={`${cardColor.Chaos} card-list-item`}
      />
    ),
    name: "Chaos",
    indexOfSearchTerm: "",
  };
  const OrksCardObj = {
    component: (
      <Card
        image={cardImage.Orks}
        description={cardDescriptions.Orks}
        className={`${cardColor.Ork} card-list-item`}
      />
    ),
    name: "Orks",
    indexOfSearchTerm: "",
  };
  const IGCardObj = {
    component: (
      <Card
        image={cardImage.IG}
        description={cardDescriptions.IG}
        className={`${cardColor.IG} card-list-item`}
      />
    ),
    name: "Imperial Guard",
    indexOfSearchTerm: "",
  };
  const NecronsCardObj = {
    component: (
      <Card
        image={cardImage.Necrons}
        description={cardDescriptions.Necrons}
        className={`${cardColor.Necrons} card-list-item`}
      />
    ),
    name: "Necrons",
    indexOfSearchTerm: "",
  };
  const TauCardCardObj = {
    component: (
      <Card
        image={cardImage.Tau}
        description={cardDescriptions.Tau}
        className={`${cardColor.Tau} card-list-item`}
      />
    ),
    name: "Tau",
    indexOfSearchTerm: "",
  };
  const TyranidsCardObj = {
    component: (
      <Card
        image={cardImage.Tyranids}
        description={cardDescriptions.Tyranids}
        className={`${cardColor.Tyranids} card-list-item`}
      />
    ),
    name: "Tyranids",
    indexOfSearchTerm: "",
  };
  const EldarCardObj = {
    component: (
      <Card
        image={cardImage.Eldar}
        description={cardDescriptions.Eldar}
        className={`${cardColor.Eldar} card-list-item`}
      />
    ),
    name: "Eldar",
    indexOfSearchTerm: "",
  };

  const SMCard = (
    <Card
      image={cardImage.SM}
      description={cardDescriptions.SM}
      className={cardColor.SM}
    />
  );
  const ChaosCard = (
    <Card
      image={cardImage.Chaos}
      description={cardDescriptions.Chaos}
      className={cardColor.Chaos}
    />
  );
  const OrksCard = (
    <Card
      image={cardImage.Orks}
      description={cardDescriptions.Orks}
      className={cardColor.Ork}
    />
  );
  const IGCard = (
    <Card
      image={cardImage.IG}
      description={cardDescriptions.IG}
      className={cardColor.IG}
    />
  );
  const NecronsCard = (
    <Card
      image={cardImage.Necrons}
      description={cardDescriptions.Necrons}
      className={cardColor.Necrons}
    />
  );
  const TauCard = (
    <Card
      image={cardImage.Tau}
      description={cardDescriptions.Tau}
      className={cardColor.Tau}
    />
  );
  const TyranidsCard = (
    <Card
      image={cardImage.SM}
      description={cardDescriptions.SM}
      className={cardColor.Tyranids}
    />
  );
  const EldarCard = (
    <Card
      image={cardImage.Eldar}
      description={cardDescriptions.Eldar}
      className={cardColor.Eldar}
    />
  );

  const cardComponents = [
    SMCard,
    ChaosCard,
    OrksCard,
    IGCard,
    NecronsCard,
    TauCard,
    TyranidsCard,
    EldarCard,
  ];

  const cardComponentsObj = [
    SMCardObj,
    ChaosCardObj,
    OrksCardObj,
    IGCardObj,
    NecronsCardObj,
    TauCardCardObj,
    TyranidsCardObj,
    EldarCardObj,
  ];

  const getRandomCard = () => {
    return cardComponents[Math.floor(Math.random() * cardComponents.length)];
  };

  const handleClickRandom = () => {
    const newRandomCard = [
      ...randomCard,
      { key: Date.now(), card: getRandomCard() },
    ];
    setRandomCard(newRandomCard);

    addButtonRefFIRST.current.classList.add("p-0");
    setTimeout(() => {
      addButtonRefFIRST.current.classList.remove("p-0");
    }, 1000);
  };

  const handleDeleteLastArrayElement = () => {
    if (cards.length > 0) {
      const cardList = document.querySelectorAll(".card-list-item");
      const lastCard = cardList[cardList.length - 1];
      lastCard.classList.add("animate__animated", "animate__backOutRight");

      setTimeout(() => {
        setCards(cards.slice(0, cards.length - 1));
      }, 550);
    }
  };

  const handleClickSwitchAnimation = (event) => {
    event.stopPropagation();
    sethideMode(!hideMode);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      addButtonRefFIRST.current.classList.remove("p-0");
    }, 1000);

    if (cards.length === 1) {
      setAnimatedEntry(true);
    }
    if (cards.length === 0) {
      setAnimatedEntry(false);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [cards]);

  useEffect(() => {
    if (cards.length === 1) {
      setAnimatedExit(false);
    }
    if (cards.length === 0) {
      setAnimatedExit(true);
    }
  }, [cards]);

  const handleClickRestoreDown = useCallback(
    (event) => {
      if (event.target === addButtonRefSECOND.current) sethideMode(false);
    },
    [sethideMode, addButtonRefSECOND]
  );

  useEffect(() => {
    if (hideMode === true) {
      window.addEventListener("click", handleClickRestoreDown);
      return () => {
        window.removeEventListener("click", handleClickRestoreDown);
      };
    }
  }, [hideMode, addButtonRefSECOND, handleClickRestoreDown]);

  const handleSubmit = (term) => {
    if (term.trim() === "") {
      return undefined;
    }

    const filteredCardComponents = cardComponentsObj.filter((cardComponent) => {
      return cardComponent.name.toLowerCase().includes(term.toLowerCase());
    });

    if (filteredCardComponents.length > 0) {
      filteredCardComponents.forEach((cardComponent) => {
        const index = cardComponent.name
          .toLowerCase()
          .indexOf(term.toLowerCase());
        cardComponent.indexOfSearchTerm = index;
      });

      filteredCardComponents.sort(
        (a, b) => a.indexOfSearchTerm - b.indexOfSearchTerm
      );

      const [ExtracketCards] = filteredCardComponents.map(
        (cardComponent, index) => {
          return <div key={index}>{cardComponent.component}</div>;
        }
      );

      setCards([...cards, ExtracketCards]);
    }
  };

  const animationEntryClass = animatedEntry
    ? "animate__animated animate__backInRight"
    : "";

  const animationExitClass = animatedExit
    ? "animate__animated animate__backOutRight"
    : "";

  return (
    <div style={{ fontFamily: "Alkatra-SemiBold" }}>
      <div>
        <p className="text-center mb-10">Your 40k armys</p>
      </div>
      <div className="text-center p-2">
        <button
          ref={addButtonRefFIRST}
          onClick={handleClickRandom}
          className="bg-[#8a5e3b] rounded-md p-2 m-6 z-10 duration-300 ease-in-out"
        >
          Add a random 40k Army!
        </button>
      </div>
      <div>
        <section ref={addCardRef} className="flex flex-wrap flex-row gap-5">
          {randomCard.map((cardObj) => (
            <React.Fragment key={cardObj.key}>{cardObj.card}</React.Fragment>
          ))}
        </section>
      </div>
      <div className="text-center p-2">
        <button
          ref={addButtonRefSECOND}
          className={
            "bg-[#8a5e3b] rounded-md p-2 m-6 z-10 duration-300 ease-in-out " +
            (hideMode ? "py-8 bg-red-700" : "")
          }
          onClick={handleClickSwitchAnimation}
        >
          Hide a selected 40k Army!
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <SearchBar onSubmit={handleSubmit} cards={cards} />
        <div>
          <CardList cards={cards} />
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <div>
          {(animatedEntry || animatedExit) && (
            <div className="text-center p-2">
              <button
                ref={addButtonRefDeleteLastArrayElement}
                onClick={handleDeleteLastArrayElement}
                className={`${animationEntryClass} ${animationExitClass} bg-[#8a5e3b] rounded-md p-2 m-6 z-10 duration-300 ease-in-out `}
              >
                Delete the last 40k army
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
