import { useState } from "react";
import classes from "./AddCardForm.module.css";
import { useHistory } from "react-router-dom";
import Notification from "./Notification";

const AddCardForm = (props) => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [titleInput, setTitleInput] = useState(classes.normal);
  const [msgInput, setMsgInput] = useState(classes.normal);
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const imagePath = `/images/card${props.imageIndex}.jpg`;

  const handleSubmit = (e) => {
    e.preventDefault();

    //reset default states
    setTitleInput(classes.normal);
    setMsgInput(classes.normal);
    setError(null);

    //check input values
    if (
      (title.length > 16 || title.length < 1) &&
      (msg.length > 40 || msg.length < 1)
    ) {
      setTitleInput(classes.bad);
      setMsgInput(classes.bad);
      return;
    }
    if (title.length > 16 || title.length < 1) {
      setTitleInput(classes.bad);
      return;
    }
    if (msg.length > 40 || msg.length < 1) {
      setMsgInput(classes.bad);
      return;
    }

    //if all good, execute
    const abortCont = new AbortController();

    setLoading(true);
    const card = { title, msg, imagePath };

    fetch("https://react-cards-28644-default-rtdb.firebaseio.com/cards.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card),
      signal: abortCont.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not add");
        }
        history.replace("/");
      })
      .catch((err) => {
        if (!abortCont.signal.aborted) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => abortCont.abort();
  };

  return (
    <>
      {isLoading && <h1 style={{ marginTop: "2rem" }}>Adding Card...</h1>}
      {!isLoading && (
        <form className={classes.Form} onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <span>16 characters max</span>
          <input
            autoFocus
            className={titleInput}
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label htmlFor="msg">Message</label>
          <span>40 characters max</span>
          <input
            className={msgInput}
            type="text"
            id="msg"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          ></input>

          <button className={classes.Button}>Add</button>
        </form>
      )}
      {error && <Notification notificationMsg={error} />}
    </>
  );
};

export default AddCardForm;
