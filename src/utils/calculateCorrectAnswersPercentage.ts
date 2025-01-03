export const calculateCorrectAnswersPercentage = (usersPoints: number, maxPoints: number) => {
  return Math.floor((usersPoints / maxPoints) * 100)
}
