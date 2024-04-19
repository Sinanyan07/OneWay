{// Shops page Functions

  const countryAll = document.querySelector('.countryAll');
  const whitGlob = document.querySelector('.whiteGl');
  const grinGlob = document.querySelector('.greenGl');


  const buttons = document.querySelectorAll('.allCountry');
  buttons[0].style.backgroundColor = '#1DA99D';
  buttons[0].style.color = '#FBFBFB';

  let previousButton = null;
  previousButton = buttons[0];

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (previousButton) {
        previousButton.style.backgroundColor = '';
        previousButton.style.color = '';
        grinGlob.style.display = "none";
        whitGlob.style.display = "block";
      }
      button.style.backgroundColor = '#1DA99D';
      button.style.color = '#FBFBFB';
      grinGlob.style.display = "block";
      whitGlob.style.display = "none";

      previousButton = button;
    });

  });
  const brands = document.querySelectorAll('.mainDiv');
  countryAll.addEventListener('click', function () {
    whitGlob.style.display = "block";
    grinGlob.style.display = "none";
    brands.forEach((item) => {
      item.style.display = "block";
    })
  })


  function toFindCategory(id) {
    brands.forEach((item) => {
      if (item.getAttribute('id') === id) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

}



   // for input box shadow
   const boxDv = document.querySelector('.searchInp');

   function BoxShad() {
     boxDv.style.boxShadow = '0px 0px 10px 0px #1DA99D80';
   }
   
   window.addEventListener("click", function (event) {
     if (!boxDv.contains(event.target)) {
       boxDv.style.boxShadow = ' 0px 0px 8px 0px #00000033'
     }
   });

