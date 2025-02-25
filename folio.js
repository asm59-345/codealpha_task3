document.addEventListener('DOMContentLoaded', () => {
   
    const navLinks = document.querySelectorAll('#nav-cont a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const nav = document.getElementById('nav-cont');
    const headerHeight = document.getElementById('main-heading').offsetHeight;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > headerHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    const contactForm = document.querySelector('#Contact_Us form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.querySelector('textarea[name="message"]').value.trim();
        

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        

        alert('Message sent successfully!');
        contactForm.reset();
    });
    const profileImg = document.getElementById('profile');
    profileImg.addEventListener('mouseover', () => {
        profileImg.style.transform = 'scale(1.1)';
        profileImg.style.transition = 'transform 0.3s ease';
    });
    profileImg.addEventListener('mouseout', () => {
        profileImg.style.transform = 'scale(1)';
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const sections = document.querySelectorAll('.sec');
    const navItems = document.querySelectorAll('#nav-cont div');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            const link = item.querySelector('a');
            if (link.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
});
