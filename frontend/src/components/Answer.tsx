"use client";

import "regenerator-runtime/runtime";
import { useAppContext } from "@/context";
import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useRouter } from "next/navigation";

const Answer = () => {
  const { state, dispatch } = useAppContext();
  const router = useRouter();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [answer, setAnswer] = useState("");
  const [buttonText, setButtonText] = useState("Next");
  const [editAndNext, setEditAndNext] = useState(false);

  const handleStart = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };
  const handleStop = () => {
    SpeechRecognition.stopListening();
  };

  const handleSubmit = (answer: string) => {
    window.speechSynthesis.cancel();
    SpeechRecognition.stopListening();
    setEditAndNext(false);
    dispatch({ type: "SET_ANSWER_TO_RECORD", payload: answer });
    resetTranscript();
    setAnswer("");

    if (state.questionNumber === 8) {
      setButtonText("Submit");
    }
    if (state.questionNumber === 9) {
      router.push("/result");
      return;
    }

    dispatch({ type: "SET_NEXT_QUESTION_NUMBER" });
  };

  const handleEditAndSubmit = () => {
    window.speechSynthesis.cancel();
    setAnswer(transcript);
    setEditAndNext(true);
    resetTranscript();
  };

  const handleClear = () => {
    resetTranscript();
    setAnswer("");
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="text-2xl font-bold text-red-500 bg-yellow-100 p-4 rounded-lg w-full text-center">
        Your browser does not support speech recognition. Please use Chrome.
      </div>
    );
  }

  return editAndNext ? (
    <div className="flex gap-4">
      <textarea
        value={answer}
        className="w-5/6 text-black"
        onChange={(e) => setAnswer(e.target.value)}
        rows={8}
      />

      <div className="flex flex-col items-start gap-2 w-1/6">
        <button
          className="bg-blue-400 px-4 py-2 w-full"
          onClick={() => handleSubmit(answer)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 self-end">
        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded" onClick={() => handleStart()}>
          Start Record
        </button>
        <button className="bg-yellow-400 px-4 py-2 hover:bg-yellow-500 rounded" onClick={() => handleStop()}>
          Stop Record
        </button>
      </div>
      <p className="w-full min-h-56 bg-white shadow-lg rounded-lg p-4">
        {transcript}
      </p>
      <div className="flex items-start gap-2">
        <button
          className="bg-blue-300 hover:bg-blue-400 px-4 py-2 w-full rounded"
          onClick={() => handleClear()}
        >
          Clear
        </button>
        <button
          className="bg-blue-400 hover:bg-blue-500 px-4 py-2 w-full rounded"
          onClick={handleEditAndSubmit}
        >
          Edit and {buttonText}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 w-full rounded"
          onClick={() => handleSubmit(transcript)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Answer;
