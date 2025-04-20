// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔐 Configuração do Firebase C3P
const firebaseConfig = {
  apiKey: "AIzaSyBIpA1bcOmo-MJ18D1SmZI85S3tyaKNh9I",
  authDomain: "projeto-pessoal-profissional.firebaseapp.com",
  projectId: "projeto-pessoal-profissional",
  storageBucket: "projeto-pessoal-profissional.firebasestorage.app",
  messagingSenderId: "902366118307",
  appId: "1:902366118307:web:55aa1baae02212c4c19a16"
};

// ☁️ Inicialização do Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Conexões com Firestore e Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };