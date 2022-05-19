    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
    import {
        getFirestore,
        collection,
        getDocs,
        onSnapshot,
        } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js"
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBHekNCduwuBB7G-w4H2Oh4NlrLcS-shH0",
        authDomain: "yggdrasil-road.firebaseapp.com",
        projectId: "yggdrasil-road",
        storageBucket: "yggdrasil-road.appspot.com",
        messagingSenderId: "72934374536",
        appId: "1:72934374536:web:b2aec9fbbaa91d9124733d",
        measurementId: "G-WPCBB94Q6Y"
      };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const db = getFirestore();

    export const getTasks = () => getDocs(collection(db, 'Ranking'))

    export const onGetTasks = (callback) => onSnapshot(collection(db, 'Ranking'),callback)
;

