import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";
import Notification from "./Notification";
import image1 from '../images/card1.jpg';
import image2 from '../images/card2.jpg';
import image3 from '../images/card3.jpg';
import image4 from '../images/card4.jpg';
import image5 from '../images/card5.jpg';
import image6 from '../images/card6.jpg';

const Card = (props) => {
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const abortCont = new AbortController();

  useEffect(()=>{
    const imagePath=props.imgPath;
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
  },[props.imgPath])

  const deleteHandler = () => {
    setError(null);

    fetch(
      `https://react-cards-28644-default-rtdb.firebaseio.com/cards/${props.id}.json`,
      {
        method: "DELETE",
        signal: abortCont.signal
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not delete");
        }
        props.setCards([]);
      })
      .catch((err) => {
        if (!abortCont.signal.aborted) {
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  };

  return (
    <>
      {error && <Notification notificationMsg={error} />}

      <li className={classes.Card}>
        <Link to={`/cards/${props.id}`}>
          <div className={classes.Image}>
            <img src={image} alt="" />
          </div>
          <div className={classes.Content}>
            <h3>{props.title}</h3>
            <p>{props.msg}</p>
          </div>
        </Link>
        <div className={classes.Action}>
          <button onClick={deleteHandler}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </li>
    </>
  );
};

export default Card;
