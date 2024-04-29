document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('shopsContainer');
    const scrollLeftBtn = document.getElementById('btn_1scroll');
    const scrollRightBtn = document.getElementById('btn_2scroll');
    const scrollCenterBtn = document.getElementById('btn_3scroll');

    scrollLeftBtn.addEventListener('click', function () {
        const scrollAmount = container.scrollLeft - window.innerWidth; 
        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        scrollLeftBtn.classList.add('activ_scroll');
        scrollRightBtn.classList.remove('activ_scroll');
        scrollCenterBtn.classList.remove('activ_scroll');
    });

    scrollRightBtn.addEventListener('click', function () {
        const scrollAmount = container.scrollLeft + window.innerWidth; 
        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });

        scrollRightBtn.classList.add('activ_scroll');
        scrollLeftBtn.classList.remove('activ_scroll');
        scrollCenterBtn.classList.remove('activ_scroll');
    });

    scrollCenterBtn.addEventListener('click', function () {
        const scrollAmount = container.scrollWidth / 2 - window.innerWidth / 2; 
        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });

        scrollCenterBtn.classList.add('activ_scroll');
        scrollLeftBtn.classList.remove('activ_scroll');
        scrollRightBtn.classList.remove('activ_scroll');
    });
});
