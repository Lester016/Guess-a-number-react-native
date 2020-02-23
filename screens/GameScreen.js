import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const RandomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (RandomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return RandomNumber;
  }
};

const GameScreen = props => {
  const [currentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  return (
    <View style={styles.screen}>
      <Text>Opponent&apos;s Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={() => {}} />
        <Button title="Greate" onPress={() => {}} />
      </Card>
    </View>
  );
};

GameScreen.propTypes = {
  userChoice: PropTypes.number
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
});

export default GameScreen;
