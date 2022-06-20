import { swap } from "./swap";

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
      animations.push([i, min, true]);
      swap(array, i, min);
      
    }
  
    return animations;
  }
