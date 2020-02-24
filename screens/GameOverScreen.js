import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const GameOverScreen = props => {
  return (
    <View style={stlyes.screen}>
      <Text>{props.rounds}</Text>
    </View>
  );
};

const stlyes = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

GameOverScreen.propTypes = {
  rounds: PropTypes.number
};

export default GameOverScreen;
