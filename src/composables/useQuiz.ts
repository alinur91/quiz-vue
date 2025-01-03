import { type QuestionCategory } from '@/data/questions'
import { ref } from 'vue'

export enum QuizStatusEnum {
  'ready' = 'READY',
  'active' = 'ACTIVE',
  'finished' = 'FINISHED',
}

const quizStatus = ref<QuizStatusEnum>(QuizStatusEnum.ready)
const quizInfo = ref<QuestionCategory | null>(null)
const index = ref(0)
const answer = ref<null | number>(null)
const pointsPerCorrectAnswer = ref(10)
const points = ref(0)

const startQuiz = (questionInfo: QuestionCategory) => {
  quizInfo.value = questionInfo
  quizStatus.value = QuizStatusEnum.active
}

const finishQuiz = () => {
  quizStatus.value = QuizStatusEnum.finished
  index.value = 0
  answer.value = null
}

const giveTheAnswer = (givenAnswer: number, isAnswerCorrect: boolean) => {
  answer.value = givenAnswer
  if (isAnswerCorrect) {
    points.value = points.value + pointsPerCorrectAnswer.value
  }
}

const existQuiz = () => {
  quizStatus.value = QuizStatusEnum.ready
  index.value = 0
  answer.value = null
  points.value = 0
  quizInfo.value = null
}

const nextQuestion = () => {
  answer.value = null
  index.value++
}

const completeQuiz = () => {
  quizStatus.value = QuizStatusEnum.finished
  answer.value = null
  index.value = 0
}

const restartQuiz = () => {
  quizStatus.value = QuizStatusEnum.ready
  quizInfo.value = null
  index.value = 0
  answer.value = null
  points.value = 0
  pointsPerCorrectAnswer.value = 10
}

export const useQuiz = () => {
  return {
    quizStatus,
    quizInfo,
    startQuiz,
    finishQuiz,
    pointsPerCorrectAnswer,
    answer,
    points,
    index,
    giveTheAnswer,
    existQuiz,
    nextQuestion,
    completeQuiz,
    restartQuiz,
  }
}
