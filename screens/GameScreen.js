import React, { useState, useRef /*useEffect*/ } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import PropTypes from "prop-types";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import { Ionicons } from "@expo/vector-icons";

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
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props; //deStructuring

  // useEffect(() => {
  //   if (currentGuess === userChoice) {
  //     onGameOver(rounds);
  //   }
  // }, [currentGuess, userChoice, onGameOver]); // This function won't re run if the 2nd parameter's value dont changed.

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that is wrong...", [
        { text: "Sorry!", style: "cancel" }
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    if (nextNumber === userChoice) {
      onGameOver(rounds);
    }

    setCurrentGuess(nextNumber);
    setRounds(currentRounds => currentRounds + 1);
  };
  return (
    <View style={styles.screen}>
      <Text>Opponent&apos;s Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => nextGuessHandler("lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={() => nextGuessHandler("greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
    </View>
  );
};

GameScreen.propTypes = {
  userChoice: PropTypes.number,
  onGameOver: PropTypes.func
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
    maxWidth: "90%"
  }
});

export default GameScreen;
