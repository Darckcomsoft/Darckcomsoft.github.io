const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyBv_v3wdS2FD9GLZN_en05XH4t4nclIK58",
    authDomain: "pc-appstore.firebaseapp.com",
    projectId: "pc-appstore",
});

var db = firebase.firestore();

db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

var str = window.location.href;

function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}
