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
});
