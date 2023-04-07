import '../styles/index.css' 

const buttonPrev = document.querySelector('.slider__button_prev');
const buttonNext = document.querySelector('.slider__button_next');
const mainImg = document.querySelector('.slider__image-main');
const secondaryImg =document.querySelector('.slider__image-secondary');


function leftImgOpen(){
    mainImg.classList.toggle('slider__image_active');
    mainImg.classList.toggle('slider__image_disabled');
    secondaryImg.classList.toggle('slider__image_active');
    secondaryImg.classList.toggle('slider__image_disabled')

}

function rightImgOpen(){
    mainImg.classList.toggle('slider__image_active');
    mainImg.classList.toggle('slider__image_disabled');
    secondaryImg.classList.toggle('slider__image_active');
    secondaryImg.classList.toggle('slider__image_disabled')
}

buttonPrev.addEventListener('click', leftImgOpen)
buttonNext.addEventListener('click', rightImgOpen)