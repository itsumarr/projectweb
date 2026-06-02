'use strict'

document.addEventListener("DOMContentLoaded", function() {
    console.log('Скрипт отработал корректно');
    
    // Замените welcome__button на welcome__explore
    const welcomeButtonModal = document.querySelector(".welcome__explore");
    const modalApplication = document.querySelector(".applications");

    if (welcomeButtonModal && modalApplication) {
        welcomeButtonModal.addEventListener("click", function(event) {
            modalApplication.removeAttribute("hidden");
        });
    }

    window.addEventListener("click", function(event) {
        if (event.target === modalApplication) {
            modalApplication.setAttribute("hidden", true);
        }
    });

    const closeModalButton = document.querySelector(".application__close");

    if (closeModalButton && modalApplication) {
        closeModalButton.addEventListener("click", function(event) {
            modalApplication.setAttribute("hidden", true);
        });
    }
});