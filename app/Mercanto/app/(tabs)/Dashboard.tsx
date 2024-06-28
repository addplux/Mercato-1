import { Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default class Dashboard extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Dashboard</Text>
        </View>
      </SafeAreaView>
    );
  }
}
