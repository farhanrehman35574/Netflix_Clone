import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//  import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDe5gNAi2npfx__xF0VzBOIXBlkVeb7AAQ",
    authDomain: "netflix-clone-975dd.firebaseapp.com",
    projectId: "netflix-clone-975dd",
    storageBucket: "netflix-clone-975dd.appspot.com",
    messagingSenderId: "876593674789",
    appId: "1:876593674789:web:329ed306c306a3ae96ddcc"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//  seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };