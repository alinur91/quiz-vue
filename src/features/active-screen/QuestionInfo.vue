<template>
  <div v-if="questionInfo">
    <h4 className="mb-10 text-sm font-bold text-white md:text-lg">{{ questionInfo.question }}</h4>
    <ul className="space-y-4">
      <Option
        v-for="(option, i) in questionInfo.options"
        :key="i"
        :option="option"
        :index="i"
        :isAnswerCorrect="questionInfo.correctOption === i"
      />
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useQuiz } from '@/composables/useQuiz'
import { questions, type Question } from '@/data/questions'
import Option from './OptionVariant.vue'
import { ref, watch } from 'vue'

const questionInfo = ref<Question>()
const { index, quizInfo } = useQuiz()

watch(
  index,
  (newIndex) => {
    questionInfo.value = questions[quizInfo.value!.technologyName].questions[newIndex]
  },
  { immediate: true },
)
</script>
