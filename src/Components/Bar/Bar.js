import styles from "./Bar.module.css";
import { useState, useEffect } from "react";

const Bar = (props) => {

  let incrementBy = 100 / props.size;
  const currentLeft = (props.item / props.size) * 100 + "%";
  const currentHeight = incrementBy * (props.item + 1) + "%";
  const currentWidth = 100 / props.size + "%";

  return (
    <div
      className={styles.bar}
      style={{left: currentLeft, height: currentHeight, width: currentWidth }}
    ></div>
  );
};

export default Bar;
