import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const toChrono = num => {
  let asStr = num.toString().padStart(8, "0");
  return asStr.slice(0, -4) + "." + asStr.slice(-4);
};

const Button = props => {
  const { color = "blue", title, ...restProps } = props;

  return (
    <TouchableOpacity
      {...restProps}
      style={{
        backgroundColor: props.color || "blue",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "white",
          fontWeight: "bold"
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

// The base component in React Native is the <View />.
// It serves as a sort replacement for <div />.

// - In React Native, you must import all components
//   including base React Native components.
// - You only write text inside of <Text /> or a component
//   that use <Text />
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: new Date(),
      currentTime: new Date()
    };

    this.startChrono = this.startChrono.bind(this);
    this.stopChrono = this.stopChrono.bind(this);
  }

  startChrono() {
    if (!this.intervalId) {
      this.setState({
        startTime: new Date()
      });

      this.intervalId = setInterval(() => {
        this.setState({
          currentTime: new Date()
        });
      }, 10);
    }
  }

  stopChrono() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  render() {
    const { startTime, currentTime } = this.state;

    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "Courier New",
            fontSize: 50
          }}
        >
          {toChrono(currentTime - startTime)}
        </Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <Button onPress={this.startChrono} color="green" title="Start" />
          <Button onPress={this.stopChrono} color="red" title="Stop" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
