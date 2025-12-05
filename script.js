// script.js

document.addEventListener('DOMContentLoaded', () => {
    // FŐ MODÁL KEZELÉSE (Bejelentkezés/Regisztráció űrlap)
    const modal = document.getElementById('auth-modal');
    const loginBtn = document.getElementById('login-btn');
    const closeBtn = document.querySelector('.close-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    // HIBAÜZENET MODÁL KEZELÉSE
    const serviceDownModal = document.getElementById('service-down-modal');
    const closeServiceBtnX = document.querySelector('.close-btn-service');
    const closeServiceBtn = document.getElementById('close-service-btn');

    // Modál megnyitása a nav gombbal
    loginBtn.onclick = function() {
        modal.style.display = 'block';
    }

    // Modál bezárása (X gomb és kattintás kívül)
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Űrlap váltása (Regisztráció / Bejelentkezés)
    showRegister.onclick = function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
    showLogin.onclick = function(e) {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
    
    // Hibaüzenet modál bezárása
    closeServiceBtnX.onclick = function() {
        serviceDownModal.style.display = 'none';
    }
    closeServiceBtn.onclick = function() {
        serviceDownModal.style.display = 'none';
    }

    // A Bejelentkezés/Regisztráció Gombok FELADATA: Megjeleníteni az Új Hiba Modált
    document.querySelectorAll('.auth-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // 1. Bezárjuk a nagy bejelentkezési modált
            document.getElementById('auth-modal').style.display = 'none';

            // 2. Megnyitjuk a kis "Szolgáltatás leállt" modált
            serviceDownModal.style.display = 'block';
        });
    });
    
    // Sima Görgés (A navigációhoz)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.id !== 'show-register' && this.id !== 'show-login') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
