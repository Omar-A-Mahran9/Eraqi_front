<template>
  <v-carousel :show-arrows="showArrows" hide-delimiters style="height: 655px">
    <v-carousel-item
      v-for="(image, index) in images"
      :key="index"
      :src="image.src"
      cover
    >
      <div class="relative w-full h-full">
        <!-- Overlay positioned behind the content -->
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <!-- Semi-transparent black overlay -->

        <!-- Content above the overlay -->
        <div class="flex flex-col gap-5 justify-center h-full w-full container">
          <div>
            <v-row align="center" justify="center">
              <v-col cols="12" lg="8" md="8" sm="12">
                <h1
                  class="text-2xl md:text-2xl text-white font-bold md:w-2/3 leading-relaxed md:leading-relaxed relative z-10"
                >
                  {{ image.title[locale] }}
                </h1>
                <p
                  class="text-white md:w-3/4 leading-relaxed md:leading-relaxed relative z-10"
                >
                  {{ image.subtitle[locale] }}
                </p>

                <p
                  class="text-white md:w-3/4 leading-relaxed md:leading-relaxed relative z-10 mt-10 w-50"
                >
                  {{ image.pragraph[locale] }}
                </p>

                <nuxt-link to="/corprate/JoinCorprate">
                  <v-btn class="!bg-main text-white !font-bold my-5">
                    {{ $t("Join Us") }}
                  </v-btn></nuxt-link
                >
              </v-col>

              <v-col cols="12" lg="4" md="4" sm="12">
                <div>
                  <p
                    class="text-white md:w-3/4 font-bold text-xl leading-relaxed md:leading-relaxed relative z-10"
                  >
                    {{ image.subtitletwo.number }} +
                  </p>

                  <p
                    class="text-white md:w-3/4 leading-relaxed md:leading-relaxed relative z-10"
                  >
                    {{ image.subtitletwo[locale] }}
                  </p>
                </div>
                <div class="mt-15">
                  <p
                    class="text-white md:w-3/4 font-bold text-xl leading-relaxed md:leading-relaxed relative z-10"
                  >
                    {{ image.subtitlethree.number }} +
                  </p>
                  <p
                    class="text-white md:w-3/4 leading-relaxed md:leading-relaxed relative z-10"
                  >
                    {{ image.subtitlethree[locale] }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { computed } from "vue";
const { locale } = useI18n(); // This will give you the current locale
const inline = ref(null);

const images = [
  {
    title: {
      ar: "البرنامج التابع لشركاء السفر والوكالات",
      en: "Book your transportati via credit card.",
    },
    subtitle: {
      ar: "احجز خدمات التنقل لعملائك بالمميزات التالية",
      en: "Book your transportation with a click and pay upon arrival or via credit card.",
    },
    pragraph: {
      ar: "خدمة عملاء من الدرجة الأولى.\nأقل سعر لحجز المركبات.\nشبكة واي فاي داخل السيارة.\nإنتظار مجاني في المطار في حال التأخير.\nسيارات حديثة ونظيفة وخالية من الدخان.",
      en: "Experience first-class customer service.\nThe lowest price for vehicle bookings.\nIn-car Wi-Fi available.\nFree waiting time at the airport in case of delays.\nModern, clean, and smoke-free vehicles.",
    },
    subtitletwo: {
      number: "24",
      ar: "وكلاء السفر الذين هم من ضمن البرنامج",
      en: "Book your transportation with a click and pay upon arrival or via credit card.",
    },
    subtitlethree: {
      number: "350000",
      ar: "نسبه الطلبات التي تم ادائها",
      en: "Experience first-class customer service.\nThe lowest price for vehicle bookings.\nIn-car Wi-Fi available.\nFree waiting time at the airport in case of delays.\nModern, clean, and smoke-free vehicles.",
    },

    src: "/img/index/hero3.jpg", // Just the image filename
  },
  // You can add more images here, e.g.:
  // { src: "another-image.png" },
];

const showArrows = computed(() => images.length > 1);
</script>
