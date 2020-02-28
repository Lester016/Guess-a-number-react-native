import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import colors from "../constants/colors";

const MainButton = props => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

MainButton.propTypes = {
  children: PropTypes.object,
  onPress: PropTypes.func,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans"
  }
});

export default MainButton;
