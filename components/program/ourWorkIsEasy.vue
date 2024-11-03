<template>
  <div class="bg-[#FCFAF5]">
    <div id="why_us" class="container py-12">
      <div class="section-head">
        <h1 tag="h1" class="font-weight-bold text-main title">
          {{ $t("The work with us is very easy") }}
        </h1>
      </div>
      <div>
        <div v-for="(dat, index) in data" :key="index">
          <v-row
            v-if="index % 2 === 0"
            align="center"
            justify="space-between"
            class="mb-10"
          >
            <!-- If the index is even, display text first -->
            <v-col cols="6" md="6">
              <v-card flat class="bg-transparent">
                <v-card-title>
                  <h2 tag="h2" class="font-weight-bold text-main text-h2 ">
                    {{ dat.id }}
                  </h2>
                  <h2 tag="h2" class="font-weight-bold text-black sub-title">
                    {{ dat.title[locale] }}
                  </h2>
                </v-card-title>
                <v-card-text>
                  <p tag="p" class="text-justify">
                    {{ dat.text[locale] }}
                  </p>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- If the index is even, display image second -->
            <v-col cols="6" md="6" class="d-flex justify-end">
              <img :src="'/img/index/' + dat.image" alt="" width="50%" />
            </v-col>
          </v-row>
          <v-row v-else align="center" justify="space-between" class="mb-10">
            <!-- If the index is odd, display image first -->
            <v-col cols="6" md="6" class="">
              <img :src="'/img/index/' + dat.image" alt="" width="50%" />
            </v-col>

            <!-- If the index is odd, display text second -->
            <v-col cols="6" md="6" class="d-flex justify-end">
              <v-card flat class="bg-transparent">
                <v-card-title>
                  <h2 tag="h2" class="font-weight-bold text-main text-h2">
                    {{ dat.id }}
                  </h2>
                  <h2 tag="h2" class="font-weight-bold text-black sub-title">
                    {{ dat.title[locale] }}
                  </h2>
                </v-card-title>
                <v-card-text>
                  <p tag="p" class="text-justify">
                    {{ dat.text[locale] }}
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { locale } = useI18n(); // This will give you the current locale

const data = [
  {
    id: "01",
    title: {
      en: "Easy to work with us",
      ar: "من السهل ان تبدأ",
    },
    text: {
      en: "We are a team of experts who are always ready to help you with any questions",
      ar: "قم بالتسجيل في برنامج 'الراقي' التابع الى شركاء",
    },
    image: `launching/image1.svg`,
  },
  {
    id: "02",
    title: {
      en: "Easy to work with us",
      ar: "من السهل ان تبدأ",
    },
    text: {
      en: "We are a team of experts who are always ready to help you with any questions",
      ar: "قم بالتسجيل في برنامج 'الراقي' التابع الى شركاء",
    },
    image: `launching/image2.svg`,
  },
  {
    id: "03",
    title: {
      en: "Easy to work with us",
      ar: "من السهل ان تبدأ",
    },
    text: {
      en: "We are a team of experts who are always ready to help you with any questions",
      ar: "قم بالتسجيل في برنامج 'الراقي' التابع الى شركاء",
    },
    image: `launching/image3.svg`,
  },
  {
    id: "04",
    title: {
      en: "Easy to work with us",
      ar: "من السهل ان تبدأ",
    },
    text: {
      en: "We are a team of experts who are always ready to help you with any questions",
      ar: "قم بالتسجيل في برنامج 'الراقي' التابع الى شركاء",
    },
    image: `launching/image4.svg`,
  },
];
</script>
