import { swap } from "./swap"

//quicksort variant with randomized pivot selection
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
    animations.push([start, pivotIndex, pivotIndex, true]);
    animations.push([start, pivotIndex, pivotIndex, true]);
    swap(array, pivotIndex, start);
    let pivot = array[start];
    let i = start;
    let j = end;
  
    while (i < j) {
      while (pivot >= array[i]) {
        animations.push([i, j, start, false]);
        animations.push([i, j, start, false]);
        i++;
      }
      while (pivot < array[j]) {
        animations.push([i, j, start, false]);
        animations.push([i, j, start, false]);
        j--;
      }
      if (i < j) {
        animations.push([i, j, start, true]);
        animations.push([i, j, start, true]);
        swap(array, i, j);
      } else {
      }
    }
  
    animations.push([start, j, start, true]);
    animations.push([start, j, start, true]);
    swap(array, start, j);
  
    return j;
}