import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = props => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>
        <Text>{props.title}</Text>
      </TitleText>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: "black",
    fontSize: 25
  }
});

export default Header;
