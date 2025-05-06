document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    if (toggler) {
        const targetId = toggler.getAttribute('data-target');
        const target = document.querySelector(targetId);
        if (target) {
            toggler.addEventListener('click', function () {
                target.classList.toggle('show');
            });
        }
    }

    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    if (banner && acceptBtn && declineBtn) {
        banner.style.display = "flex";

        acceptBtn.addEventListener("click", function () {
            banner.style.display = "none";
        });

        declineBtn.addEventListener("click", function () {
            banner.style.display = "none";
        });
    }
});
