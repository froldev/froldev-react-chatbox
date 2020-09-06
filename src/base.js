import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCVJj2ewZ8MB8Dg4F4_GLYfchqXvEtrcac',
	authDomain: 'chatbox-app-44.firebaseapp.com',
	databaseURL: 'https://chatbox-app-44.firebaseio.com',
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
