import React from "react";
import classes from "./AddCardForm.module.css";
import { useState, useEffect } from "react";

const Carousel = ({imageIndex, setImageIndex}) => {

    let [imgIndex, setImgIndex] = useState(1);

    const leftHandler = () => {
        imgIndex === 1 ? setImgIndex(6) : setImgIndex(imgIndex - 1);
      };
    
      const rightHandler = () => {
        imgIndex === 6 ? setImgIndex(1) : setImgIndex(imgIndex + 1);
      };

    useEffect( () =>{
        setImageIndex(imgIndex);
    },[imageIndex, imgIndex, setImageIndex])



  return (
    <div className={classes.Carousel}>
      <i className="fas fa-caret-left" onClick={leftHandler}></i>
      <div className={classes.ImageCont}>
        <img src={`/images/card${imageIndex}.jpg`} alt={`card${imageIndex}.jpg`} />
      </div>
      <i className="fas fa-caret-right" onClick={rightHandler}></i>
    </div>
  );
};

export default Carousel;
