import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDqwq054KP3buv4lniKsElVdPDvTB1SZ1w",
    authDomain: "netflix-project-5035f.firebaseapp.com",
    projectId: "netflix-project-5035f",
    storageBucket: "netflix-project-5035f.appspot.com",
    messagingSenderId: "669873231024",
    appId: "1:669873231024:web:ec0c070b95620a2ba51775",
    measurementId: "G-MKC099GJ2T"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);