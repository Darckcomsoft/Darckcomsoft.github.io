	var firebaseConfig = {
		apiKey: "AIzaSyBd-MAL-WQjXAuUQgMCSEHHRkIrEreN5L8",
		authDomain: "darckcomsoft-57f27.firebaseapp.com",
		databaseURL: "https://darckcomsoft-57f27.firebaseio.com",
		projectId: "darckcomsoft-57f27",
		storageBucket: "darckcomsoft-57f27.appspot.com",
		messagingSenderId: "724034563902",
		appId: "1:724034563902:web:3e21329e8fb0929cf5466f",
		measurementId: "G-F2SLGLBJGB"
	};

	// Initialize Firebase
	var defaultProject = firebase.initializeApp(firebaseConfig);
	var db = firebase.firestore();

	
var request = window.indexedDB.open('firebaseLocalStorageDb', 1);
	
		request.onerror = function(event) {
			console.log(event.type);
		};
		request.onsuccess = function(event) {
			var db = event.target.result;
			var transaction = db.transaction(["firebaseLocalStorage"]);
			var objectStore = transaction.objectStore("firebaseLocalStorage");
			var request2 = objectStore.get("firebase:authUser:AIzaSyBd-MAL-WQjXAuUQgMCSEHHRkIrEreN5L8:[DEFAULT]");
			request2.onerror = function(event) {
			  // Handle errors!
			  document.getElementById("json").innerHTML = event;
			};
			request2.onsuccess = function(event) {
			  // Do something with the request.result!
			  if (request2.result != null){
			  CreateDoc(request2.result.value);
			  }
			};
		};

function CreateDoc(idd)
{
	if (idd.emailVerified == true)
	{
		db.collection("users").doc(idd.uid).set(
		{
			author_uid: idd.uid,
			name: idd.displayName,
			email: idd.email,
			lastLoginAt: idd.lastLoginAt,
			emailVerified: idd.emailVerified,
			public: false
		})
		.then(function(docRef) {
			document.getElementById("json").innerHTML = "Document written with ID: " + idd.uid;
		})
		.catch(function(error) {
			document.getElementById("json").innerHTML = "Error adding document: " + error;
		});
	}else{
		document.getElementById("json").innerHTML = '{error: "you need Verifie your email/google email"}';
	}
}