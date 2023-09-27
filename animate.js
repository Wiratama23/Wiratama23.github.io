// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add or remove Animate.css classes based on visibility
function handleAnimation() {
    const element = document.getElementById('home');
    const animatedText = document.getElementById('animatedText');

    if (isInViewport(element)) {
        // Add the 'animate__lightSpeedInLeft' class when the section is in the viewport
        animatedText.classList.add('animate__lightSpeedInLeft');
        animatedText.classList.remove('animate__lightSpeedOutRight');
    } else {
        // Add the 'animate__lightSpeedOutRight' class when the section is out of the viewport
        animatedText.classList.remove('animate__lightSpeedInLeft');
        animatedText.classList.add('animate__lightSpeedOutRight');
    }
}

// Attach the handleAnimation function to the scroll event
window.addEventListener('scroll', handleAnimation);

// Initial check to set the initial animation class
handleAnimation();