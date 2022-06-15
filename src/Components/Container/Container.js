import styles from "./Container.module.css";
import BarList from "../Bar/BarList";
import React, { useState, useEffect } from "react";
const Container = (props) => {

  return (
    <div id="div1" className={styles.container}>
      <BarList items={props.items} />
    </div>
  );
};

export default Container;
