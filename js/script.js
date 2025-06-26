const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#nav-hamburger').onclick =()=> {
    navbarNav.classList.toggle('active')
}

const hamburger = document.querySelector('#nav-hamburger')

document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});

 // Modal logic
        document.querySelectorAll('.btn-details').forEach(btn => {
            btn.addEventListener('click', function() {
                document.getElementById(this.dataset.modal).classList.add('active');
            });
        });
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', function() {
                this.closest('.modal').classList.remove('active');
            });
        });
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) modal.classList.remove('active');
            });
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === "Escape") {
                document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
            }
        });

 // Minimal validation for at least one meal type and one day
        document.getElementById('subscriptionForm').addEventListener('submit', function(e) {
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
                // Optionally, show a success message or handle form submission here
            }
        });

       // Harga per plan
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

    // Modal logic
    const form = document.getElementById('subscriptionForm');
    const modal = document.getElementById('confirmModal');
    const btnYakin = document.getElementById('btnYakin');
    const btnKembali = document.getElementById('btnKembali');

    form.addEventListener('submit', function(e) {
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
            e.preventDefault(); // Tahan submit
            modal.classList.add('active');
        }
    });

    btnKembali.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    btnYakin.addEventListener('click', function() {
        modal.classList.remove('active');
        form.submit(); // Submit form secara normal
    });

    // Optional: close modal on ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });

