import React, { useState, useRef /*useEffect*/ } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import PropTypes from "prop-types";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import { Ionicons } from "@expo/vector-icons";
import TitleText from "../components/TitleText";

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

const renderListItem = (itemData, listLength) => {
  return (
    <View style={styles.listItem}>
      <TitleText>
        <Text>#{listLength - itemData.index}</Text>
      </TitleText>
      <TitleText>
        <Text>{itemData.item}</Text>
      </TitleText>
    </View>
  );
};

const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

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
      currentHigh.current = currentGuess - 1;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    if (nextNumber === userChoice) {
      onGameOver(pastGuesses.length);
    }

    setCurrentGuess(nextNumber);
    setPastGuesses(curPastGuesses => [
      nextNumber.toString(),
      ...curPastGuesses
    ]);
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
      {/* <ScrollView>
        {pastGuesses.map((guess, index) =>
          renderListItem(guess, pastGuesses.length - index)
        )}
      </ScrollView> */}
      <FlatList
        keyExtractor={item => item}
        data={pastGuesses}
        renderItem={itemData => renderListItem(itemData, pastGuesses.length)}
      />
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
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default GameScreen;
