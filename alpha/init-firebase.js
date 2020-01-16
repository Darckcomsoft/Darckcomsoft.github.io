 var firebaseConfig = {
    apiKey: "AIzaSyBv_v3wdS2FD9GLZN_en05XH4t4nclIK58",
    authDomain: "pc-appstore.firebaseapp.com",
    databaseURL: "https://pc-appstore.firebaseio.com",
    projectId: "pc-appstore",
    storageBucket: "pc-appstore.appspot.com",
    messagingSenderId: "868001724896",
    appId: "1:868001724896:web:0c466bb89572927e9f9385",
    measurementId: "G-MW5SYSWB35"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  console.log(firebase.name);  // "[DEFAULT]"

  var defaultStorage = firebase.storage();
  var defaultFirestore = firebase.firestore();
  
  var db = firebase.firestore();
  
  db.collection("apps").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
