import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
// Fonts packages from expo.
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const [roundGuess, setRoundGuess] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={() => fetchFonts()}
        onFinish={() => setDataLoaded(true)}
        onError={() => console.log("something went wrong with your files")}
      />
    );
  }

  const newGameHandler = () => {
    setUserNumber(null);
    setRoundGuess(0);
  };

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setRoundGuess(0);
  };

  const gameOverHandler = round => {
    setRoundGuess(round);
  };

  let content = <StartGameScreen onStartGame={e => startGameHandler(e)} />;

  if (userNumber && roundGuess <= 0) {
    content = (
      <GameScreen
        userChoice={userNumber}
        onGameOver={e => gameOverHandler(e)}
      />
    );
  } else if (roundGuess > 0) {
    content = (
      <GameOverScreen
        rounds={roundGuess}
        userNumber={userNumber}
        onNewGame={() => newGameHandler()}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
