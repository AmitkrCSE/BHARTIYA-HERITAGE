// JavaScript for hover effect on image map areas
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Jharkhand Heritage!");

    const areas = document.querySelectorAll('.map-area');

    areas.forEach(area => {
        area.addEventListener('mouseover', function() {
            area.style.border = "2px solid #5caa55"; // Highlight border
            area.style.backgroundColor = "rgba(92, 170, 85, 0.3)"; // Highlight background
        });

        area.addEventListener('mouseout', function() {
            area.style.border = "none"; // Reset border
            area.style.backgroundColor = "transparent"; // Reset background
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Jharkhand Heritage!");
});


