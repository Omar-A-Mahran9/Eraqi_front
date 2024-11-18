<template>
  <div id="Frequently_Asked_Questions" class="py-16">
    <div class="container my-5">
      <div class="section-head mb-12">
        <h1
          tag="h1"
          class="font-weight-bold text-black title border-b-2 border-b-black"
        >
          {{ $t("Common Questions") }}
        </h1>
      </div>

      <div>
        <v-row
          justify="center"
          v-for="(question, index) in Questions"
          :key="index"
          class="w-100 w-md-75 mx-auto"
        >
          <v-col class="mx-auto p-5">
            <v-card>
              <v-sheet
                class="w-100 p-5 cursor-pointer"
                style="width: 100% !important"
              >
                <v-row
                  class="w-100"
                  justify="space-between"
                  align="center"
                  @click="expand[index] = !expand[index]"
                >
                  <v-col cols="9">
                    <span class="text-base font-bold">{{
                      question.question[locale]
                    }}</span>
                  </v-col>
                  <v-col class="text-end text-white" cols="3">
                    <v-icon class="bg-[#BBA664] rounded p-2" :size="30">
                      {{
                        expand[index] ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}
                    </v-icon>
                  </v-col>
                </v-row>
              </v-sheet>

              <v-card-text v-show="expand[index]">
                <p>{{ question.answer[locale] }}</p>
              </v-card-text>
            </v-card>
          </v-col>

          <div class="mx-4 hidden-sm-and-down"></div>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const { locale, setLocale } = useI18n();
const expand = ref(Array(6).fill(false)); // Initialize an array of false values based on the number of questions
const config = useRuntimeConfig();

const { data, error } = await useFetch(`${config.public.apiBase}questions`, {
  headers: {
    "Content-Language": locale.value, // Send current locale in Content-Language header
  },
});
const Questions = ref([]); // Define Questions as a ref

if (data) {
  // Replace the Questions ref with the fetched data
  Questions.value = data.value.data.map((item) => ({
    question: {
      ar: item.question, // Arabic question
      en: item.question, // English question (use the same question for both, or modify if needed)
    },
    answer: {
      ar: item.answer, // Arabic answer
      en: item.answer, // English answer (use the same answer for both, or modify if needed)
    },
  }));

  console.log("Questions updated:");
  console.log(Questions.value); // Output the updated Questions array
} else {
  console.error("Error fetching data:", error);
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
