import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

Card.propTypes = {
  children: PropTypes.array.isRequired,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 6,
    shadowRadius: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20
  }
});

export default Card;
