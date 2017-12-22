import React from "react";

import { View, Text, StatusBar, FlatList, StyleSheet } from "react-native";
import SoundList from "./SoundList";

import { AdMobInterstitial } from "react-native-admob";
import SoundListAd from "./ads/SoundListAd";

var AdMobConfig = require("../config/ads.json");

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="green" barStyle="light-content" />
        <SoundList />
        <SoundListAd />
      </View>
    );
  }
}

export default Home;
