document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      // Collapse all others
      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('active');
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        el.querySelector('.icon').textContent = '+';
      });

      // Expand this one if it was not already open
      if (!expanded) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        btn.querySelector('.icon').textContent = '−';
      }
    });
  });