import firebase from "firebase";
import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

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
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
