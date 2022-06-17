export  function randomizeArray(array, bars)  {
    const ANIMATION_DURATION = 1000;
    for (let i = array.length-1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        let temp1 = array[i];
        array[i] = array[j];
        array[j] = temp1;
        setTimeout(() => {
            const currentDiv = bars.current[i];
            const randomDiv = bars.current[j];
            let temp =  currentDiv.style.left;
            currentDiv.style.left = randomDiv.style.left;
            randomDiv.style.left = temp;
        }, (ANIMATION_DURATION/array.length) * i);  
    }
    return array;
}