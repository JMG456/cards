import React from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

const AddCover = ({ imageIndex, setImageIndex }) => {
  return (
    <div className={"main-container"}>
      <h1>Pick a Background</h1>
      <Carousel imageIndex={imageIndex} setImageIndex={setImageIndex} />
      <Link to="/add-form" className="button">Next</Link>
    </div>
  );
};

export default AddCover;
