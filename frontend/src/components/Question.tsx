"use client";

import { useAppContext } from "@/context";

const Question = () => {
  const { state } = useAppContext();

  console.info(state.currentTopic)

  return (
    <div>
      <div>Question {state.questionNumber + 1}</div>
      <div>{state.currentTopic?.[state.currentLevel]?.[state.questionNumber].question}</div>
    </div>
  );
};

export default Question;
