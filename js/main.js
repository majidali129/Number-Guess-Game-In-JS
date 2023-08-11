let id = (id)=>document.getElementById(id);
let feedback = id('user_feedback'),
mainHeading = id('main_heading'),
message = id('counter_message'),
userGuess = id('guess_field'),
submit = id('submit_btn'),
reset = id('reset_btn');

let count = 0;
let isFinished = false;
let myNumber = Math.floor(Math.random()*100);


submit.addEventListener('click', ()=>{
    let errorField = document.querySelector('.error');
    errorHandler(errorField)
    fieldClearHandler(userGuess)
})


const fieldClearHandler = (target) => {
    playGame()
    target.value = '';
}



const playGame = () => {
    if(userGuess.value === ''){
        return;
    }else{
        countHandler()
        let guess = +userGuess.value;
        console.log(guess, myNumber)

        if(guess < myNumber){
            feedback.innerHTML = `My Number is greater than <span class="text-[#fff]"> ${guess} </span>`;
        }else if(guess > myNumber){
            feedback.innerHTML = `My Number is smaller than <span class="text-[#fff]"> ${guess} </span>`;
        }else{
            feedback.innerHTML = `Congrats! <span class="text-[#fff]"> ${guess} </span> is the right number`;
            userGuess.setAttribute('readonly', true)
            isFinished = true;
            reset.classList.add('block')
            reset.classList.remove('hidden')
            mainHeading.innerHTML = " Let's play again..."
            // gameRestartHandler()
        }
    }

    if(isFinished){
        submit.classList.add('cursor-wait')
        submit.setAttribute('disabled', true)
    }
}

function countHandler(){
    count++;
    if(count === 10){
        submit.classList.add('cursor-wait')
        submit.setAttribute('disabled', true)
        gameRestartHandler()
    }
    message.innerHTML = String(count);

}

function errorHandler(target){
    if(userGuess.value === ''){
        target.classList.add('block')
        target.classList.remove('hidden')
    }else{
        target.classList.remove('block')
        target.classList.add('hidden')
        // fieldValidator()
    }
}

function gameRestartHandler(){
    setTimeout(()=>{
        location.reload();
    }, 4000)
}


reset.addEventListener('click', ()=>{
    setTimeout(()=>{ location.reload()}, 2000)
})


window.addEventListener('load', ()=>{
    setTimeout(()=>{
        // console.log('page loded')
        alert('You have only 10 attempts...')
    },5000)
})