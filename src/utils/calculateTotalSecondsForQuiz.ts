export const calculateTotalSecondsForQuiz = (totalQuestionsPerQuiz: number) => {
  const secondsPerQuestion = 30
  return totalQuestionsPerQuiz * secondsPerQuestion
}
