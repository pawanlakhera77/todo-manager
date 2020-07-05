import firebase from 'firebase'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAaCu-KNSyO8gJA8rYTy_UGdnT0BhgqohA",
    authDomain: "react-firebase-auth-736b4.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-736b4.firebaseio.com",
    projectId: "react-firebase-auth-736b4",
    storageBucket: "react-firebase-auth-736b4.appspot.com",
    messagingSenderId: "526222863010",
    appId: "1:526222863010:web:3bf4d786e493f8eafe05fb"
  };

  const fire =firebase.initializeApp(firebaseConfig);

  export default fire;