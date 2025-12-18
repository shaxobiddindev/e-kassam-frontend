import {showErrorModal, showSuccessModal} from './notificationModal.js';


const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");
const navClose = document.getElementById("navClose");

function openMenu() {
    navClose.style.display = "block";
    navLinks.classList.add("active-menu");
    navOverlay.classList.add("active");
    document.body.classList.add("menu-open");
}

function closeMenu() {
    navLinks.classList.remove("active-menu");
    navOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
}

function showModal() {
    showErrorModal("Kechirasiz bu hunksiya hali ishlab chiqlmagan!");
}

document.querySelector('.show__error').addEventListener('click', showModal);
burger.addEventListener("click", openMenu);
navClose.addEventListener("click", closeMenu);
navOverlay.addEventListener("click", closeMenu);