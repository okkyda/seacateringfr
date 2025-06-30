// Navbar Hamburger Toggle
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#nav-hamburger');

hamburger.onclick = () => {
     e.preventDefault();
    navbarNav.classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', function() {
    const navbarNav = document.querySelector('.navbar-nav');
    const hamburger = document.querySelector('#nav-hamburger');

    if (hamburger && navbarNav) {
        hamburger.onclick = function(e) {
            e.preventDefault();
            navbarNav.classList.toggle('active');
        };
    }

    // Optional: close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
            navbarNav.classList.remove('active');
        }
    });
});

// Modal Logic
document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', function () {
        document.getElementById(this.dataset.modal).classList.add('active');
    });
});

document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', function () {
        this.closest('.modal').classList.remove('active');
    });
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function (e) {
        if (e.target === modal) modal.classList.remove('active');
    });
});

// Escape key to close modals
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
    }
});


// Register Logic



// Login Logic

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const formMessage = document.getElementById('form-message');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            let users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                formMessage.textContent = "Login berhasil!";
                formMessage.style.display = "block";
                // Redirect atau logic setelah login
            } else {
                formMessage.textContent = "Username atau password salah!";
                formMessage.style.display = "block";
            }

              // Tampilkan pop up sukses
            alert("Registrasi berhasil!");
            // Redirect ke halaman login
            window.location.href = "index.html";
        });
    }
});
  
