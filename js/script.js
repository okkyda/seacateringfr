// Navbar Hamburger Toggle
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#nav-hamburger');

hamburger.onclick = () => {
    navbarNav.classList.toggle('active');
};

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
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

// Form Validation for Subscription Form
document.getElementById('subscriptionForm').addEventListener('submit', function (e) {
    const mealTypes = document.querySelectorAll('input[name="mealType"]:checked');
    const days = document.querySelectorAll('input[name="days"]:checked');
    let valid = true;
    let msg = '';

    if (mealTypes.length === 0) {
        valid = false;
        msg += 'Please select at least one meal type.<br>';
    }
    if (days.length === 0) {
        valid = false;
        msg += 'Please select at least one delivery day.<br>';
    }

    if (!valid) {
        e.preventDefault();
        document.getElementById('form-message').innerHTML = msg;
        document.getElementById('form-message').style.display = 'block';
    } else {
        document.getElementById('form-message').style.display = 'none';
    }
});

// Calculate Total Price based on Plan, Meal Types, and Days
const planPrices = {
    diet: 30000,
    protein: 40000,
    royal: 60000
};

function formatRupiah(angka) {
    return 'Rp' + angka.toLocaleString('id-ID');
}

function calculateTotalPrice() {
    const plan = document.getElementById('plan').value;
    const planPrice = planPrices[plan] || 0;
    const mealTypes = document.querySelectorAll('input[name="mealType"]:checked').length;
    const days = document.querySelectorAll('input[name="days"]:checked').length;

    if (planPrice && mealTypes && days) {
        const total = planPrice * mealTypes * days * 4.3;
        document.getElementById('form-message').innerHTML = 'Total Price: <b>' + formatRupiah(total) + '</b>';
        document.getElementById('form-message').style.display = 'block';
    } else {
        document.getElementById('form-message').innerHTML = '';
        document.getElementById('form-message').style.display = 'none';
    }
}

document.getElementById('plan').addEventListener('change', calculateTotalPrice);
document.querySelectorAll('input[name="mealType"]').forEach(cb => cb.addEventListener('change', calculateTotalPrice));
document.querySelectorAll('input[name="days"]').forEach(cb => cb.addEventListener('change', calculateTotalPrice));

// Confirm Modal Logic
const form = document.getElementById('subscriptionForm');
const modal = document.getElementById('confirmModal');
const btnYakin = document.getElementById('btnYakin');
const btnKembali = document.getElementById('btnKembali');

form.addEventListener('submit', function (e) {
    const mealTypes = document.querySelectorAll('input[name="mealType"]:checked');
    const days = document.querySelectorAll('input[name="days"]:checked');
    let valid = true;
    let msg = '';

    if (mealTypes.length === 0) {
        valid = false;
        msg += 'Please select at least one meal type.<br>';
    }
    if (days.length === 0) {
        valid = false;
        msg += 'Please select at least one delivery day.<br>';
    }

    if (!valid) {
        e.preventDefault();
        document.getElementById('form-message').innerHTML = msg;
        document.getElementById('form-message').style.display = 'block';
    } else {
        e.preventDefault();
        modal.classList.add('active');
    }
});

btnKembali.addEventListener('click', function () {
    modal.classList.remove('active');
});

btnYakin.addEventListener('click', function () {
    modal.classList.remove('active');
    form.submit();
});

// Star Rating
const stars = document.querySelectorAll('.stars input[type="radio"]');
let ratingValue = 0;

stars.forEach(star => {
    star.addEventListener('click', function () {
        ratingValue = this.value;
        updateStars(ratingValue);
    });
});

function updateStars(rating) {
    stars.forEach(star => {
        if (star.value <= rating) {
            star.nextElementSibling.style.color = "#FFD600"; // Emas untuk bintang terpilih
        } else {
            star.nextElementSibling.style.color = "#ddd"; // Warna abu-abu untuk bintang yang tidak dipilih
        }
    });
}

// Handle form submission for review
document.addEventListener('DOMContentLoaded', function () {
    const reviewForm = document.getElementById('loginForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const city = document.getElementById('city').value;
            const review = document.getElementById('review').value;
            const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : null;

            if (!username || !city || !review || !rating) {
                console.log('Please fill out all fields and select a rating.');
                return;
            }

            const reviewData = { username, city, review, rating };
            let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
            reviews.push(reviewData);
            localStorage.setItem('reviews', JSON.stringify(reviews));

            document.getElementById('confirmationModal').classList.add('active');
            console.log('Review data:', reviewData);
        });
    } else {
        console.error('Form with id "loginForm" not found');
    }

    // Close the modal when the "Close" button is clicked
    const closeModalBtn = document.getElementById('closeModal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function () {
            document.getElementById('confirmationModal').classList.remove('active');
        });
    }
});
