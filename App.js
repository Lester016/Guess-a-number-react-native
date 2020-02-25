import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const [roundGuess, setRoundGuess] = useState(0);

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
