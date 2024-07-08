function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}


document.addEventListener('DOMContentLoaded', function () {
    const figures = document.querySelectorAll('.work .projects article figure');

    figures.forEach(figure => {
        figure.addEventListener('click', function () {
            this.classList.toggle('enlarged');
        });

        figure.addEventListener('mouseleave', function () {
            if (this.classList.contains('enlarged')) {
                this.classList.remove('enlarged');
            }
        });
    });
});
