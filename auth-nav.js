// auth-nav.js
// Handles lazy-loaded Firebase authentication from the global navbar dropdown

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

document.addEventListener('DOMContentLoaded', () => {
    let firebaseLoaded = false;
    let isLoading = false;
    let authReady = false;

    const emailInput = document.getElementById('gNavEmail');
    const form = document.getElementById('globalNavLoginForm');
    const btn = document.getElementById('gNavBtn');
    const err = document.getElementById('gNavErr');

    if(!form) return;

    // Trigger SDK Load on interaction
    const triggerLoad = async () => {
        if(firebaseLoaded || isLoading) return;
        isLoading = true;
        try {
            await loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
            await loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js");
            
            const firebaseConfig = {
                apiKey: "AIzaSyACe8pL0vqD_2NqzhTNOi0VoTyJaYVTkbA",
                authDomain: "panchayat-sahahayk-portal-up.firebaseapp.com",
                projectId: "panchayat-sahahayk-portal-up",
                storageBucket: "panchayat-sahahayk-portal-up.firebasestorage.app",
                messagingSenderId: "709368114724",
                appId: "1:709368114724:web:208c828040f499060e72b1"
            };
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            firebaseLoaded = true;
            authReady = true;
        } catch(e) {
            console.error("Firebase Secure Load Error", e);
        }
    };

    if(emailInput) emailInput.addEventListener('focus', triggerLoad);
    form.addEventListener('mouseenter', triggerLoad);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        err.style.display = "none";
        btn.innerText = "Verifying...";
        btn.disabled = true;

        if (!authReady) {
             await triggerLoad();
             await new Promise(r => setTimeout(r, 600)); // grace period
        }

        if(typeof firebase === 'undefined' || !firebase.auth) {
            err.innerText = "⚠️ Connection to auth server failed. Check network.";
            err.style.display = "block";
            btn.innerText = "Sign In";
            btn.disabled = false;
            return;
        }
        
        firebase.auth().signInWithEmailAndPassword(emailInput.value, document.getElementById('gNavPass').value)
            .then(() => {
                btn.innerText = "✅ Proceeding...";
                btn.style.background = "#16a34a"; // Green
                setTimeout(() => {
                    window.location.href = "admin-dashboard.html";
                }, 500);
            })
            .catch(error => {
                let msg = "❌ गलत Email/Password";
                if(error.code === 'auth/too-many-requests') msg = "⚠️ Too many attempts.";
                err.innerText = msg;
                err.style.display = "block";
                btn.innerText = "Sign In";
                btn.disabled = false;
            });
    });
});
