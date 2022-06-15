import styles from "./NavBar.module.css";
import Slider from "./Slider";

const NavBar = (props) => {
	const sliderChangeEvent = (event) => {
    props.onSavedPopulatedArray(event);
	}

  const performedQuickSort = (event) => {
    console.log("Quick Sort");
  }

  const performedSelectionSort = (event) => {

  }

  const randomizeArrayHandler = (event) => {
    props.onClickedRandomizeArray(event);
  }

  return (
    <div className={styles.navbar}>
      <Slider onSliderChange={sliderChangeEvent} />
      <button  onClick={randomizeArrayHandler} className={styles['button-set']}> Randomize </button>
			<button className={styles['button-set']}> Start </button>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>
          Sort
        </button>
        <div className={styles['dropdown-content']}>
          <a onClick={performedQuickSort}>QuickSort</a>
          <a >Selection Sort</a>
          <a >Bubble Sort</a>
        </div>        
      </div>
      
        
      
      
    </div>
  );
};

export default NavBar;
