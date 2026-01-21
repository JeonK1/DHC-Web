export const ScreenName = {
  HOME: "Home",
  QUESTION_1: "Question1",
  QUESTION_2: "Question2",
  QUESTION_3: "Question3",
  QUESTION_4: "Question4",
  QUESTION_5: "Question5",
  RESULT: "Result",
} as const;

export type ScreenNameType = (typeof ScreenName)[keyof typeof ScreenName];
