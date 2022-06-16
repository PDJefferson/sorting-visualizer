import { checkIfSorted } from "./CheckIfSorted";

export function selectionSort(array) {
  const animations = [];
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      } else {
        animations.push([min, j, false]);
        animations.push([min, j, false]);
      }
    }

    animations.push([i, min, true]);
    swap(array, i, min, animations);
    animations.push([i, min, true]);
  }

  return animations;
}

export function bubbleSort(array) {
  const animations = [];

  for (let i = 0; i < array.length; i++) {
    let flagToStopBubbleSort = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1, animations);
        flagToStopBubbleSort = true;
        animations.push([j, j + 1, true]);
        animations.push([j, j + 1, true]);
      } else {
        animations.push([j, j + 1, false]);
        animations.push([j, j + 1, false]);
      }
    }

    if (!flagToStopBubbleSort) {
      break;
    }
  }

  return animations;
}

function swap(array, i, j, animations) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
