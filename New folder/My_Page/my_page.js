
// <!-- AddOrderPageView1920 sect start -->
const buttons = document.querySelectorAll('.allCountry');
buttons[0].style.backgroundColor = '#1DA99D';

let previousButton = null;
previousButton = buttons[0];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (previousButton) {
            previousButton.style.backgroundColor = '';
            button.style.backgroundColor = '#1DA99D';
            previousButton = button;
        }
    })
})
// <!-- AddOrderPageView1920 sect end -->