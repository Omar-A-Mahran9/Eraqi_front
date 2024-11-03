<template>
  <div class="bg-[#FCFAF5]">
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
              width="300"
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

              <v-card-title style="font-weight: bold">
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
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
import ico from "/img/index/whyus3.svg";
const whyuscontents = [
  {
    icon: "/img/index/joinus1.svg",
    title: {
      ar: "تسجيل الدخول كشريك سفر",
      en: "No Additional Costs",
    },
    subtitle: {
      ar: " قم بالتسجيل في 'الراقى للتوصيل' التابع الى شركاء السفر، وتعبئة التفاصيل الخاصة بشركتكم وتقديم الطلب.",
      en: "We focus on providing the best service in terms of quality and expertise.",
    },
  },
  {
    icon: "/img/index/joinussec2.svg",
    title: {
      ar: "خدمة الدعم",
      en: "Punctuality",
    },
    subtitle: {
      ar: "سيكون لديك دعم فني من الدرجة الأولى لعملائك.",
      en: "We emphasize delivering the best service in terms of quality and expertise.",
    },
  },
  {
    icon: "/img/index/joinussec3.svg",
    title: {
      ar: "أسعار مخفضة",
      en: "Ease of Use",
    },
    subtitle: {
      ar: "أهلاً وسهلاً بك كشريك معنا حيث سيتم حصولك على أسعار مخفضة ومنافسة للوكلاء",
      en: "We prioritize providing the best service in terms of quality and expertise.",
    },
  },
];
</script>

<style scoped>
/* Add any additional custom styles if needed */
</style>
