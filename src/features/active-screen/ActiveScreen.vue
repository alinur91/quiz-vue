<template>
  <div v-if="quizInfo">
    <div className="space-y-10 text-sm md:text-lg">
      <div className="flex items-center justify-between">
        <Image
          :src="quizInfo.imageSrc"
          :size="ImageSizes.medium"
          :is-react-logo="quizInfo.technologyName === Technologies.react"
        />
        <CountdownTimer :seconds="totalSecondsForQuiz" />
      </div>
      <ProgressBar />
      <Question />
      <div className="flex items-center justify-between">
        <Button @click="existQuiz">Exit</Button>
        <Button
          v-show="answer !== null"
          @click="isLastQuestion ? completeQuiz() : nextQuestion()"
          >{{ isLastQuestion ? 'Finish' : 'Next' }}</Button
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuiz } from '../../composables/useQuiz'
import { Technologies } from '@/data/questions'
import Image from '@/shared/TechnologyImage.vue'
import { ImageSizes } from '@/types/quizType'
import CountdownTimer from './CountdownTimer.vue'
import { calculateTotalSecondsForQuiz } from '@/utils/calculateTotalSecondsForQuiz'
import ProgressBar from './ProgressBar.vue'
import Question from './QuestionInfo.vue'
import Button from '@/shared/QuizButton.vue'
import { computed } from 'vue'

const { quizInfo, existQuiz, answer, index, nextQuestion, completeQuiz } = useQuiz()
const totalQuestions = quizInfo.value!.questions.length

const totalSecondsForQuiz = calculateTotalSecondsForQuiz(totalQuestions)

const isLastQuestion = computed(() => index.value === totalQuestions - 1)
</script>
