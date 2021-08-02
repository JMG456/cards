import React, { useState, useEffect } from "react";
import Card from "./Card";

import classes from "./CardList.module.css";

const CardList = ({ setTitle }) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch("https://react-cards-28644-default-rtdb.firebaseio.com/cards.json", {
      signal: abortCont.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data :(");
        }
        return response.json();
      })
      .then((data) => {
        const loadedCards = [];
        for (const key in data) {
          const loadedCard = {
            id: key,
            ...data[key],
          };
          loadedCards.push(loadedCard);
        }
        setCards(loadedCards);
        setLoading(false);
        if (loadedCards.length === 0) {
          setTitle("No cards yet");
        } else {
          setTitle("All Cards");
        }
      })
      .catch((err) => {
        if (!abortCont.signal.aborted) {
          setLoading(false);
          setTitle(err.message);
        }
      });
    return () => abortCont.abort();
  }, [setTitle, cards.length]);

  return (
    <>
      {isLoading && <></>}

      {cards.length > 0 && (
        <ul className={classes.list}>
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              msg={card.msg}
              imgPath={card.imagePath}
              cards={cards}
              setCards={setCards}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default CardList;
