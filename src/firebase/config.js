import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Firebase konsolundan aldığınız yapılandırma bilgilerini buraya yapıştırın
  apiKey: "AIzaSyA_Z1mMCSPzIoliAGkK5qAfnxAU8yMArUo",
  authDomain: "schengenweb-d11b0.firebaseapp.com",
  projectId: "schengenweb-d11b0",
  storageBucket: "schengenweb-d11b0.appspot.com",
  messagingSenderId: "163584169409",
  appId: "1:163584169409:web:70af522abcbf653194b40",
  measurementId: "G-70XQT5HHL2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 