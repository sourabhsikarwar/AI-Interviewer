"use client";

import { useAppContext } from "@/context";
import { useEffect, useState } from "react";

export default function Result() {
  const [loading, setLoading] = useState<boolean>(false);
  const { state } = useAppContext();

  return (
    <div>
      <h1>Result</h1>
      <p>{state.promptToRecord}</p>
    </div>
  );
}
