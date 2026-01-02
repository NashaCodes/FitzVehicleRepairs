document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const isOpen = nav.style.display === 'flex';
      nav.style.display = isOpen ? 'none' : 'flex';
    });
  }

  // Set current year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Slideshow functionality
  showSlides(slideIndex);
  setInterval(() => {
    changeSlide(1);
  }, 5000); // Auto-advance every 5 seconds

  // Make the contact form open the user's email client with a prefilled mailto
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').trim();
      const contact = (data.get('contact') || '').trim();
      const message = (data.get('message') || '').trim();
      const recipient = 'geraldmushunje@gmail.com';

      const subject = `Quote request from ${name || contact || 'Website'}`;
      const body = `Name: ${name}\r\nContact: ${contact}\r\n\r\nMessage:\r\n${message}`;

      const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Inform the user and open mail client
      if(formMessage) formMessage.textContent = 'Opening your email client...';
      // Open mail client
      window.location.href = mailto;

      // optionally reset the form after a short delay
      setTimeout(()=>{
        if(formMessage) formMessage.textContent = '';
        form.reset();
      }, 1200);
    });
  }

  // FAB: separate WhatsApp link and Email button
  const fabEmailBtn = document.getElementById('fabEmailBtn');
  const RECIPIENT = 'geraldmushunje@gmail.com';

  if(fabEmailBtn){
    fabEmailBtn.addEventListener('click', ()=>{
      const subject = 'Website enquiry';
      const body = '';
      const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  }

  // Slideshow controls
  const prevBtns = document.querySelectorAll('.prev');
  const nextBtns = document.querySelectorAll('.next');
  const dots = document.querySelectorAll('.dot');

  prevBtns.forEach(btn => btn.addEventListener('click', () => changeSlide(-1)));
  nextBtns.forEach(btn => btn.addEventListener('click', () => changeSlide(1)));
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index + 1));
  });
});

// Slideshow functions
let slideIndex = 1;
let slideIndex2 = 1;

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName('slide');
  const dots = document.getElementsByClassName('dot');
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('fade');
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  
  slides[slideIndex - 1].style.display = 'block';
  slides[slideIndex - 1].classList.add('fade');
  dots[slideIndex - 1].classList.add('active');
}

function changeSlide2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  const slides = document.getElementsByClassName('slide-2');
  const dots = document.getElementsByClassName('dot-2');
  
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('fade-2');
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  
  slides[slideIndex2 - 1].style.display = 'block';
  slides[slideIndex2 - 1].classList.add('fade-2');
  dots[slideIndex2 - 1].classList.add('active');
}
