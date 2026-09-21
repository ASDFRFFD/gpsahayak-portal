// notifications.js
// Real-time announcement and notification system powered by Firebase Firestore
// Handles bell icon, unread badge counter, slide-over drawer, and live toast popups.

(function () {
  'use strict';
  console.log("notifications.js IIFE initialized!");

  const firebaseConfig = {
    apiKey: "AIzaSyACe8pL0vqD_2NqzhTNOi0VoTyJaYVTkbA",
    authDomain: "panchayat-sahahayk-portal-up.firebaseapp.com",
    projectId: "panchayat-sahahayk-portal-up",
    storageBucket: "panchayat-sahahayk-portal-up.firebasestorage.app",
    messagingSenderId: "709368114724",
    appId: "1:709368114724:web:208c828040f499060e72b1",
    measurementId: "G-5K1E4LZV20"
  };

  // Inject required CSS rules dynamically
  function injectNotificationStyles() {
    if (document.getElementById('notificationStyles')) return;

    const css = `
      /* Notification Bell Button */
      .notification-bell-container {
        position: relative;
        display: inline-flex;
        align-items: center;
        margin-right: 6px;
        z-index: 1000;
      }
      .notification-bell-btn {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        color: #1e293b;
        font-size: 18px;
        padding: 7px 12px;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.08);
        transition: all 0.2s ease;
        position: relative;
      }
      .notification-bell-btn:hover {
        background: #f8fafc;
        border-color: #cbd5e1;
        transform: translateY(-1px);
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      }
      .notification-bell-btn:active {
        transform: translateY(0);
      }
      
      /* Badge Counter with Pulse Animation */
      .notification-badge {
        position: absolute;
        top: -6px;
        right: -6px;
        background: #ef4444;
        color: #ffffff;
        font-size: 11px;
        font-weight: 800;
        min-width: 18px;
        height: 18px;
        border-radius: 999px;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 0 5px;
        box-shadow: 0 0 0 2px #ffffff;
        animation: pulseBadge 2s infinite;
      }
      @keyframes pulseBadge {
        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
        70% { transform: scale(1.08); box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); }
        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
      }

      /* Slide-over Backdrop */
      .notification-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.4);
        backdrop-filter: blur(4px);
        z-index: 99998;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .notification-backdrop.open {
        opacity: 1;
        pointer-events: auto;
      }

      /* Slide-over Drawer */
      .notification-drawer {
        position: fixed;
        top: 0;
        right: -420px;
        width: 100%;
        max-width: 400px;
        height: 100vh;
        background: #ffffff;
        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
        z-index: 99999;
        transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
      }
      .notification-drawer.open {
        transform: translateX(-420px);
      }

      /* Drawer Header */
      .notification-drawer-header {
        padding: 18px 20px;
        background: #0f766e;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      .notification-drawer-header h3 {
        margin: 0;
        font-size: 17px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 8px;
        color: #ffffff;
      }
      .notification-close-btn {
        background: rgba(255, 255, 255, 0.15);
        border: none;
        color: #ffffff;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
      }
      .notification-close-btn:hover {
        background: rgba(255, 255, 255, 0.3);
      }

      /* Drawer Body & Cards */
      .notification-drawer-body {
        padding: 16px;
        overflow-y: auto;
        flex-grow: 1;
        background: #f8fafc;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .notification-empty-state {
        text-align: center;
        padding: 40px 20px;
        color: #64748b;
      }
      .notification-empty-icon {
        font-size: 48px;
        margin-bottom: 12px;
      }

      .notification-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 14px;
        display: flex;
        gap: 12px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        transition: all 0.2s ease;
        position: relative;
        cursor: pointer;
      }
      .notification-card:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        border-color: #cbd5e1;
        transform: translateY(-1px);
      }
      .notification-card.unread {
        background: #f0fdf4;
        border-left: 4px solid #16a34a;
      }
      .notification-card-icon {
        font-size: 24px;
        line-height: 1;
        flex-shrink: 0;
      }
      .notification-card-content {
        flex-grow: 1;
      }
      .notification-card-title {
        font-weight: 700;
        font-size: 14px;
        color: #0f172a;
        margin-bottom: 4px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
      .notification-card-badge {
        font-size: 10px;
        background: #0f766e;
        color: #fff;
        padding: 2px 6px;
        border-radius: 4px;
        font-weight: 600;
        margin-left: 6px;
      }
      .notification-card-body {
        font-size: 13px;
        color: #334155;
        line-height: 1.4;
        margin-bottom: 6px;
      }
      .notification-card-time {
        font-size: 11px;
        color: #94a3b8;
        font-weight: 500;
      }
      .notification-card-link {
        display: inline-block;
        margin-top: 6px;
        font-size: 12px;
        font-weight: 700;
        color: #2563eb;
        text-decoration: none;
      }
      .notification-card-link:hover {
        text-decoration: underline;
      }

      /* Live Toast Popups Container */
      .notification-toast-container {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 100000;
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 360px;
        width: calc(100% - 48px);
        pointer-events: none;
      }
      .notification-toast {
        background: #ffffff;
        border-left: 5px solid #0f766e;
        border-radius: 10px;
        padding: 14px 16px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        display: flex;
        gap: 12px;
        align-items: flex-start;
        opacity: 0;
        transform: translateY(20px) scale(0.95);
        transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: auto;
        cursor: pointer;
      }
      .notification-toast.show {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    `;

    const style = document.createElement('style');
    style.id = 'notificationStyles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  // Inject Bell Icon, Drawer, and Toast markup into the DOM
  function injectNotificationMarkup() {
    injectNotificationStyles();

    if (document.getElementById('notificationBellBtn')) return;

    const bellHTML = `
      <div class="notification-bell-container" id="notificationBellContainer" title="सूचनाएं (Announcements)">
        <button class="notification-bell-btn" id="notificationBellBtn" aria-label="Notifications" type="button">
          🔔
          <span class="notification-badge" id="notificationBadge">0</span>
        </button>
      </div>
    `;

    // Try finding header utility areas
    let target = document.querySelector('.header-utils') || 
                 document.querySelector('.nic-top-right') || 
                 document.querySelector('.premium-header-container') ||
                 document.querySelector('.nic-header-container') ||
                 document.querySelector('.nav-inner');

    if (target) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = bellHTML.trim();
      target.insertBefore(tempDiv.firstElementChild, target.firstChild);
    } else {
      // Fallback injection into body header
      const header = document.querySelector('header');
      if (header) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = bellHTML.trim();
        header.appendChild(tempDiv.firstElementChild);
      }
    }

    // Inject Drawer and Toast Container into document.body if missing
    if (!document.getElementById('notificationDrawer')) {
      const drawerHTML = `
        <div class="notification-backdrop" id="notificationBackdrop"></div>
        <div class="notification-drawer" id="notificationDrawer">
          <div class="notification-drawer-header">
            <h3>🔔 सूचनाएं (Announcements)</h3>
            <button class="notification-close-btn" id="notificationCloseBtn" aria-label="Close" type="button">✕</button>
          </div>
          <div class="notification-drawer-body" id="notificationDrawerBody">
            <div class="notification-empty-state">
              <div class="notification-empty-icon">📭</div>
              <p>कोई नई सूचना नहीं है।</p>
            </div>
          </div>
        </div>
        <div class="notification-toast-container" id="notificationToastContainer"></div>
      `;

      const tempContainer = document.createElement('div');
      tempContainer.innerHTML = drawerHTML.trim();
      while (tempContainer.firstChild) {
        document.body.appendChild(tempContainer.firstChild);
      }
    }
  }

  // Format date helper
  function defFormatDate(date) {
    try {
      const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
      return date.toLocaleDateString('hi-IN', options);
    } catch (e) {
      return date.toDateString();
    }
  }

  // Show Toast Alert for live incoming notifications
  function showLiveToast(announcement) {
    const container = document.getElementById('notificationToastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    toast.innerHTML = `
      <div class="notification-card-icon">${announcement.icon || '📢'}</div>
      <div class="notification-card-content">
        <div class="notification-card-title">
          <span>${announcement.title || 'नई सूचना'}</span>
          ${announcement.badge ? `<span class="notification-card-badge">${announcement.badge}</span>` : ''}
        </div>
        <div class="notification-card-body">${announcement.body || ''}</div>
        ${announcement.url ? `<a href="${announcement.url}" target="_blank" class="notification-card-link">देखें ↗</a>` : ''}
      </div>
    `;

    if (announcement.url) {
      toast.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') {
          window.open(announcement.url, '_blank');
        }
      });
    }

    container.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.classList.add('show'), 100);

    // Auto dismiss after 6 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 350);
    }, 6000);
  }

  // Update Drawer contents
  function updateNotificationDrawer(announcements) {
    const drawerBody = document.getElementById('notificationDrawerBody');
    const badge = document.getElementById('notificationBadge');
    if (!drawerBody) return;

    if (announcements.length === 0) {
      drawerBody.innerHTML = `
        <div class="notification-empty-state">
          <div class="notification-empty-icon">📭</div>
          <p>कोई नई सूचना नहीं है।</p>
        </div>
      `;
      if (badge) badge.style.display = 'none';
      return;
    }

    const lastReadTime = parseInt(localStorage.getItem('gp_last_read_announcement') || '0', 10);
    let unreadCount = 0;

    let html = '';
    announcements.forEach((ann) => {
      const isUnread = ann.createdAt ? (ann.createdAt.getTime() > lastReadTime) : false;
      if (isUnread) unreadCount++;

      html += `
        <div class="notification-card ${isUnread ? 'unread' : ''}" data-id="${ann.id}" ${ann.url ? `onclick="window.open('${ann.url}', '_blank')"` : ''}>
          <div class="notification-card-icon">${ann.icon || '📢'}</div>
          <div class="notification-card-content">
            <div class="notification-card-title">
              <span>${ann.title}</span>
              ${ann.badge ? `<span class="notification-card-badge">${ann.badge}</span>` : ''}
            </div>
            <div class="notification-card-body">${ann.body}</div>
            <div class="notification-card-time">${defFormatDate(ann.createdAt)}</div>
            ${ann.url ? `<a href="${ann.url}" target="_blank" class="notification-card-link" onclick="event.stopPropagation()">खोले ↗</a>` : ''}
          </div>
        </div>
      `;
    });

    drawerBody.innerHTML = html;

    // Update Badge Count
    if (badge) {
      if (unreadCount > 0) {
        badge.innerText = unreadCount > 99 ? '99+' : unreadCount;
        badge.style.display = 'flex';
      } else {
        badge.style.display = 'none';
      }
    }
  }

  // Setup Event Listeners
  function setupEventListeners() {
    const bellBtn = document.getElementById('notificationBellBtn');
    const closeBtn = document.getElementById('notificationCloseBtn');
    const backdrop = document.getElementById('notificationBackdrop');
    const drawer = document.getElementById('notificationDrawer');

    if (!bellBtn || !drawer) return;

    const toggleDrawer = () => {
      const isOpen = drawer.classList.toggle('open');
      if (backdrop) backdrop.classList.toggle('open', isOpen);
      
      if (isOpen) {
        // Mark all as read
        localStorage.setItem('gp_last_read_announcement', Date.now().toString());
        const badge = document.getElementById('notificationBadge');
        if (badge) badge.style.display = 'none';
        
        // Remove unread highlight from cards in drawer
        document.querySelectorAll('.notification-card.unread').forEach((card) => {
          card.classList.remove('unread');
        });
      }
    };

    bellBtn.addEventListener('click', toggleDrawer);
    if (closeBtn) closeBtn.addEventListener('click', toggleDrawer);
    if (backdrop) backdrop.addEventListener('click', toggleDrawer);
  }

  // Initialize Notifications System
  async function init() {
    console.log("notifications.js init running");
    injectNotificationMarkup();
    setupEventListeners();

    try {
      // Dynamic load Firebase SDKs if missing
      if (typeof firebase === 'undefined') {
        await loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
        await loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js");
      } else if (typeof firebase.firestore === 'undefined') {
        await loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js");
      }

      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      const db = firebase.firestore();
      let isFirstLoad = true;

      // Real-time listener for Announcements
      db.collection("announcements")
        .orderBy("createdAt", "desc")
        .limit(25)
        .onSnapshot((snapshot) => {
          let announcements = [];
          
          // Check for newly added announcements (pop live toast)
          if (!isFirstLoad) {
            snapshot.docChanges().forEach((change) => {
              if (change.type === 'added') {
                showLiveToast(change.doc.data());
              }
            });
          }

          snapshot.forEach((doc) => {
            const data = doc.data();
            announcements.push({
              id: doc.id,
              title: data.title || '',
              body: data.body || '',
              icon: data.icon || '📢',
              badge: data.badge || '',
              url: data.url || '',
              createdAt: data.createdAt ? data.createdAt.toDate() : new Date()
            });
          });

          updateNotificationDrawer(announcements);
          isFirstLoad = false;
        }, (error) => {
          console.error("Announcements listener error:", error);
        });

      // FCM Push setup
      if ('Notification' in window && 'serviceWorker' in navigator) {
        db.collection("config").doc("fcm_keys").get().then((doc) => {
          if (doc.exists && doc.data().vapidKey) {
            setupFCM(doc.data().vapidKey, db);
          }
        }).catch((e) => console.log("VAPID key error:", e));
      }

    } catch (e) {
      console.error("Notifications init error:", e);
    }
  }

  // Setup Web Push FCM
  async function setupFCM(vapidKey, db) {
    try {
      await loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");
      const messaging = firebase.messaging();
      
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const reg = await navigator.serviceWorker.ready;
        const currentToken = await messaging.getToken({
          vapidKey: vapidKey,
          serviceWorkerRegistration: reg
        });
        
        if (currentToken) {
          await db.collection("push_tokens").doc(currentToken).set({
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
        }
      }
    } catch (err) {
      console.warn("FCM setup notice:", err);
    }
  }

  // Run on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

