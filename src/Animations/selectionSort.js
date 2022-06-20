import Settings from '../Scripts/settings';
import { checkIfSorted } from '../Algorithms/CheckIfSorted';

export function animateSelectionSort(animations, setIsSorted, ARRAY_BARS, populatedArray) {
    Settings.SLIDER[0].disabled = true;
    Settings.BUTTONS[0].disabled = true;
    Settings.BUTTONS[1].disabled = true;
    let swapCount = 0;
    let comparisonCount = 0;
    for (let i = 0; i < animations.length; i++) {
      const [ithBar, jthBar, swap] = animations[i];
      const ithBarStyle = ARRAY_BARS.current[ithBar].style;
      const jthBarStyle = ARRAY_BARS.current[jthBar].style;

      if (!swap) {
        setTimeout(() => {
          swapCount = 0;
          if (comparisonCount % 2 === 0) {
            ithBarStyle.background = Settings.POINTER_ONE_COLOR;
            jthBarStyle.background = Settings.POINTER_TWO_COLOR;
            comparisonCount++;
          } else {
            if (ithBar !== animations[i + 1][0]) {
              ithBarStyle.background = Settings.NORMAL_COLOR;
            }
            jthBarStyle.background = Settings.NORMAL_COLOR;
            comparisonCount++;
          }
          setIsSorted(checkIfSorted(ARRAY_BARS.current));
        }, Settings.ANIMATION_DURATION / populatedArray.length * i+2);
      } else {
        setTimeout(() => {
          comparisonCount = 0;
          if (swapCount % 2 === 0) {
            ithBarStyle.background = Settings.POINTER_ONE_COLOR;
            jthBarStyle.background = Settings.POINTER_TWO_COLOR;
            const ithBarTemp = ithBarStyle.height;
            ithBarStyle.height = jthBarStyle.height;
            jthBarStyle.height = ithBarTemp;
            swapCount++;
          } else {
            ithBarStyle.background = Settings.NORMAL_COLOR;
            jthBarStyle.background = Settings.NORMAL_COLOR;
            swapCount++;
          }
          setIsSorted(checkIfSorted(ARRAY_BARS.current));
        }, Settings.ANIMATION_DURATION /populatedArray.length * i+2);
      }
    }
}