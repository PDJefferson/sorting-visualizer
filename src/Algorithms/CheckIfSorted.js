export function checkIfSorted(bars) {
    let flag = true;
    for (let i = 0; i < bars.length-1; i++) {
        if(parseInt(bars[i].style.height) > parseInt(bars[i+1].style.height)){
            flag = false;
            break;
        }
    }

    return flag;
}