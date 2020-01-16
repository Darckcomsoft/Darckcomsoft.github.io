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
  
	var str = window.location.href;
	var url = new URL(str);
	var id = url.searchParams.get("id");
  
	// Initialize Firebase
	var defaultProject = firebase.initializeApp(firebaseConfig);
	
	console.log(defaultProject.name);

	var db = firebase.firestore();
	var docRef = db.collection("apps").doc(id);

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
