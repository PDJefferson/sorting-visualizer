import "./App.css";
import Container from "./Components/Container/Container";
import NavBar from "./Components/NavBar/NavBar";
import React, { useState, useRef, useLayoutEffect } from "react";
import { randomizeArray } from "./Algorithms/RandomizeArray";
import Sorts from "./Algorithms/sorts";
import Settings from "./Scripts/settings";
import SortAnimations from "./Animations/sortAnimations";

function App(props) {
  
  //to store the bar divs
  const ARRAY_BARS = useRef(Settings.ARRAY_BARS);
  //to store the current array
  const [populatedArray, setPopulatedArray] = useState([]);
  //flag to show when shuffling is done
  const [isRandomizedArrayClicked, setIsRandomizedArrayClicked] =
    useState(false);
  //flag to show when sorting is done
  const [isSorted, setIsSorted] = useState(false);
  
  useLayoutEffect(() => {
    if (isRandomizedArrayClicked) {
      const shuffleArray = randomizeArray(populatedArray, ARRAY_BARS);
      setPopulatedArray((prevstate) => (prevstate = shuffleArray));
      setIsRandomizedArrayClicked(false);
    }
    if (isSorted) {
      Settings.SLIDER[0].disabled = false;
      Settings.BUTTONS[0].disabled = false;
      Settings.BUTTONS[1].disabled = false;
      setIsSorted(false);
    }

  }, [isRandomizedArrayClicked, isSorted, populatedArray]);

  const savePopulatedArrayHandler = (array) => {
    setPopulatedArray(array);
  };

  const randomizeArrayHandler = (event) => {
    if (!isRandomizedArrayClicked) {
      setIsRandomizedArrayClicked(true);
    }
  };

  const performSelectionSortHandler = (event) => {
    const animations = Sorts.selectionSort(populatedArray);
    SortAnimations.animateSelectionSort(animations, setIsSorted, ARRAY_BARS, populatedArray);
  };

  const performBubbleSortHandler = (event) => {
    const animations = Sorts.bubbleSort(populatedArray);
    SortAnimations.animateBubbleSort(animations, setIsSorted, ARRAY_BARS, populatedArray);
  };

  const performQuickSortHandler = (event) => {
    const animations = Sorts.quickSort(populatedArray);
    SortAnimations.animateQuickSort(animations,setIsSorted, ARRAY_BARS, populatedArray);
  };

  const performInsertionSortHandler = (event) => {
    const animations = Sorts.insertionSort(populatedArray);
    SortAnimations.animateInsertionSort(animations, setIsSorted, ARRAY_BARS, populatedArray);
  }

  return (
    <div>
      <NavBar
        onSavedPopulatedArray={savePopulatedArrayHandler}
        onClickedRandomizeArray={randomizeArrayHandler}
        onPerformSectionSort={performSelectionSortHandler}
        onPerformBubbleSort={performBubbleSortHandler}
        onPerformQuickSort={performQuickSortHandler}
        onPerformInsertionSort={performInsertionSortHandler}
      />
      <Container items={populatedArray} />
    </div>
  );
}

export default App;
