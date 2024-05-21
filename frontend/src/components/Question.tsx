"use client";

import { useAppContext } from "@/context";
import { useRouter } from "next/router";

const Question = () => {
  const { state } = useAppContext();

  if (!state.currentTopic || !state.currentLevel) {
    return null;
  }

  return (
    <div>
      <div>Question {state.questionNumber + 1}</div>
      <div>
        {
          state.currentTopic?.[state.currentLevel.toLowerCase()]?.[
            state.questionNumber
          ].question
        }
      </div>
    </div>
  );
};

export default Question;
