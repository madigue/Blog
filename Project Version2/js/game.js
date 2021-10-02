let count = 0;
const TIME  = 5000;


const button = document.querySelector('#button')
const timer = document.querySelector('#display')
const result = document.querySelector('#counter');



function start(){
    const startTime = Date.now();
    

    timer.textContent = TIME/1000;
    

    const interval = setInterval(() => {
        let deltaTime = Date.now() - startTime;
        let remainingTime = timer.textContent = (TIME - deltaTime)/1000;

         if(remainingTime <= 0){
             timer.textContent = 0;
            clearInterval(interval);
         }
    }, 100);
button.onclick = () => result.textContent = count++;

   

    const timeID = setTimeout(() => {
        button.onclick = null;
        timer.textContent = "Game Over";

        clearTimeout(timeID);
    },TIME);
}