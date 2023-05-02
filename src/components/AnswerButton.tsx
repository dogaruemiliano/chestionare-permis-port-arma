import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../../config/colors";
import { UI } from "../../config/constants";

type Props = {
  id: string;
  body: string;
  isCorrect: boolean;
  index: number;
  isHighlighted: boolean;
  onPress: (id: string) => void;
};

const AnswerButton: React.FC<Props> = props => {
  const { id, body, isCorrect, index, isHighlighted, onPress } = props;

  const handlePress = () => {
    onPress(id);
  };

  const highightedStyle = {
    backgroundColor: isCorrect ? colors.succes : colors.error,
    color: "#FFF",
  };

  return (
    <Pressable
      style={[styles.component, isHighlighted ? highightedStyle : {}]}
      onPress={handlePress}>
      <Text>
        {["a", "b", "c"][index]}
        {". "}
        {body}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  component: {
    padding: 16,
    backgroundColor: colors.primary,
    marginBottom: UI.margin,
    borderRadius: UI.borderRadius,
    width: "100%",
  },
});

export default AnswerButton;
