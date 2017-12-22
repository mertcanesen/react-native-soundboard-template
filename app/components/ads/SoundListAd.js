import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { AdMobBanner } from "react-native-admob";
var AdMobConfig = require("../../config/ads.json");

class SoundListAd extends React.Component {
  render() {
    if (AdMobConfig.isAdmobEnable) {
      return (
        <View style={styles.AdMobContainer}>
          <AdMobBanner
            adSize="banner"
            adUnitID={AdMobConfig.AdMobSoundListBanner}
            onAdFailedToLoad={error => console.error(error)}
          />
        </View>
      );
    } else {
      return <View style={styles.AdMobContainer} />;
    }
  }
}

const styles = StyleSheet.create({
  AdMobContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center"
  }
});

export default SoundListAd;
