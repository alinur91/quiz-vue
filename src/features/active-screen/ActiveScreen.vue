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
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuiz } from '../../composables/useQuiz'
import { Technologies } from '@/data/questions'
import Image from '@/shared/Image.vue'
import { ImageSizes } from '@/types/quizType'
import CountdownTimer from './CountdownTimer.vue'
import { calculateTotalSecondsForQuiz } from '@/utils/calculateTotalSecondsForQuiz'
import ProgressBar from './ProgressBar.vue'
import Question from './Question.vue'

const { quizInfo } = useQuiz()
const totalQuestions = quizInfo.value!.questions.length

const totalSecondsForQuiz = calculateTotalSecondsForQuiz(totalQuestions)
</script>
