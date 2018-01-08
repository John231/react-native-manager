import firebase from "firebase";
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>{"Hello"}</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
