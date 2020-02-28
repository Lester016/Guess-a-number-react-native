import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import PropTypes from "prop-types";

const GameOverScreen = props => {
  const { rounds, userNumber, onNewGame } = props;
  return (
    <View style={stlyes.screen}>
      <Text>It took {rounds} rounds!</Text>
      <Text>The number was: {userNumber}</Text>
      <Image
        source={require("../assets/success.png")}
        style={stlyes.image}
        resizeMode="cover"
      />
      <Button title="New Game" onPress={() => onNewGame()} />
    </View>
  );
};

const stlyes = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

GameOverScreen.propTypes = {
  rounds: PropTypes.number.isRequired,
  userNumber: PropTypes.number.isRequired,
  onNewGame: PropTypes.func.isRequired
};

export default GameOverScreen;
