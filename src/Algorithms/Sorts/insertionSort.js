export function insertionSort(array) {
    const animations = [];
    for(let i = 1; i < array.length; i++) {
        let sortUpToThisPoint =  array[i];
        let j = i - 1;
        animations.push([j, i, false]);
        animations.push([j, i, false]);

        //sort the array after this point
        while(j >= 0 && array[j] > sortUpToThisPoint) {
            array[j + 1] = array[j];
            animations.push([j, j+ 1, true]);
            animations.push([j, j+1 , true]);
            j--;
        }

        animations.push([j+1, i, false]);
        animations.push([j+1, i, false]);
        array[j + 1] = sortUpToThisPoint;
    }
    
    return animations;
}