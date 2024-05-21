"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  Dispatch,
} from "react";
import { topics } from "@/constants/tracks";

interface AppState {
  currentLevel: string;
  currentTopic: any;
  questionNumber: number;
  promptToRecord: string;
}

// type AppAction = { type: 'SET_QUESTION_NUMBER'; payload: number } | { type: 'SET_PROMPT_TO_RECORD'; payload: string };

const initialState: AppState = {
  currentLevel: "",
  currentTopic: {},
  questionNumber: 0,
  promptToRecord: "",
};

const getTopicData = (topic: string) => {
  return topics.find((t) => t.slug === topic.toLowerCase())?.topicData;
};

const addAnswerToPrompt = (
  prompt: string,
  answer: string,
  questionNumber: number,
  topic: any,
  level: string
) => {
  return `${prompt}Q${questionNumber + 1}: ${
    topic?.[level.toLowerCase()]?.[questionNumber].question
  }\nAnswer: ${answer ? answer : "Not answered"}\n`;
};

const AppReducer = (state: AppState, action: any): AppState => {
  switch (action.type) {
    case "SET_INITIAL_LEVEL_AND_TOPIC": {
      return {
        ...state,
        currentLevel: action.payload.level,
        currentTopic: getTopicData(action.payload.topic),
      };
    }
    case "SET_ANSWER_TO_RECORD": {
      return {
        ...state,
        promptToRecord: addAnswerToPrompt(
          state.promptToRecord,
          action.payload,
          state.questionNumber,
          state.currentTopic,
          state.currentLevel
        ),
      };
    }
    case "SET_NEXT_QUESTION_NUMBER": {
      return {
        ...state,
        questionNumber: state.questionNumber + 1,
      };
    }
    default:
      return state;
  }
};

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<any>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;
