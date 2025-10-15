const state = {
    view:{
        squares:document.querySelectorAll('.square'),
        enemy: document.querySelector('.enemy'),
        timeLeft: document.querySelector('#time-left'),
        score: document.querySelector('#score'),
    },
    value:{ 
        
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
    },
    action:{
        timeId: setInterval(randomSquare, 1000),
        countDownId: setInterval(countDown, 1000),
    }
}

function playSound(){
<<<<<<< HEAD
    let audio = new Audio('./src/sons/hit.m4a');
=======
    let audio = new Audio('/src/sons/hit.m4a');
>>>>>>> ee80fb2ef370819246720a887efc0f9cc8fcede6
    audio.volume = 0.2;
    audio.play();
}

function randomSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove('enemy');
    });

    let randomNumber = Math.floor(Math.random() * state.view.squares.length);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add('enemy');
    state.value.hitPosition = randomSquare.id;
};

function addListenersHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener('mousedown', ()=>{
           if(square.id === state.value.hitPosition){
               state.value.result++;
               state.view.score.textContent = state.value.result;
                state.value.hitPosition = null;
                playSound();
            }
        });
    });
};

function main(){
randomSquare();
};

function countDown(){
    state.value.currentTime--;
    state.view.timeLeft.textContent = state.value.currentTime;

    if(state.value.currentTime <= 0){
        clearInterval(state.action.timeId);
        clearInterval(state.action.countDownId);
        alert(`Game Over! Seu resultado foi ${state.value.result}`);
    }
}

function main(){
    addListenersHitBox();
}

main();

