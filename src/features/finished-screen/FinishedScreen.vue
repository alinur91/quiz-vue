<template>
  <div class="flex flex-col items-center justify-center space-y-8">
    <div v-if="quizInfo">
      <Image
        :size="ImageSizes.large"
        :isReactLogo="quizInfo?.technologyName === Technologies.react"
        :src="quizInfo?.imageSrc"
      />
    </div>
    <div class="text-md text-center text-white md:text-xl">
      <h2>You Scored {{ points }} out of {{ maxPoints }} ({{ correctAnswersPercentage }}%)</h2>
      <h2 className="flex items-center gap-2">{{ feedbackText }}</h2>
    </div>
    <Button
      class="text-md flex w-72 items-center justify-center gap-2 py-5 font-semibold tracking-wider md:w-[500px] md:text-lg"
      @click="restartQuiz"
    >
      Restart the Quiz
    </Button>
  </div>
</template>
<script setup lang="ts">
import { useQuiz } from '../../composables/useQuiz'
import { Technologies } from '@/data/questions'
import Button from '@/shared/QuizButton.vue'
import Image from '@/shared/TechnologyImage.vue'
import { ImageSizes } from '@/types/quizType'
import { calculateCorrectAnswersPercentage } from '@/utils/calculateCorrectAnswersPercentage'
import { calculateMaxPoints } from '@/utils/calculateMaxPoints'
import { getFeedbackOnQuizResults } from '@/utils/getFeedbackOnQuizResults'

const { quizInfo, points, pointsPerCorrectAnswer, restartQuiz } = useQuiz()

const maxPoints = calculateMaxPoints(
  quizInfo.value!.questions.length as number,
  pointsPerCorrectAnswer.value,
)

const correctAnswersPercentage = calculateCorrectAnswersPercentage(points.value, maxPoints)

const feedbackText = getFeedbackOnQuizResults(correctAnswersPercentage)
</script>
