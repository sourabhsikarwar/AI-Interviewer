"use client";

import { useAppContext } from "@/context";
import Link from "next/link";

export default function Instructions() {
  const { state } = useAppContext();

  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="text-gray-700 text-3xl font-semibold">Instructions</h1>
      <h3 className="text-gray-700">
        This mock interview will assess your communication skills and knowledge
        related to the position you're applying for.
      </h3>
      <h4 className="text-gray-700 text-xl font-semibold">Important Notes:</h4>
      <ul className="text-gray-700">
        <li className="my-1">
          <b>1. Microphone Recording:</b> We will be using your microphone to
          record your answers. Please ensure your microphone is enabled and
          functioning properly.
        </li>
        <li className="my-1">
          <b>2. One Take Only:</b> Each question can only be answered once. You
          cannot revisit a question after submitting your answer.
        </li>
        <li className="my-1">
          <b>3. Review and Edit:</b> After recording your answer, you will have the
          opportunity to review the transcribed text and make any necessary
          edits before submitting.
        </li>
        <li className="my-1">
          <b>4. Recording Controls:</b> You will have controls to Start, Stop, and
          Clear your recording.
        </li>
        <li className="my-1">
          <b>5. Grading:</b> Your answers will be graded out of 10 points.
        </li>
      </ul>
      <div className="flex gap-8 my-4">
        <div className="w-1/2 bg-blue-100 p-4 flex flex-col gap-4 rounded-lg">
          <h1 className="text-gray-700 text-xl font-semibold">Test Process:</h1>
          <ul className="text-gray-700 text-sm">
            <li className="my-1">
              1. Read the question carefully. Take a moment to understand the
              question before recording your answer.
            </li>
            <li className="my-1">
              2. Click the "Start Recording" button. Record your answer clearly
              and concisely.
            </li>
            <li className="my-1">
              3. Click the "Stop Recording" button when finished.
            </li>
            <li className="my-1">
              4. Review the transcribed text. You can use the edit functionality
              to correct any errors in the transcription.
            </li>
            <li className="my-1">
              5. Once you are satisfied with your answer, click the "Next"
              button to submit.
            </li>
          </ul>
        </div>
        <div className="w-1/2 bg-blue-100 p-4 flex flex-col gap-4 rounded-lg">
          <h1 className="text-gray-700 text-xl font-semibold">
            Additional Tips:
          </h1>
          <ul className="text-gray-700 text-sm">
            <li className="my-1">1. Speak clearly and at a moderate pace.</li>
            <li className="my-1">
              2. Avoid background noise and distractions.
            </li>
            <li className="my-1">
              3. Answer the question directly and comprehensively.
            </li>
            <li className="my-1">
              4. Showcase your relevant skills and knowledge.
            </li>
            <li className="my-1">5. Be confident and enthusiastic.</li>
          </ul>
        </div>
      </div>
      <Link
        href={`/${state.currentTopic.relative_path}?level=${state.currentLevel}`}
        className="bg-blue-500 text-white p-4 rounded-lg text-center cursor-pointer hover:bg-blue-600"
      >
        Start Interview
      </Link>
    </div>
  );
}
