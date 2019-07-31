let sliderWrapper = document.querySelector('.services__columnbox__wrapper')
let sliderItems = document.querySelectorAll('.services__columnbox__column')
let sliderControlLeft = document.querySelector('.services__columnbox__slider-control--left')
let sliderControlRight = document.querySelector('.services__columnbox__slider-control--rigth')

let defaultMarginRight = 2.5
let columnWidthPlusRightMargin = 32.5

let slideStep = 0
let slideShiftValue = defaultMarginRight
let slideShift = `0 2.5% 0 ${+slideShiftValue.toFixed(1)}%`

let slideRight = () => {
  if (slideStep < sliderItems.length-3) {
    slideShiftValue -= columnWidthPlusRightMargin;
    slideShift = `0 2.5% 0 ${+slideShiftValue.toFixed(1)}%`
    slideStep++
    sliderItems[0].style.margin = slideShift
  } else {
      slideStep = 0
      slideShiftValue = defaultMarginRight
      slideShift = `0 2.5%`
      sliderItems[0].style.margin = slideShift
  }
}

let slideLeft = () => {
  if (slideStep === 0) {
    slideShiftValue -= (columnWidthPlusRightMargin*(sliderItems.length-3))
    slideShift = `0 2.5% 0 ${+slideShiftValue.toFixed(1)}%`
    slideStep = (sliderItems.length-3)
    sliderItems[0].style.margin = slideShift
  } else if (slideStep > 0) {
      slideShiftValue += columnWidthPlusRightMargin
      slideShift = `0 2.5% 0 ${+slideShiftValue.toFixed(1)}%`
      slideStep--
      sliderItems[0].style.margin = slideShift
  }
}

let resetMargin = () => {
  if (window.innerWidth <= 768) {
    sliderItems[0].style.margin = ''
  }
}

sliderControlRight.addEventListener('click', slideRight)
sliderControlLeft.addEventListener('click', slideLeft)

//Swipe
let touchstartX = 0
let touchendX = 0

let handleGesture = () => {
  if (touchendX > touchstartX) {
    slideLeft()
  }
    
  if (touchendX < touchstartX) {
    slideRight()
  }
}

sliderWrapper.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX
}, false)

sliderWrapper.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX
    handleGesture()
}, false)

window.addEventListener('resize', resetMargin)