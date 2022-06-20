import styles from "./Container.module.css";
import BarList from "../Bar/BarList";
const Container = (props) => {
  return (
    <div id="parent-div" className={styles.container}>
      <BarList items={props.items} />
    </div>
  );
};

export default Container;
