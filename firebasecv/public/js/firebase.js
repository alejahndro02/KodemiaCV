// Initialize Firebase
// aqui van tus credenciales de firebase
var config = {
  apiKey: "AIzaSyABKGPhbLtuKnTQXGShsFxw_GT5stax8wg",
  authDomain: "fir-cv-90c46.firebaseapp.com",
  databaseURL: "https://fir-cv-90c46.firebaseio.com",
  projectId: "fir-cv-90c46",
  storageBucket: "fir-cv-90c46.appspot.com",
  messagingSenderId: "848239669306"
};
firebase.initializeApp(config);

const provider = new firebase.auth.FacebookAuthProvider();
const auth     = firebase.auth();
const db       = firebase.database();
const storage  = firebase.storage();

//referencias
const users = db.ref('users');

// Auth State Changed
auth.onAuthStateChanged((user) => {
  if (user) {
		signedIn(user);
  } else {
		signedOut();
  }
});
