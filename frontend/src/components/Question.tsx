"use client";

import { useAppContext } from "@/context";
import ReactMarkdown from "react-markdown";

const Question = () => {
  const { state } = useAppContext();

  if (!state.currentTopic || !state.currentLevel) {
    return null
  }

  return (
    <div className="text-gray-800 text-lg">
      <div className="text-gray-800 font-semibold">Question {state.questionNumber + 1}</div>
      <ReactMarkdown>
        {
          state.currentTopic?.[state.currentLevel.toLowerCase()]?.[
            state.questionNumber
          ].question
        }
      </ReactMarkdown>
    </div>
  );
};

export default Question;
