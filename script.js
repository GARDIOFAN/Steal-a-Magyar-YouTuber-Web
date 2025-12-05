// script.js (A kód megegyezik a korábbival, de most már az új dizájnnal dolgozik)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Modál Kezelés (Felugró ablak logika)
    // ... (A logikusan van beállítva a modál megnyitására/bezárására) ...
    const modal = document.getElementById('auth-modal');
    const loginBtn = document.getElementById('login-btn');
    const closeBtn = document.querySelector('.close-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    loginBtn.onclick = function() { modal.style.display = 'block'; }
    closeBtn.onclick = function() { modal.style.display = 'none'; }
    window.onclick = function(event) { if (event.target == modal) { modal.style.display = 'none'; } }
    
    showRegister.onclick = function(e) { e.preventDefault(); loginForm.style.display = 'none'; registerForm.style.display = 'block'; }
    showLogin.onclick = function(e) { e.preventDefault(); registerForm.style.display = 'none'; loginForm.style.display = 'block'; }


    // 2. Sima Görgés (A navigációhoz)
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

    // 3. FIGYELMEZTETÉS A BACKEND-ről
    document.querySelectorAll('.auth-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('❗ HIÁNYZÓ FUNKCIÓ ❗\n\n A fiókkezeléshez (Bejelentkezés/Regisztráció, profilkép, adatok mentése) szükség van a **Firebase (Backend)** integrációjára. Ezt a gombot a következő lépésben fogjuk működővé tenni!');
        });
    });
});
