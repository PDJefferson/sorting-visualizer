import styles from "./NavBar.module.css";
import Slider from "./Slider";
import React, { useState } from "react";

const NavBar = (props) => {
  const currentSort = "Sort";
  const [selectedSort, setSelectedSort] = useState(currentSort);
  const [randomClicked, setRandomClicked] = useState(true);

  const sliderChangeEvent = (event)  => {
    setRandomClicked(true);
    props.onSavedPopulatedArray(event);
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

  const insertionSortHandler = (event) => {
    setSelectedSort("Insertion Sort");
  };


  const randomizeArrayHandler = (event) => {
    if (randomClicked) {
      props.onClickedRandomizeArray(event);
      setRandomClicked(false);
    } else {
      //alert("Can only randomize once");
    }
  };

  const startSortinghandler = (event) => {
    if (selectedSort === "Sort") {
      alert("Please select a sort");
    } else if (selectedSort === "Quick Sort") {
      props.onPerformQuickSort(event);
      setRandomClicked(true);
    } else if (selectedSort === "Selection Sort") {
      props.onPerformSectionSort(event);
      setRandomClicked(true);
    } else if (selectedSort === "Bubble Sort") {
      props.onPerformBubbleSort(event);
      setRandomClicked(true);
    }else if(selectedSort === "Insertion Sort"){
      props.onPerformInsertionSort(event);
      setRandomClicked(true);
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
          <a  onClick={quickSortHandler}>QuickSort</a>
          <a  onClick={SelectionSortHandler}>Selection Sort</a>
          <a  onClick={bubbleSortHandler}>Bubble Sort</a>
          <a onClick={insertionSortHandler}>Insertion Sort</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
