import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  const { rounds, userNumber, onNewGame } = props;
  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>
        <Text>The Game is Over!</Text>
      </TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          It took <Text style={styles.resultNumber}>{rounds}</Text> rounds! The
          number was: <Text style={styles.resultNumber}>{userNumber}</Text>
        </Text>
      </View>
      <MainButton title="New Game" onPress={() => onNewGame()}>
        <Text>NEW GAME</Text>
      </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
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
  title: {
    marginVertical: 15
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    width: "80%",
    alignItems: "center",
    marginVertical: 15
  },
  resultText: {
    fontSize: 18,
    textAlign: "center"
  },
  resultNumber: {
    color: "red"
  }
});

GameOverScreen.propTypes = {
  rounds: PropTypes.number.isRequired,
  userNumber: PropTypes.number.isRequired,
  onNewGame: PropTypes.func.isRequired
};

export default GameOverScreen;
