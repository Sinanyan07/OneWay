document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('shopsContainer');
    const scrollLeftBtn = document.getElementById('btn_1scroll');
    const scrollRightBtn = document.getElementById('btn_2scroll');
    const scrollCenterBtn = document.getElementById('btn_3scroll');

    // Функция для обновления класса активной кнопки при прокрутке контейнера
    function updateActiveButton() {
        const containerWidth = container.offsetWidth;
        const scrollLeft = container.scrollLeft;
        const scrollRight = container.scrollWidth - scrollLeft - containerWidth;
        
        if (scrollLeft === 0) {
            scrollLeftBtn.classList.add('activ_scroll');
            scrollRightBtn.classList.remove('activ_scroll');
            scrollCenterBtn.classList.remove('activ_scroll');
        } else if (scrollRight === 0) {
            scrollRightBtn.classList.add('activ_scroll');
            scrollLeftBtn.classList.remove('activ_scroll');
            scrollCenterBtn.classList.remove('activ_scroll');
        } else {
            scrollCenterBtn.classList.add('activ_scroll');
            scrollLeftBtn.classList.remove('activ_scroll');
            scrollRightBtn.classList.remove('activ_scroll');
        }
    }

    // Обработчик события scroll контейнера
    container.addEventListener('scroll', updateActiveButton);

    // Обработчики событий клика по кнопкам
    scrollLeftBtn.addEventListener('click', function () {
        const scrollAmount = container.scrollLeft - window.innerWidth;
        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', function () {
        const scrollAmount = container.scrollLeft + window.innerWidth;
        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollCenterBtn.addEventListener('click', function () {
        const scrollAmount = container.scrollWidth / 2 - window.innerWidth / 2;
        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Инициализация класса активной кнопки при загрузке
    updateActiveButton();
});