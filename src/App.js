import "./App.css";
import Container from "./Components/Container/Container";
import NavBar from "./Components/NavBar/NavBar";
import React, { useState, useEffect } from "react";
import { randomizeArray } from "./Algorithms/RandomizeArray";
import { getPopulatedArray } from "./Algorithms/PopulateArray";

function App(props) {
  const items = getPopulatedArray(10);
  const [populatedArray, setPopulatedArray] = useState(items);
  const [isRandomizedArrayClicked, setIsRandomizedArrayClicked] = useState(false);

  useEffect(() => {
    if (isRandomizedArrayClicked) {
      randomizeArray(populatedArray);
      setIsRandomizedArrayClicked(false);
    } else {
    }
  }, [isRandomizedArrayClicked]);


  const savePopulatedArrayHandler = (array) => {
    //current solution for div that is not being updated correct/y after
    //shuffling the array.
    const handleDiv = document.getElementById(0);
    handleDiv.style.left = "0%";
    setPopulatedArray(array);
  };

  const randomizeArrayHandler = (event) => {
    if (!isRandomizedArrayClicked) {
      setIsRandomizedArrayClicked(true);
    }
  };

  return (
    <div>
      <NavBar
        onSavedPopulatedArray={savePopulatedArrayHandler}
        onClickedRandomizeArray={randomizeArrayHandler}
      />
      <Container items={populatedArray} />
    </div>
  );
}

export default App;
