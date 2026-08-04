const slides = [...document.querySelectorAll('.slide')];

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const playPauseBtn = document.querySelector('.playPause');
const dotsContainer = document.querySelector('.dots');

let current = 0;
let interval;
let isPlaying = true;

function createDots(){

    slides.forEach((slide,index)=>{

        const dot = document.createElement('div');

        dot.className='dot';

        dot.addEventListener('click',()=>{

            showSlide(index);
        });

        dotsContainer.append(dot);

    });

}

createDots();

const dots=[...document.querySelectorAll('.dot')];

function showSlide(index){

    slides[current].classList.remove('active');
    dots[current].classList.remove('active');

    current=index;

    if(current<0)
        current=slides.length-1;

    if(current>=slides.length)
        current=0;

    slides[current].classList.add('active');
    dots[current].classList.add('active');

}

showSlide(0);

function next(){

    showSlide(current+1);
}

function prev(){

    showSlide(current-1);
}

nextBtn.addEventListener('click',next);
prevBtn.addEventListener('click',prev);

function startAuto(){

    interval=setInterval(next,3000);

}

function stopAuto(){

    clearInterval(interval);

}

startAuto();

playPauseBtn.addEventListener('click',()=>{

    if(isPlaying){

        stopAuto();
        playPauseBtn.textContent="Play";

    }else{

        startAuto();
        playPauseBtn.textContent="Pause";

    }

    isPlaying=!isPlaying;

});

document.addEventListener('keydown',(event)=>{

    if(event.key==="ArrowRight")
        next();

    if(event.key==="ArrowLeft")
        prev();

});

let startX=0;
let endX=0;

const slider=document.querySelector('.slider');

function touchStart(x){

    startX=x;

}

function touchEnd(x){

    endX=x;

    if(startX-endX>50)
        next();

    if(endX-startX>50)
        prev();

}

slider.addEventListener('touchstart',(e)=>{

    touchStart(e.touches[0].clientX);

});

slider.addEventListener('touchend',(e)=>{

    touchEnd(e.changedTouches[0].clientX);

});

let mouseDown=false;

slider.addEventListener('mousedown',(e)=>{

    mouseDown=true;

    touchStart(e.clientX);

});

slider.addEventListener('mouseup',(e)=>{

    if(!mouseDown) return;

    mouseDown=false;

    touchEnd(e.clientX);

});