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

	var ui = new firebaseui.auth.AuthUI(firebase.auth());
	var uiConfig = {
	callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/dashboard.html?id=0',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: 'https://github.com/Darckcomsoft/Darckcomsoft-Stuff',
  // Privacy policy url.
  privacyPolicyUrl: 'https://github.com/Darckcomsoft/Darckcomsoft-Stuff'
};

ui.start('#firebaseui-auth-container', uiConfig);