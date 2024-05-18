"use client";

import { useAppContext } from "@/context";

const Answer = () => {
  const { dispatch } = useAppContext();
  const handleSubmit = () => {};
  const handleClear = () => {};
  const handleStartRecord = () => {};
  const handleStopRecord = () => {};

  return (
    <div className="flex gap-4">
      <textarea className="w-5/6 text-black" />
      <div className="flex flex-col items-start gap-2 w-1/6">
        <button className="bg-blue-400 px-4 py-2 w-full">Start Record</button>
        <button className="bg-blue-400 px-4 py-2 w-full">Stop Record</button>
        <button className="bg-blue-400 px-4 py-2 w-full">Submit</button>
        <button className="bg-blue-400 px-4 py-2 w-full">Clear</button>
      </div>
    </div>
  );
};

export default Answer;
