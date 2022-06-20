import styles from "./Slider.module.css";
import React, { useState, useEffect } from "react";
import { getPopulatedArray } from "../../Algorithms/PopulateArray";


const Slider = (props) => {
  const array = getPopulatedArray(10);
  const [currentArray, setCurrentArray] = useState(array);
  
  useEffect(() => {
    props.onSliderChange(currentArray);
  }, [currentArray]);

  
  const handleSliderChange = (event) => {
    const changes  = getPopulatedArray(event.target.value);
    setCurrentArray(changes);
  };

  return (
    <div className={styles["slider-container"]}>
      <h2 >Elements :  {currentArray.length}</h2>
      <input
        type="range"
        min="10"
        max="200"
        step ="5"
        disabled= {false}
        className={styles.slider}
        value={currentArray.length}
        onChange={handleSliderChange}
      ></input>
    </div>
  );
};

export default Slider;
