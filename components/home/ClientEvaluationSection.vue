<template>
  <div id="client_evaluation" class="container my-16">
    <div class="section-head">
      <h1 tag="h1" class="font-weight-bold text-main title">
        {{ $t("Client Evaluation") }}
      </h1>
      <p>
        {{ $t("A system of automatic evaluation after each booking.") }}
      </p>
    </div>
    <div>
      <swiper
        :dir="swiperDirection"
        :initial-slide="Math.floor(ratings.length / 2)"
        :breakpoints="{
          640: {
            // small screens (sm)
            slidesPerView: 1,
          },
          960: {
            // medium screens (md)
            slidesPerView: 3,
          },
        }"
        :pagination="{
          dynamicBullets: true,
          clickable: true,
        }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :modules="[Pagination, Navigation]"
        :space-between="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(rate, index) in ratings" :key="index">
          <div id="swiper-container">
            <v-card
              :disabled="loading"
              :loading="loading"
              class="mx-auto my-12"
              max-width="343"
              style="position: relative; overflow: visible"
            >
              <v-card-item>
                <v-card-title>
                  <div class="flex align-center gap-4">
                    <img
                      :src="rate.person.img"
                      alt=""
                      style="
                        width: 50px; /* Adjust size as needed */
                        height: 50px; /* Match width for a perfect circle */
                        border-radius: 50%; /* Makes the image circular */
                        object-fit: cover; /* Ensures the image fits within the circle */
                      "
                    />

                    <span>{{ getNameByLocale(rate.person.name) }}</span>
                  </div>
                </v-card-title>
                <v-card-subtitle class="mt-5">
                  <span>{{ getNameByLocale(rate.person.title) }}</span>
                </v-card-subtitle>
              </v-card-item>
              <v-card-text>
                <v-row align="center" class="mx-0 my-1">
                  <v-rating
                    :model-value="rate.rating"
                    color="amber"
                    density="compact"
                    size="small"
                    half-increments
                    readonly
                  ></v-rating>
                </v-row>
              </v-card-text>
              <div class="iconQ">
                <img src="/img/index/Question.svg" alt="" />
              </div>
            </v-card>
          </div>
        </swiper-slide>
      </swiper>
      <div
        class="custom-swiper-navigation"
        :dir="locale === 'ar' ? 'rtl' : 'ltr'"
      >
        <button
          class="swiper-button-prev"
          :class="{
            next: locale === 'ar',
            prev: locale !== 'ar',
          }"
        ></button>
        <button
          class="swiper-button-next"
          :class="{
            prev: locale === 'ar',
            next: locale !== 'ar',
          }"
        ></button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css";
const { t, locale } = useI18n();
const props = defineProps({
  data: Object, // Define the prop 'data' as an object
});
// Swiper event handlers
const onSwiper = (swiper) => {
  console.log(swiper);
};
const swiperDirection = ref(locale.value === "ar" ? "rtl" : "ltr");
watch(
  () => locale.value,
  (newLocale) => {
    swiperDirection.value = newLocale === "ar" ? "rtl" : "ltr";
  }
);
const ratings_data = props.data.data.Rate;
// const ratings = [
//   {
//     person: {
//       name: {
//         ar: "احمد محمد", // Arabic name
//         en: "John Doe", // English name
//       },
//       img: "/img/index/person1.svg",
//       title: {
//         ar: "هنساعدك خطوه بخطوه من البدايه للنهاية، من قبل خبراء لمساعدتك على الوصول للقمه",
//         en: "We'll help you step by step from start to finish, guided by experts to help you reach the top.", // English translation
//       },
//     },
//     rating: 4, // Rating out of 5
//   }
// ];

// Map the `ratings_data` to the same structure as the `ratings` array
const ratings = ratings_data.map((rating) => ({
  person: {
    name: {
      ar: rating?.customer_name, // Arabic name from props
      en: rating?.customer_name, // English name from props
    },
    img: rating?.customer_image, // Image from props
    title: {
      ar: rating?.comment, // Arabic title from props
      en: rating?.comment, // English title from props
    },
  },
  rating: rating?.rate, // Rating from props
}));

const onSlideChange = () => {
  console.log("slide change");
};
const getNameByLocale = (nameObj) => {
  return locale.value === "ar" ? nameObj.ar : nameObj.en;
};
</script>

<style scoped>
#swiper-container {
  position: relative;
}
.iconQ {
  position: absolute; /* Position relative to the card */
  inset-inline-end: 2rem; /* Adjust this value as needed */
  top: -1.5rem; /* Adjust this value as needed */
  z-index: 10; /* Use a reasonable z-index */
}

/* Pagination styles */
</style>
