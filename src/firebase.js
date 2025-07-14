import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZMweRN-AbH33kVyziQqTb_uCa9bB5JA",
  authDomain: "torque-wrench-ft.firebaseapp.com",
  projectId: "torque-wrench-ft",
  storageBucket: "torque-wrench-ft.appspot.com",
  messagingSenderId: "89473601476",
  appId: "1:89473601476:web:5f738258b63d879ac01e91",
  measurementId: "G-KBBDN5LXMC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);