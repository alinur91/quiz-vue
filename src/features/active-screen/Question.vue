<template>
  <div>
    <h4 className="mb-10 text-sm font-bold text-white md:text-lg">{{ question }}</h4>
    <ul className="space-y-4">
      <Option
        v-for="(option, i) in options"
        :key="i"
        :option="option"
        :index="i"
        :isAnswerCorrect="correctOption === i"
      />
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useQuiz } from '@/composables/useQuiz'
import { questions } from '@/data/questions'
import Option from './Option.vue'

const { index, quizInfo } = useQuiz()

const { question, options, correctOption } =
  questions[quizInfo.value!.technologyName].questions[index.value]
</script>
