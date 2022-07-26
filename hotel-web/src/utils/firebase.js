import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBRxkuwTqTdG0BKRWfA5ofvkyxWA6BooiU",
  authDomain: "fir-file-upload-a23df.firebaseapp.com",
  projectId: "fir-file-upload-a23df",
  storageBucket: "fir-file-upload-a23df.appspot.com",
  messagingSenderId: "35284805283",
  appId: "1:35284805283:web:cda85b908f00a407e78116",
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
