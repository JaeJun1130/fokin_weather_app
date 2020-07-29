import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Location from "expo-location";

import Loading from "./Loading";
import Loding from "./Loading";

export default class extends React.Component {
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    } catch (error) {
      console.log("fail");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loding />;
  }
}
