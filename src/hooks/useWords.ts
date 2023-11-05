import { faker } from "@faker-js/faker";
import React from "react";
const generateWords = (count: number) => {
  return faker.random.words(count).toLowerCase();
};

const useWords = (count: number) => {
  const [words, setWords] = React.useState<string>(generateWords(count));

  const updateWords = React.useCallback(() => {
    setWords(generateWords(count));
  }, [count]);

  return { words, updateWords };
};

export default useWords;
