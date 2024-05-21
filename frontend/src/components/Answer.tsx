"use client";

import { useAppContext } from "@/context";
import { useState } from "react";

const Answer = () => {
  const { state, dispatch } = useAppContext();

  const [isListening, setIsListening] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleNext = () => {
    dispatch({ type: "SET_ANSWER_TO_RECORD", payload: answer });
    dispatch({ type: "SET_NEXT_QUESTION_NUMBER" });
  };

  const handleSubmit = () => {
    dispatch({ type: "SET_ANSWER_TO_RECORD", payload: answer });
    console.log("Submitted Data");
  };

  return (
    <div className="flex gap-4">
      <textarea
        className="w-5/6 text-black"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <div className="flex flex-col items-start gap-2 w-1/6">
        <button
          className="bg-blue-400 px-4 py-2 w-full"
          onClick={() => setIsListening(true)}
        >
          Start Record
        </button>
        <button
          className="bg-blue-400 px-4 py-2 w-full"
          onClick={() => setIsListening(false)}
        >
          Stop Record
        </button>
        {state.questionNumber < 9 ? (
          <button className="bg-blue-400 px-4 py-2 w-full" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button
            className="bg-blue-400 px-4 py-2 w-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
        <button
          className="bg-blue-400 px-4 py-2 w-full"
          onClick={() => setAnswer("")}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Answer;
