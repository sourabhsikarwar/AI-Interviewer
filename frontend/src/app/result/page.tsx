"use client";

import { useAppContext } from "@/context";
import ReactMarkdown from "react-markdown";
import { GoogleGenerativeAI } from "@google/generative-ai";
import useSWR from "swr";
import { getFeedbackPrompt, getResourcePrompt } from "@/utils";

export default function Result() {
  const { state } = useAppContext();
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY ?? "";

  const genAI = new GoogleGenerativeAI(apiKey);

  const generateAnswer = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const promptForFeedback = getFeedbackPrompt(
      state.promptToRecord,
      state.currentTopic,
      state.currentLevel
    );
    const result = await model.generateContent(promptForFeedback);
    const response = await result.response;
    const feedback = response.text();

    const promptForResources = getResourcePrompt(
      state.currentTopic,
      state.currentLevel
    );
    const resourcesResult = await model.generateContent(promptForResources);
    const resourcesResponse = await resourcesResult.response;
    const resources = resourcesResponse.text();

    return {
      feedback,
      resources,
    };
  };

  const { data, isLoading, error } = useSWR("generateAnswer", generateAnswer, {
    errorRetryCount: 2,
  });

  if (error) {
    return (
      <div>
        <div>Something Went Wrong! Try Again Later.</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-screen w-full text-blue-500 text-2xl bg-blue-300/50 flex justify-center items-center font-bold">
        Generating Personalized Feedback...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      <h1 className="text-2xl font-semibold text-blue-500">
        Your Personalized Feedback based on your performance!
      </h1>
      <div className="bg-gray-50 text-gray-800 p-8 rounded-lg max-h-[70vh] overflow-scroll">
        <ReactMarkdown>{data?.feedback}</ReactMarkdown>
      </div>
      <h1 className="text-2xl font-semibold text-blue-500">
        Personalized {`${state.currentTopic.title}`} resources to level up your
        skills!
      </h1>
      <div className="bg-blue-100 text-gray-800 p-8 rounded-lg">
        <ReactMarkdown>{data?.resources}</ReactMarkdown>
      </div>
    </div>
  );
}
