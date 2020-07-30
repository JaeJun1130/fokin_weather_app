import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

import * as Location from "expo-location";

import Loading from "./Loading";
import Loding from "./Loading";

export default class extends React.Component {
  state = { isLoading: true };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPssitionAsync(); //send API
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("error");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loding /> : null;
  }
}
