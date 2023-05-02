import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { API_BASE_URL, UI } from "../../config/constants";
import Test from "../../types/test";
import { colors } from "../../config/colors";
import AnswerButton from "../components/AnswerButton";
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../navigation/types';

// type Props = NativeStackScreenProps<RootStackParamList, 'Test'>;

// const TestScreen: React.FC<Props> = props => {
const TestScreen: React.FC<{ token: string }> = props => {
  const { token } = props;
  // const {navigation} = props;
  const [isLoading, setIsLoading] = useState(true);
  const [test, setTest] = useState<Test | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentChosenAnswer, setCurrentChosenAnswer] = useState<string | null>(
    null,
  );

  useEffect(() => {
    async function fetchNewTest() {
      try {
        const response = await fetch(`${API_BASE_URL}/tests`, {
          method: "POST",
          headers: {
            Authorization: token,
          },
        });
        const data = await response.json();
        console.log(data.questions[0]);
        const testData: any = {};
        testData.id = data.id;
        testData.questions = data.questions.map((question: any) => ({
          id: question.id,
          body: question.content,
          answers: question.answers.map((answer: any) => ({
            id: answer.id,
            body: answer.content,
            isCorrect: answer.correct,
          })),
        }));
        setTest(testData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    if (!test) {
      fetchNewTest();
    }
  }, [token, test]);

  if (!test) {
    return (
      <View style={styles.screen}>
        <View style={styles.centered}>
          <Text>Error! No test...</Text>
        </View>
      </View>
    );
  }

  const handleAnswerPress = (id: string) => {
    console.log("handleAnswerPress");
    setCurrentChosenAnswer(id);
    setTimeout(() => {
      setCurrentChosenAnswer(null);
      setCurrentQuestionIndex(currentValue => currentValue + 1);
    }, 2000);
  };

  // const handleWrongAnswerPress = (id: string) => {
  //   console.log(handleWrongAnswerPress);
  // };

  return (
    <View style={styles.screen}>
      <View style={styles.questionContainer}>
        <View style={styles.questionCard}>
          <Text>
            {currentQuestionIndex + 1}
            {". "}
            {test.questions[currentQuestionIndex].body}
          </Text>
        </View>
      </View>
      <View style={styles.answersContainer}>
        {test.questions[currentQuestionIndex].answers.map((answer, index) => (
          <AnswerButton
            id={answer.id}
            key={answer.id}
            body={answer.body}
            isCorrect={answer.isCorrect}
            index={index}
            isHighlighted={
              currentChosenAnswer === answer.id ||
              (answer.isCorrect && !!currentChosenAnswer)
            }
            onPress={handleAnswerPress}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: UI.padding,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  questionCard: {
    width: "100%",
    borderRadius: UI.borderRadius,
    padding: UI.padding,
    backgroundColor: colors.primary,
  },
  answersContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default TestScreen;
