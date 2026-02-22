document.addEventListener('DOMContentLoaded', () => {
  // set year
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  // basic nav toggle for small screens
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  toggle?.addEventListener('click', () => {
    if (!nav) return; nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  });

  // call button quick action
  document.getElementById('callBtn')?.addEventListener('click', () => {
    window.location.href = 'tel:+15551234567';
  });

  // IntersectionObserver for scroll-triggered animations
  try {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12});

    document.querySelectorAll('.anim-hidden').forEach((el, i) => {
      // optional staggering via classes if desired
      const idx = i % 4;
      if (idx === 1) el.classList.add('stagger-1');
      if (idx === 2) el.classList.add('stagger-2');
      if (idx === 3) el.classList.add('stagger-3');
      io.observe(el);
    });
  } catch (e) {
    // intersection observer not supported — reveal elements
    document.querySelectorAll('.anim-hidden').forEach(el => el.classList.add('in-view'));
  }
});