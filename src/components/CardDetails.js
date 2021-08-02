import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import classes from "./CardDetails.module.css";


const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);
  const cardDom = useRef();


  useEffect(() => {
    const abortCont = new AbortController();
    setCard({});

    fetch(
      `https://react-cards-28644-default-rtdb.firebaseio.com/cards/${id}.json`,
      { signal: abortCont.signal }
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch that card data");
        }
        return response.json();
      })
      .then((cardData) => {
        setCard(cardData);
      })
      .catch((err) => {
        if (!abortCont.signal.aborted) {
          setError(err.message);
          setCard(null);
        }
      });
    return () => abortCont.abort();
  }, [id]);

  if (!error && !card) {
    return <h1>This card does not exist</h1>;
  }

  return (
    <>
      {error && <h1>{error}</h1>}
      {card && (
        <div className={classes.CardLg} ref={cardDom}>
          <div className={classes.Image}>
            <img src={card.imagePath} alt="" />
          </div>
          <div className={classes.Content}>
            <h3>{card.title}</h3>
            <p>{card.msg}</p>
          </div>
        </div>
      )}
      
    </>
  );
};

export default CardDetails;
