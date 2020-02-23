import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import colors from "../constants/colors";

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

NumberContainer.propTypes = {
  children: PropTypes.number
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center"
  },
  number: {
    color: colors.accent,
    fontSize: 22
  }
});

export default NumberContainer;
