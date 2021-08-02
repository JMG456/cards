import React from "react";
import classes from "./AddCardForm.module.css";
import { useState, useEffect } from "react";
import image1 from '../images/card1.jpg';
import image2 from '../images/card2.jpg';
import image3 from '../images/card3.jpg';
import image4 from '../images/card4.jpg';
import image5 from '../images/card5.jpg';
import image6 from '../images/card6.jpg';

const Carousel = ({imageIndex, setImageIndex}) => {

    let [imgIndex, setImgIndex] = useState(1);
    let [image, setImage] = useState(image1);

    const leftHandler = () => {
        imgIndex === 1 ? setImgIndex(6) : setImgIndex(imgIndex - 1);
      };
    
      const rightHandler = () => {
        imgIndex === 6 ? setImgIndex(1) : setImgIndex(imgIndex + 1);
      };

    useEffect( () =>{
        setImageIndex(imgIndex);
        if(imgIndex===1){
          setImage(image1);
        }else if(imgIndex===2){
          setImage(image2);
        }else if(imgIndex===3){
          setImage(image3);
        }else if(imgIndex===4){
          setImage(image4);
        }else if(imgIndex===5){
          setImage(image5);
        }else if(imgIndex===6){
          setImage(image6);
        }
    },[imageIndex, imgIndex, setImageIndex])



  return (
    <div className={classes.Carousel}>
      <i className="fas fa-caret-left" onClick={leftHandler}></i>
      <div className={classes.ImageCont}>
        <img src={image} alt={`card${imageIndex}.jpg`} />
      </div>
      <i className="fas fa-caret-right" onClick={rightHandler}></i>
    </div>
  );
};

export default Carousel;
