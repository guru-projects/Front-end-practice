// const left = document.querySelector('.left');
// const right = document.querySelector('.right');
// const slider = document.querySelector('.slider');
// const images = document.querySelectorAll('.image').length;
// const buttonContainer = document.querySelector('.bottom');

// let slideStart = 1;

// const goToSlide = (index) => {
//     slider.style.transform = `translateX(-${(index-1) * 820}px)`;
//     slideStart = index;
//     updateActiveButton(index);
// }
// right.addEventListener('click', () => {
//     slideStart < images ? goToSlide(slideStart + 1) : goToSlide(1);
// })
// left.addEventListener('click', () => {
//     slideStart > 1 ? goToSlide(slideStart - 1) : goToSlide(images);
// })


// for(let i=1;i<=images;i++) {
//     const button = document.createElement('div');
//     button.classList.add('button');
//     button.setAttribute('data-slide',i);
    
//     button.addEventListener('click', () => {
//         goToSlide(i);
//     })
//     buttonContainer.appendChild(button);
// }

// const updateActiveButton = (index) => {
//     document.querySelectorAll('.button').forEach(button => {
//         button.classList.remove('active');
//     }) 
//     document.querySelector(`.button[data-slide='${index}']`).classList.add('active');
// }
// updateActiveButton(1)

document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    const slider = document.querySelector('.slider');
    const totalImages = document.querySelectorAll('.image').length;
    const buttonContainer = document.querySelector('.bottom');

    let currentSlide = 1;

    // Navigate to specific slide
    const navigateToSlide = (slideIndex) => {
        slider.style.transform = `translateX(-${(slideIndex - 1) * 820}px)`;
        currentSlide = slideIndex;
        updateActiveIndicator(slideIndex);
    };

    // Event listeners for navigation arrows
    rightArrow.addEventListener('click', () => {
        const nextSlide = currentSlide < totalImages ? currentSlide + 1 : 1;
        navigateToSlide(nextSlide);
    });

    leftArrow.addEventListener('click', () => {
        const prevSlide = currentSlide > 1 ? currentSlide - 1 : totalImages;
        navigateToSlide(prevSlide);
    });

    // Create navigation indicators
    const createIndicators = () => {
        for (let i = 1; i <= totalImages; i++) {
            const button = document.createElement('div');
            button.classList.add('button');
            button.dataset.slide = i;

            button.addEventListener('click', () => navigateToSlide(i));
            buttonContainer.appendChild(button);
        }
    };

    // Update active indicator style
    const updateActiveIndicator = (index) => {
        document.querySelectorAll('.button').forEach(button => {
            button.classList.toggle('active', button.dataset.slide == index);
        });
    };

    // Initialize the slider
    createIndicators();
    navigateToSlide(currentSlide);
});
