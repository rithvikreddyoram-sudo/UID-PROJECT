
let hamburger = document.getElementById('hamburger');
let navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
});

let navItems = document.querySelectorAll('.nav-link');
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function() {
        navLinks.classList.remove('open');
    });
}

let header = document.getElementById('header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
        header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.45)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
    }
});

let toast = document.getElementById('cartToast');
let toastTimer;

function addToCart(btn) {

    clearTimeout(toastTimer);


    toast.classList.add('show');

    let originalText = btn.textContent;
    btn.textContent = 'Added!';
    btn.style.backgroundColor = '#2a9d8f';

    toastTimer = setTimeout(function() {
        toast.classList.remove('show');
        btn.textContent = originalText;
        btn.style.backgroundColor = '';
    }, 2200);
}

let anchorLinks = document.querySelectorAll('a[href^="#"]');

for (let j = 0; j < anchorLinks.length; j++) {
    anchorLinks[j].addEventListener('click', function(e) {
        let targetId = this.getAttribute('href');
        let targetEl = document.querySelector(targetId);

        if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

function handleSubscribe(e) {
    e.preventDefault();
    let emailInput = document.getElementById('emailInput');
    let val = emailInput.value.trim();
    if (val === '') return;

    clearTimeout(toastTimer);
    toast.textContent = '&#10003; Subscribed successfully!';
    toast.classList.add('show');

    emailInput.value = '';

    toastTimer = setTimeout(function() {
        toast.classList.remove('show');
        toast.textContent = '&#10003; Added to cart!';
    }, 2500);
}

let sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY + 80;

    for (let k = 0; k < sections.length; k++) {
        let sec = sections[k];
        let secTop = sec.offsetTop;
        let secHeight = sec.offsetHeight;

        if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
            
            for (let m = 0; m < navItems.length; m++) {
                navItems[m].classList.remove('active');
            }
            
            let match = document.querySelector('.nav-link[href="#' + sec.id + '"]');
            if (match) {
                match.classList.add('active');
            }
        }
    }
});
