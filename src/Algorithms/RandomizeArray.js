export  function randomizeArray(array)  {
    const ANIMATION_DURATION = 1000;
    for (let i = array.length-1; i > 0; i--) {
        setTimeout(() => {
            const currentDiv = document.getElementById(i);
            const j = Math.floor(Math.random() * (i+1));
            const randomDiv = document.getElementById(j);
            let temp =  currentDiv.style.left;
            currentDiv.style.left = randomDiv.style.left;
            randomDiv.style.left = temp;
        }, (ANIMATION_DURATION/array.length)*i);  
    }
}