import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
    </View>
  );
}

