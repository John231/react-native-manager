import firebase from "firebase";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCpfsZLsmTUORbjWjM-wc28M6WfzSpeKWE",
      authDomain: "manager-6860a.firebaseapp.com",
      databaseURL: "https://manager-6860a.firebaseio.com",
      projectId: "manager-6860a",
      storageBucket: "",
      messagingSenderId: "633982506131"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
