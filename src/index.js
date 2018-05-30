import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.min.css';
import firebase from 'firebase';
import {BrowserRouter} from 'react-router-dom';

const Config = ({
  apiKey: "AIzaSyAG0wNWQ46a88puO0eYSGJrVo2vz99MfEA",
  authDomain: "tseny-59ac4.firebaseapp.com",
  databaseURL: "https://tseny-59ac4.firebaseio.com",
  projectId: "tseny-59ac4",
  storageBucket: "tseny-59ac4.appspot.com",
  messagingSenderId: "306674927891"
})

firebase.initializeApp(Config);

const WithRouter = () => {
  return(
    <BrowserRouter><App/></BrowserRouter>
  )
}

ReactDOM.render(<WithRouter/>, document.getElementById('root'));
registerServiceWorker();
