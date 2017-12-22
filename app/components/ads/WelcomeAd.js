import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { AdMobBanner } from "react-native-admob";
var AdMobConfig = require("../../config/ads.json");

class WelcomeAd extends React.Component {
  render() {
    if (AdMobConfig.isAdmobEnable) {
      return (
        <View style={styles.AdMobContainer}>
          <AdMobBanner
            adSize="largeBanner"
            adUnitID={AdMobConfig.AdMobWelcomeBanner}
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
    flex: 1,
    alignItems: "center",
    margin: 25
  }
});

export default WelcomeAd;
