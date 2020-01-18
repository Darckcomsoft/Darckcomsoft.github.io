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

	var str = window.location.href;
	var url = new URL(str);
	var id = url.searchParams.get("id");

	var db = firebase.firestore();
	var docRef = db.collection("users").doc(id);

	docRef.get().then(function(doc) {
		if (doc.exists) {
			document.getElementById("json").innerHTML = JSON.stringify(doc.data());
		} else {
			// doc.data() will be undefined in this case
			document.getElementById("json").innerHTML = '{Error: "dont found"}';
		}
	}).catch(function(error) {
		document.getElementById("json").innerHTML = '{Error: "' + error + '"}';
	});
