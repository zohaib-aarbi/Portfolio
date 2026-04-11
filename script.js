// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // SMOOTH SCROLL
    // =========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // =========================
    // BUTTON CLICK EFFECT
    // =========================
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.transform = "scale(0.95)";
            setTimeout(() => btn.style.transform = "scale(1)", 100);
        });
    });

    // =========================
    // THEME SWITCHER (FIXED)
    // =========================
    const themeBtn = document.getElementById("themeToggle");

    const themes = [
        "theme-purple",
        "theme-green",
        "theme-orange",
        "theme-light",
        "root"
    ];

    let currentTheme = 0;

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {

            // Remove ALL themes first (important)
            document.body.classList.remove(
                "theme-purple",
                "theme-green",
                "theme-orange",
                "theme-light",
                "root"
            );

            // Apply next theme
            document.body.classList.add(themes[currentTheme]);

            // Move to next theme
            currentTheme = (currentTheme + 1) % themes.length;
        });
    }

});