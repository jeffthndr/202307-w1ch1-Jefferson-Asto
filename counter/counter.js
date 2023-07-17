const counterScreen = document.querySelector("#screen")
let counter = 0;

const counterUp = () => {
    counter += 1;
    counterScreen.textContent = counter;
}

const counterDown = () => {
    if (counter === 0) {
        counter = 0;
    } else{
        counter -= 1;
    counterScreen.textContent = counter;
    }
    
}

const counterClear = () => {
    counter = 0;
    counterScreen.textContent = counter;
}