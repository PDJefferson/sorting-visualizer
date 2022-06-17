export  function selectionSort(array) {
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
  console.log(array);
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
export function quickSort(array) {
  const animations = [];
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(array, start, end, animations) {
  if (start < end) {
    const index = partition(array, start, end, animations);
    quickSortHelper(array, start, index - 1, animations);
    quickSortHelper(array, index + 1, end, animations);
  }
  return;
}

function partition(array, start, end, animations) {
  let pivotIndex = Math.floor(Math.random() * (end - start) + start);

  animations.push([pivotIndex, end, true]);
  animations.push([pivotIndex, end, true]);
  swap(array, pivotIndex, end);
  let pivot = array[end];
  let j = start - 1;
  for (let i = start; i < end; i++) {
    if (array[i] < pivot) {
      j++;
      swap(array, i, j);
      animations.push([i, j, true]);
      animations.push([i, j, true]);
    } else {
      animations.push([i, end, false]);
      animations.push([i, end, false]);
    }
  }
  animations.push([j + 1,end, true]);
  animations.push([j+1, end, true]);
  swap(array, end, j + 1);
  return j + 1;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
