(function () {
  'use strict';

  /* =========================================
     1. HELPER FUNCTIONS
     ========================================= */
  function openInNewTab(url) {
    if (!url) return false;
    window.open(url, '_blank', 'noopener');
  }

  /* =========================================
     2. SERVICE CARDS LOGIC
     ========================================= */
  function initServiceCards() {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
      // Accessibility attributes
      if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
      if (!card.getAttribute('role')) card.setAttribute('role', 'button');

      function onClick(e) {
        if (e) e.preventDefault();
        const url = card.getAttribute('data-href');
        if (!url) {
          alert('Link अभी उपलब्ध नहीं है।');
          return;
        }
        openInNewTab(url);
      }

      function onKey(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }

      // Remove old listeners to prevent duplicates
      card.removeEventListener('click', onClick);
      card.addEventListener('click', onClick);
      card.addEventListener('keydown', onKey);
    });
  }

  /* =========================================
     3. SEARCH FUNCTIONALITY (NEW)
     ========================================= */
  function initSearch() {
    const searchInput = document.getElementById('site-search');
    const clearBtn = document.getElementById('search-clear');
    
    if (!searchInput) return;

    searchInput.addEventListener('input', function (e) {
      const val = e.target.value.toLowerCase();
      
      // Filter Services
      const services = document.querySelectorAll('.service-card');
      services.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(val) ? 'flex' : 'none';
      });

      // Filter Forms
      const forms = document.querySelectorAll('.form-item');
      forms.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(val) ? 'flex' : 'none';
      });
    });

    // Clear Button Logic
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input')); // Trigger filter reset
      });
    }
  }

  /* =========================================
     4. VIDEO MODAL & 3D TILT
     ========================================= */
  function initVideoModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalIframe');
    const closeBtn = document.getElementById('modalClose');

    if (!modal) return;

    function closeVideo() {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      iframe.src = ''; // Stop video
    }

    if (closeBtn) closeBtn.addEventListener('click', closeVideo);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeVideo();
    });

    // Open Video on Click
    document.querySelectorAll('.train-card-inner').forEach(card => {
      card.addEventListener('click', function () {
        const vid = this.getAttribute('data-video');
        if (vid) {
          iframe.src = 'https://www.youtube-nocookie.com/embed/' + vid + '?autoplay=1';
          modal.classList.add('show');
          modal.setAttribute('aria-hidden', 'false');
        }
      });

      // 3D Tilt Effect
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        // Sensitivity control
        const rotateY = (x - 0.5) * 10;
        const rotateX = (0.5 - y) * 10;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* =========================================
     5. PDF / NOTICE HANDLERS (Global)
     ========================================= */
  // Window functions for onclick="" in HTML
  window.openNotice = function (btn) {
    const notice = btn.closest('.notice');
    const link = notice ? notice.getAttribute('data-drive') : null;
    
    if (link) {
      window.open(link, '_blank');
    } else {
      alert("यह नोटिस अभी अपलोड नहीं हुआ है।");
    }
  };

  window.openForm = function (btn) {
    alert("फ़ॉर्म डाउनलोड शुरू हो रहा है... (Demo)");
  };

  // PDF Modal Close
  const pdfClose = document.getElementById('pdfModalClose');
  if (pdfClose) {
    pdfClose.addEventListener('click', () => {
      document.getElementById('pdfModal').style.display = 'none';
    });
  }

  /* =========================================
     INITIALIZE ALL
     ========================================= */
  document.addEventListener('DOMContentLoaded', () => {
    initServiceCards();
    initSearch();
    initVideoModal();
  });

})();
