let slider = document.querySelector(".services__columnbox");
let sliderItems = slider.querySelectorAll(".services__columnbox__column");
let sliderControlLeft = slider.querySelector(".services__columnbox__slider-control--left");
let sliderControlRight = slider.querySelector(".services__columnbox__slider-control--rigth");
let slideStep = 0;
let slideShiftValue = 2.5;
let slideShift = `0 2.5% 0 ${+slideShiftValue.toFixed(1)}%`;

let items = [];
sliderItems.forEach ((item, index) => items.push(index));

sliderControlRight.onclick = () => {
  if (window.innerWidth >= 769) {
        
    if (slideStep < items.length-3) {
      slideShiftValue -= 32.5;
      slideShift = `0 2.5% 0 ${+slideShiftValue.toFixed(1)}%`;
      slideStep++;
      sliderItems[0].style.margin = slideShift;

    } else {
        slideStep = 0;
        slideShiftValue = 2.5;
        slideShift = `0 2.5% 0 2.5%`;
        sliderItems[0].style.margin = slideShift;
    }
  }
}

sliderControlLeft.onclick = () => {
    if (window.innerWidth >= 769) {
      
      if (slideStep === 0) {
        slideShiftValue -= (32.5*(items.length-3));
        slideShift = `0 2.5% 0 ${+slideShiftValue.toFixed(1)}%`;
        slideStep = (items.length-3);
        sliderItems[0].style.margin = slideShift;

      } else if (slideStep > 0) {
            slideShiftValue += 32.5;
            slideShift = `0 2.5% 0 ${+slideShiftValue.toFixed(1)}%`;
            slideStep--;
            sliderItems[0].style.margin = slideShift;
      }
    } 
}