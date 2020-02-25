import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import PropTypes from "prop-types";

const GameOverScreen = props => {
  const { rounds, userNumber, onNewGame } = props;
  return (
    <View style={stlyes.screen}>
      <Text>It took {rounds} rounds!</Text>
      <Text>The number was: {userNumber}</Text>
      <Image source={require("../assets/success.png")} />
      <Button title="New Game" onPress={() => onNewGame()} />
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
  rounds: PropTypes.number.isRequired,
  userNumber: PropTypes.number.isRequired,
  onNewGame: PropTypes.func.isRequired
};

export default GameOverScreen;
