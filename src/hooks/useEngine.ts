import { useState, useCallback, useEffect } from "react";
import useWords from "./useWords";
import useCount from "./useCount";
import useTypings from "./useTypings";
import { countErrors } from "../utils/helpers";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 12;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(NUMBER_OF_WORDS);

  const { timeLeft, startCountdown, resetCountdown } =
    useCount(COUNTDOWN_SECONDS);

  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(
    state !== "finish"
  );

  const [errors, setErrors] = useState(0);

  const isStarting = state === "start" && cursor > 0;

  const areWordsFinished = cursor === words.length;

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, cursor);
    setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
  }, [typed, words, cursor]);

  useEffect(() => {
    if (isStarting) {
      setState("run");
      startCountdown();
    }
  }, [isStarting, startCountdown, cursor]);

  useEffect(() => {
    if (!timeLeft) {
      setState("finish");
      sumErrors();
    }
  }, [sumErrors, timeLeft]);

  useEffect(() => {
    if (areWordsFinished) {
      sumErrors();
      updateWords();
      clearTyped();
    }
  }, [
    sumErrors,
    cursor,
    words,
    clearTyped,
    typed,
    areWordsFinished,
    updateWords,
  ]);

  const restart = useCallback(() => {
    resetCountdown();
    resetTotalTyped();
    setState("start");
    setErrors(0);
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

  return { state, words, timeLeft, typed, errors, totalTyped, restart };
};

export default useEngine;
