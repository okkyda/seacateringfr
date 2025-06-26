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

