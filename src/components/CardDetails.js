import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./CardDetails.module.css";
import image1 from '../images/card1.jpg';
import image2 from '../images/card2.jpg';
import image3 from '../images/card3.jpg';
import image4 from '../images/card4.jpg';
import image5 from '../images/card5.jpg';
import image6 from '../images/card6.jpg';


const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);


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

        const imagePath=cardData.imagePath;
        if(imagePath===1){
          setImage(image1);
        }else if(imagePath===2){
          setImage(image2);
        }else if(imagePath===3){
          setImage(image3);
        }else if(imagePath===4){
          setImage(image4);
        }else if(imagePath===5){
          setImage(image5);
        }else if(imagePath===6){
          setImage(image6);
        }
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
        <div className={classes.CardLg}>
          <div className={classes.Image}>
            <img src={image} alt="" />
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
