// Smooth scrolling functionality using JavaScript
document.querySelectorAll(".anchor").forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        console.log('this scroll', e);
        e.preventDefault();
        const targetElement =
            document.querySelector(this.getAttribute('href'));
        console.log('this target', targetElement);
        window.scrollTo({
            top: targetElement.offsetTop - 150,
            behavior: 'smooth'
        });
    });
});
