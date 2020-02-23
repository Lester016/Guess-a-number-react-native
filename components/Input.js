import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Input = props => {
  const [focus, setFocus] = useState("grey");

  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style, borderBottomColor: focus }}
      onFocus={() => setFocus("blue")}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

Input.propTypes = {
  style: PropTypes.object
};

export default Input;
