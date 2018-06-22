import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View
} from "react-native";
import { createStackNavigator } from "react-navigation";
import Question from "./requests/question";

class QuestionIndexScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    Question.all().then(questions => {
      this.setState({
        questions: questions
      });
    });
  }

  render() {
    const { questions } = this.state;

    return (
      <ScrollView>
        {questions.map(q => (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("QuestionShow", {
                id: q.id,
                title: q.title
              });
            }}
            key={q.id}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginTop: 5,
              backgroundColor: "whitesmoke"
            }}
          >
            <Text
              style={{
                fontSize: 20
              }}
            >
              {q.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

class QuestionShowScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: null
    };
  }

  componentDidMount() {
    Question.one(this.props.navigation.state.params.id).then(question => {
      this.setState({ question: question });
    });
  }

  render() {
    const { question } = this.state;

    if (!question) {
      return (
        <View
          style={{
            padding: 20
          }}
        >
          <Text>Loading Question...</Text>
        </View>
      );
    }

    return (
      <View
        style={{
          padding: 20
        }}
      >
        <Text>{question.body}</Text>
      </View>
    );
  }
}

QuestionShowScreen.navigationOptions = props => {
  return {
    title: props.navigation.state.params.title
  };
};

QuestionIndexScreen.navigationOptions = {
  title: "Questions"
};

const MainStack = createStackNavigator({
  QuestionIndex: {
    screen: QuestionIndexScreen
  },
  QuestionShow: {
    screen: QuestionShowScreen
  }
});

export default class App extends React.Component {
  render() {
    return <MainStack />;
  }
}
