document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        document.body.style.background = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.background = "white";
        document.body.style.color = "#333";
    }
});
