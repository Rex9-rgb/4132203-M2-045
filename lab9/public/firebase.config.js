// firebase.config.js
const firebaseConfig = {
    apiKey: "AIzaSyAS93zFZdQdwUmAd7M_sSEmGMXsvThLYqg",
  authDomain: "tar66-m2.firebaseapp.com",
  databaseURL: "https://tar66-m2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tar66-m2",
  storageBucket: "tar66-m2.firebasestorage.app",
  messagingSenderId: "664482660493",
  appId: "1:664482660493:web:5c8a29f9552e37eabfa2c4",
  measurementId: "G-TZ35DHWQBE"
};

// For service worker (firebase-messaging-sw.js)
// This ensures the config is available in both module and non-module contexts
if (typeof self !== 'undefined') {
    self.firebaseConfig = firebaseConfig;
}