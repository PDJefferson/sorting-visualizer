import styles from "./Slider.module.css";
import React, { useState } from "react";
import { getPopulatedArray } from "../../Algorithms/PopulateArray";
import  {useEffect} from "react";

const Slider = (props) => {
  const array = getPopulatedArray(10);
  const [currentArray, setCurrentArray] = useState(array);
  useEffect(() => {
    const mountArray = getPopulatedArray(currentArray.length);
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
        max="500"
        step ="10"
        className={styles.slider}
        value={currentArray.length}
        onChange={handleSliderChange}
      ></input>
    </div>
  );
};

export default Slider;
