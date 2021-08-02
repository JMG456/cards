import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";
import Notification from "./Notification";

const Card = (props) => {
  const [error, setError] = useState(null);
  const abortCont = new AbortController();

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
            <img src={props.imgPath} alt="" />
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
