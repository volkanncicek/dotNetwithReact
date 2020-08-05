import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCU6539Ru0I4xJgfcW7hsVoWXa9FhBz55Y",
    authDomain: "dotnetwithreact.firebaseapp.com",
    databaseURL: "https://dotnetwithreact.firebaseio.com",
    projectId: "dotnetwithreact",
    storageBucket: "dotnetwithreact.appspot.com",
    messagingSenderId: "877310800452",
    appId: "1:877310800452:web:3785da3a98715c08adc211",
    measurementId: "G-VB05G7NNS7"
};

var fire = firebase.initializeApp(firebaseConfig)
export default fire;