window.onload = function () {

var slides = document.querySelectorAll('.slide')
var slidesPrev = document.querySelectorAll('.slider-preview__block')
var currentSlide = 0
const timeDelay = 5000 
var slideInterval = setInterval(nextSlide, timeDelay)

// Обработка стартовой кнопки
var startBtn = document.querySelector('.slider-start__btn')
var startCounter = document.querySelector('.slider-start__counter')
var startScreen = document.querySelector('.slider-start')

startBtn.addEventListener("click", event =>{
  startBtn.classList.add('slider-start__hidden')
  startCounter.classList.remove('slider-start__hidden')
  
  let counter = 5
  timer_id = setInterval(() => {
    counter--
    startCounter.innerText = counter
    if (counter == 1) setSlide(0)
    if (counter == 0) {clearInterval(timer_id)
      startScreen.classList.add('slider-start__hidden')
      clearInterval(slideInterval)
      slideInterval = setInterval(nextSlide, timeDelay)
      console.log(currentSlide)
    }
  }, 1000)
})


// Обработка кнопок Preview
const prevList = document.querySelector(".slider-preview");
prevList.addEventListener("click", event => {
		var element = event.target
    var index = element.closest('.slider-preview__block')
    setSlide(index.id)    
});


// Обработка кнопок вперед-назад
var nextBtn = document.querySelector('.slider-right')
var prevBtn = document.querySelector('.slider-left')

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Следующий слайд
function nextSlide() {
    slides[currentSlide].classList.remove('slide-active')
    slidesPrev[currentSlide].classList.remove('slider-preview__block--active')
    currentSlide = (currentSlide+1)%slides.length
    if ((window.innerWidth) < 768 & currentSlide == 3){
        currentSlide =  0
    }
    slides[currentSlide].classList.add('slide-active')
    slidesPrev[currentSlide].classList.add('slider-preview__block--active')
}

// Предыдущий слайд
function prevSlide() {
  clearInterval(slideInterval)
  slides[currentSlide].classList.remove('slide-active')
  slidesPrev[currentSlide].classList.remove('slider-preview__block--active')
  currentSlide = (currentSlide-1)
  if (currentSlide < 0) {
    currentSlide = slides.length - 1
  } 
  if ((window.innerWidth) < 768 & currentSlide == 0){
      currentSlide = 3
  }
  slides[currentSlide].classList.add('slide-active')
  slidesPrev[currentSlide].classList.add('slider-preview__block--active')
  slideInterval = setInterval(nextSlide, timeDelay)
}

// Установка слайда по номеру
function setSlide(num) {
  clearInterval(slideInterval)
  slides[currentSlide].classList.remove('slide-active')
  slidesPrev[currentSlide].classList.remove('slider-preview__block--active')
  currentSlide = num
  slides[currentSlide].classList.add('slide-active')
  slidesPrev[currentSlide].classList.add('slider-preview__block--active')
  slideInterval = setInterval(nextSlide, timeDelay)
}

}
