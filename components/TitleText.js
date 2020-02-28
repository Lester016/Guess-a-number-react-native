import React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

const TitleText = (props) => {
  return <Text style={{...styles.title, ...props.style}}>{props.children}</Text>;
};

TitleText.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
     fontSize: 20,
     margin: 10
  }
});

export default TitleText;
