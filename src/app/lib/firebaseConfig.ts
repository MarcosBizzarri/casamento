// lib/firebaseConfig.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase (pegue do Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyAir7EMMMQ8R9Iktb6WOL52a4mvIknWRpo",
  authDomain: "meu-casamento-7ee67.firebaseapp.com",
  projectId: "meu-casamento-7ee67",
  storageBucket: "meu-casamento-7ee67.appspot.com", // ← Corrigido aqui!
  messagingSenderId: "498262573742",
  appId: "1:498262573742:web:49809703a5edafe689a33f",
};

// Inicializa o Firebase apenas se ainda não estiver inicializado
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Exporta o Firestore para ser usado nos componentes
export const db = getFirestore(app);
