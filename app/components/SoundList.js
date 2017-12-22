import React from "react";

import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
  ToastAndroid
} from "react-native";

// Import the react-native-sound module
var Sound = require("react-native-sound");
Sound.setCategory("Playback");

var data = require("../config/sounds.json");

import { AdMobInterstitial } from "react-native-admob";
import SoundListAd from "./ads/SoundListAd";
var AdMobConfig = require("../config/ads.json");

function requestInterstitialAd() {
  if (AdMobConfig.isAdmobEnable) {
    AdMobInterstitial.setAdUnitID(AdMobConfig.InterstitialID);
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
  }
}

var playCount = 0;
function playSound(soundObject) {
  playCount++;
  if (playCount % AdMobConfig.PlayCountForInterstitial === 0) {
    requestInterstitialAd();
  } else {
    var sound = new Sound(soundObject.sound, Sound.MAIN_BUNDLE, error => {
      sound.play(() => {
        sound.release();
      });
    });
  }
}

function longPressSong(item) {
  alert(item.sound);
}

class SoundList extends React.Component {
  _renderItem = ({ item }) => (
    <TouchableWithoutFeedback
      onPress={() => {
        return playSound(item);
      }}
    >
      <View style={styles.box}>
        <Text>{item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
  render() {
    return (
      <View style={styles.flatView}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={data}
          renderItem={this._renderItem}
          contentContainerStyle={styles.flatContainer}
          horizontal={false}
          numColumns={3}
          removeClippedSubviews={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "grey",
    margin: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  flatContainer: {
    margin: 5
  },
  flatView: {
    flex: 1,
    marginBottom: 10
  }
});

export default SoundList;
