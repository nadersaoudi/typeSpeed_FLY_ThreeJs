import useEngine from "../hooks/useEngine";
import RestartButton from "../components/RestartButton";
import Results from "../components/Results";
import UserTypings from "../components/UserTypings";
import { calculateAccuracyPercentage } from "../utils/helpers";
const TypingSpeed = () => {
  const { state, words, timeLeft, typed, errors, restart, totalTyped } =
    useEngine();
  return (
    <>
      <CountDownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GenerateWords words={words} />
        <UserTypings
          className="absolute inset-0"
          words={words}
          userInput={typed}
        />
      </WordsContainer>

      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Results
        state={state}
        className="mt-10"
        errors={10}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  );
};
const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all">
      {children}
    </div>
  );
};

const GenerateWords = ({ words }: { words: string }) => {
  return <div className="  text-slate-500">{words}</div>;
};

const CountDownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};
export default TypingSpeed;
