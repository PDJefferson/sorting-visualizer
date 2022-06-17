import styles from "./NavBar.module.css";
import Slider from "./Slider";
import React, { useState, useLayoutEffect } from "react";

const NavBar = (props) => {
  const currentSort = "Sort";
  const [selectedSort, setSelectedSort] = useState(currentSort);
  const [randomClicked, setRandomClicked] = useState(true);

  const sliderChangeEvent = (event) => {
    props.onSavedPopulatedArray(event);
    setRandomClicked(true);
  };

  const quickSortHandler = (event) => {
    setSelectedSort("Quick Sort");
  };

  const SelectionSortHandler = (event) => {
    setSelectedSort("Selection Sort");
  };

  const bubbleSortHandler = (event) => {
    setSelectedSort("Bubble Sort");
  };

  const randomizeArrayHandler = (event) => {
    if (randomClicked) {
      props.onClickedRandomizeArray(event);
      setRandomClicked(false);
    } else {
      console.log("Can only randomize once");
    }
  };

  const startSortinghandler = (event) => {
    if (selectedSort === "Sort") {
      console.log("Please select a sort");
    } else if (selectedSort === "Quick Sort") {
      props.onPerformQuickSort(event);
    } else if (selectedSort === "Selection Sort") {
      props.onPerformSectionSort(event);
    } else if (selectedSort === "Bubble Sort") {
      props.onPerformBubbleSort(event);
    }
  };

  return (
    <div className={styles.navbar}>
      <Slider onSliderChange={sliderChangeEvent} />
      <button onClick={randomizeArrayHandler} className={styles["button-set"]}>
        Randomize
      </button>
      <button className={styles["button-set"]} onClick={startSortinghandler}>
        Start
      </button>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>{selectedSort}</button>
        <div className={styles["dropdown-content"]}>
          <a onClick={quickSortHandler}>QuickSort</a>
          <a onClick={SelectionSortHandler}>Selection Sort</a>
          <a onClick={bubbleSortHandler}>Bubble Sort</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
