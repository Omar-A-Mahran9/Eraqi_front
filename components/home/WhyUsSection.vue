<template>
  <div id="why_us" class="container py-12">
    <div class="section-head">
      <h1 tag="h1" class="font-weight-bold text-main title">
        {{ $t("Why us") }}
      </h1>
    </div>

    <v-row justify="center" align="center" class="mt-10">
      <v-slide-group>
        <v-slide-group-item
          v-for="(whyuscontent, index) in whyuscontents"
          :key="index"
        >
          <v-card
            class="bg-transparent mx-14"
            width="250"
            style="text-align: center"
            flat
          >
            <!-- Custom icon positioned at the top center -->
            <img
              :src="whyuscontent.icon"
              alt="Why Us Icon"
              width="100"
              height="100"
              class="m-auto"
            />

            <v-card-title>
              <!-- Dynamic title based on the current language -->
              {{ whyuscontent.title[locale] }}
            </v-card-title>

            <v-card-text>
              <!-- Dynamic subtitle based on the current language -->
              {{ whyuscontent.subtitle[locale] }}
            </v-card-text>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-row>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
import ico from "/img/index/whyus3.svg";
const whyuscontents = [
  {
    icon: "/img/index/whyus1.svg",
    title: {
      ar: "لا يوجد تكاليف اضافية",
      en: "No Additional Costs",
    },
    subtitle: {
      ar: "نهتم بتقديم افضل خدمة من حيث المستوى والخبرة في تقديم الخدمات ",
      en: "We focus on providing the best service in terms of quality and expertise.",
    },
  },
  {
    icon: "/img/index/whyus2.svg",
    title: {
      ar: "التزام بالمواعيد",
      en: "Punctuality",
    },
    subtitle: {
      ar: "نهتم بتقديم افضل خدمة من حيث المستوى والخبرة في تقديم الخدمات ",
      en: "We emphasize delivering the best service in terms of quality and expertise.",
    },
  },
  {
    icon: ico,
    title: {
      ar: "سهوله",
      en: "Ease of Use",
    },
    subtitle: {
      ar: "نهتم بتقديم افضل خدمة من حيث المستوى والخبرة في تقديم الخدمات ",
      en: "We prioritize providing the best service in terms of quality and expertise.",
    },
  },
  {
    icon: "/img/index/whyus4.svg",
    title: {
      ar: "الغاء مجانى",
      en: "Free Cancellation",
    },
    subtitle: {
      ar: "نهتم بتقديم افضل خدمة من حيث المستوى والخبرة في تقديم الخدمات ",
      en: "We strive to provide the best service in terms of quality and expertise.",
    },
  },
];
</script>

<style scoped>
/* Add any additional custom styles if needed */
</style>
