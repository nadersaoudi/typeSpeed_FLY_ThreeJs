import Caret from "./Caret";
import cn from "classnames";
const UserTypings = ({
  userInput,
  className,
  words,
}: {
  userInput: string;
  words: string;
  className?: string;
}) => {
  const typedCharaters = userInput.split("");

  return (
    <div className={className}>
      {typedCharaters.map((char, index) => {
        return (
          <Charcter
            key={`${char}_${index}`}
            actual={char}
            expected={words[index]}
          />
        );
      })}
      <Caret />
    </div>
  );
};

const Charcter = ({
  actual,
  expected,
}: {
  actual: string;
  expected: string;
}) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";

  return (
    <span
      className={cn({
        "text-red-500": !isCorrect && !isWhiteSpace,
        "text-primary-400": isCorrect && !isWhiteSpace,
        "bg-red-500/50": !isCorrect && isWhiteSpace,
      })}
    >
      {expected}
    </span>
  );
};

export default UserTypings;
