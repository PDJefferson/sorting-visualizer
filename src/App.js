import "./App.css";
import Container from "./Components/Container/Container";
import NavBar from "./Components/NavBar/NavBar";
import React, { useState, useRef, useLayoutEffect } from "react";
import { randomizeArray } from "./Algorithms/RandomizeArray";
import { getPopulatedArray } from "./Algorithms/PopulateArray";
import { selectionSort, bubbleSort } from "./Algorithms/Sorts";
import { checkIfSorted } from "./Algorithms/CheckIfSorted";

const POINTER_ONE_COLOR = "linear-gradient(315deg, #a40606 0%, #d98324 74%)";
const POINTER_TWO_COLOR = "linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)";
const NORMAL_COLOR = "linear-gradient(-94deg, #d2ccc4 10%, #2f4353 90%)";
const ANIMATION_DURATION = 1500;

const BUTTONS =  document.getElementsByClassName("NavBar_button-set__I5AlZ");
const SLIDER = document.getElementsByClassName("Slider_slider__9p0k-");
function App(props) {
  //to store the bar divs
  const ARRAY_BARS = useRef(document.getElementsByClassName("Bar_bar__lEqOG"));

  //to store the current array
  const [populatedArray, setPopulatedArray] = useState([]);

  //flag to show when shuffling is done
  const [isRandomizedArrayClicked, setIsRandomizedArrayClicked] = useState(false);
  let comparisonCount = 0;
  let swapCount = 0;

  //flag to show when sorting is done
  const [isSorted, setIsSorted] = useState(false);


  useLayoutEffect(() => {
    if (isRandomizedArrayClicked) {
      const shuffleArray = randomizeArray(populatedArray, ARRAY_BARS);
      setPopulatedArray(prevstate => prevstate = shuffleArray);
      setIsRandomizedArrayClicked(false);
      
    }
    if(isSorted){
        console.log("sorted");
        SLIDER[0].disabled = false;
        BUTTONS[0].disabled = false;
        BUTTONS[1].disabled = false;
        setIsSorted(false);
    }
    

  }, [isRandomizedArrayClicked, populatedArray, ARRAY_BARS, isSorted]);
  
  const savePopulatedArrayHandler = (array) => {
    setPopulatedArray(array);
  };

  const randomizeArrayHandler = (event) => {
    if (!isRandomizedArrayClicked) {
      setIsRandomizedArrayClicked(true);
    }
  };

  const performSelectionSortHandler = (event) => {
    const animations = selectionSort(populatedArray);
    SLIDER[0].disabled = true;
    BUTTONS[0].disabled = true;
    BUTTONS[1].disabled = true;
   
    for (let i = 0; i < animations.length; i++) {
      const [ithBar, jthBar, swap] = animations[i];
      const ithBarStyle = ARRAY_BARS.current[ithBar].style;
      const jthBarStyle = ARRAY_BARS.current[jthBar].style;

      if (!swap) {
        setTimeout(() => {
          swapCount = 0;
          if (comparisonCount % 2 === 0) {
            ithBarStyle.background = POINTER_ONE_COLOR;
            jthBarStyle.background = POINTER_TWO_COLOR;
            comparisonCount++;
          } else {
            ithBarStyle.background = NORMAL_COLOR;
            jthBarStyle.background = NORMAL_COLOR;
            comparisonCount++;
          }
          setIsSorted(checkIfSorted(ARRAY_BARS.current));
        }, (ANIMATION_DURATION / populatedArray.length) * i);
      } else {
        setTimeout(() => {
          comparisonCount = 0;
          if (swapCount % 2 === 0) {
            ithBarStyle.background = POINTER_ONE_COLOR;
            jthBarStyle.background = POINTER_TWO_COLOR;
            const ithBarTemp = ithBarStyle.height;
            ithBarStyle.height = jthBarStyle.height;
            jthBarStyle.height = ithBarTemp;

            swapCount++;
          } else {
            ithBarStyle.background = NORMAL_COLOR;
            jthBarStyle.background = NORMAL_COLOR;
            swapCount++;
          }
          setIsSorted(checkIfSorted(ARRAY_BARS.current));
        }, (ANIMATION_DURATION / populatedArray.length) * i);
      }
    }
  };

  const performBubbleSortHandler = (event) => {
    
    const animations = bubbleSort(populatedArray);
    SLIDER[0].disabled = true;
    BUTTONS[0].disabled = true;
    BUTTONS[1].disabled = true;
    for (let i = 0; i < animations.length; i++) {
      const [ithBar, jthBar, swap] = animations[i];
      const ithBarStyle = ARRAY_BARS.current[ithBar].style;
      const jthBarStyle = ARRAY_BARS.current[jthBar].style;
      if (!swap) {
        setTimeout(() => {
          swapCount = 0;
          if (comparisonCount % 2 === 0) {
            ithBarStyle.background = POINTER_ONE_COLOR;
            jthBarStyle.background = POINTER_TWO_COLOR;
            comparisonCount++;
          } else {
            ithBarStyle.background = NORMAL_COLOR;
            jthBarStyle.background = NORMAL_COLOR;
            comparisonCount++;
          }
          setIsSorted(checkIfSorted(ARRAY_BARS.current));
        }, (ANIMATION_DURATION / populatedArray.length) * i);
      } else {
        setTimeout(() => {
          comparisonCount = 0;
          if (swapCount % 2 === 0) {
            ithBarStyle.background = POINTER_ONE_COLOR;
            jthBarStyle.background = POINTER_TWO_COLOR;
            const ithBarTempStyle = ithBarStyle.height;
            ithBarStyle.height = jthBarStyle.height;
            jthBarStyle.height = ithBarTempStyle;
            swapCount++;
          } else {
            ithBarStyle.background = NORMAL_COLOR;
            jthBarStyle.background = NORMAL_COLOR;
            swapCount++;
            
          }
          setIsSorted(checkIfSorted(ARRAY_BARS.current));
        }, (ANIMATION_DURATION / populatedArray.length) * i);
      }
    }
    
  };

  return (
    <div>
      <NavBar
        onSavedPopulatedArray={savePopulatedArrayHandler}
        onClickedRandomizeArray={randomizeArrayHandler}
        onPerformSectionSort={performSelectionSortHandler}
        onPerformBubbleSort={performBubbleSortHandler}
      />
      <Container items={populatedArray} />
    </div>
  );
}

export default App;
