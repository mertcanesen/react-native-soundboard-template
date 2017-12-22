import React from "react";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import { StackNavigator } from "react-navigation";

const App = StackNavigator(
  {
    Welcome: { screen: Welcome },
    Home: { screen: Home }
  },
  {
    headerMode: "none"
  }
);

export default App;
