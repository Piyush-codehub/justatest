// Firebase Config (PUT YOUR KEYS HERE)
const firebaseConfig = {
    apiKey: "AIzaSyAT8xpCZpgg69PmtGNr8Pm8PcEcECTDSfM",
  authDomain: "justatest-3ffc1.firebaseapp.com",
  projectId: "justatest-3ffc1",
  storageBucket: "justatest-3ffc1.firebasestorage.app",
  messagingSenderId: "351604465238",
  appId: "1:351604465238:web:cb47cad61331c68f1565f7",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

