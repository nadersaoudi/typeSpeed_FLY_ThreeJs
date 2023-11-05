export const formaPercentage = (percentage: number) => {
  return percentage.toFixed(0) + "%";
};

export const isKeyboardCodeAllowed = (code: string) => {
  return (
    /^[a-zA-Z0-9\s]+$/.test(code) || code === "Backspace" || code === "Space"
  );
};

export const countErrors = (actual: string, expected: string) => {
  const expectedCharcters = expected.split("");

  return expectedCharcters.reduce((errors, expectedChar, i) => {
    const actualChar = actual[i];
    if (actualChar !== expectedChar) {
      errors++;
    }
    return errors;
  }, 0);
};

export const calculateAccuracyPercentage = (errors: number, total: number) => {
  if (total > 0) {
    const corrects = total - errors;
    return (corrects / total) * 100;
  }

  return 0;
};
