// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Modál Kezelés (Felugró ablak logika)
    const modal = document.getElementById('auth-modal');
    const loginBtn = document.getElementById('login-btn');
    const closeBtn = document.querySelector('.close-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

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

    // 2. Sima Görgés (A navigációhoz)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Nem zavarja a modál váltó linkeket
            if (this.id !== 'show-register' && this.id !== 'show-login') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. FIGYELMEZTETÉS A BACKEND-ről
    document.querySelectorAll('.auth-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('A fiókkezelés funkcióhoz (Bejelentkezés/Regisztráció) a szerveroldali kód (Firebase) integrációja szükséges!');
        });
    });
});
