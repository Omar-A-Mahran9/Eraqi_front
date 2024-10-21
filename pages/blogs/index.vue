<template>
  <div id="client_evaluation" class="container my-16">
    <div class="section-head">
      <h1 tag="h1" class="font-weight-bold text-main title">
        {{ $t("our blog") }}
      </h1>
      <p>
        {{ $t("A system of automatic evaluation after each booking.") }}
      </p>
    </div>
    <div>
      <swiper
        :dir="swiperDirection"
        :breakpoints="{
          640: {
            slidesPerView: 1,
          },
          960: {
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
        <swiper-slide v-for="(blog, index) in blogs" :key="index">
          <v-card
            :disabled="loading"
            :loading="loading"
            class="mx-auto my-12 rounded-xl"
            max-width="374"
          >
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" :src="blog.imageUrl" cover></v-img>

            <v-card-item>
              <v-card-title>{{ blog.title[locale] }}</v-card-title>
            </v-card-item>

            <v-card-text>
              <div>{{ blog.description[locale] }}</div>
            </v-card-text>

            <div class="d-flex justify-space-between">
              <v-list-item density="compact" prepend-icon="mdi-calendar-blank">
                <v-list-item-subtitle>{{ blog.date }}</v-list-item-subtitle>
              </v-list-item>

              <v-card-actions>
                <NuxtLink :to="`/blogs/${blog.id}`" class="text-main">
                  <p class="text-main">{{ $t("Read more") }} >></p>
                </NuxtLink>
              </v-card-actions>
            </div>
          </v-card>
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
import { ref, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const { t, locale } = useI18n();

// Sample blogs data
const blogs = ref([
  {
    id: 1,
    title: {
      ar: "بلوج",
      en: "Blog 1",
    },
    imageUrl: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
    description: {
      ar: "هذا هو بلوج",
      en: "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    },

    date: "1/10/2021",
  },
  {
    id: 1,
    title: {
      ar: "بلوج",
      en: "Blog 1",
    },
    imageUrl: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
    description: {
      ar: "هذا هو بلوج",
      en: "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    },

    date: "1/10/2021",
  },
  {
    id: 1,
    title: {
      ar: "بلوج",
      en: "Blog 1",
    },
    imageUrl: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
    description: {
      ar: "هذا هو بلوج",
      en: "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    },

    date: "1/10/2021",
  },
  {
    id: 1,
    title: {
      ar: "بلوج",
      en: "Blog 1",
    },
    imageUrl: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
    description: {
      ar: "هذا هو بلوج",
      en: "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    },

    date: "1/10/2021",
  },
  {
    id: 1,
    title: {
      ar: "بلوج",
      en: "Blog 1",
    },
    imageUrl: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
    description: {
      ar: "هذا هو بلوج",
      en: "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    },

    date: "1/10/2021",
  },
]);

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
</script>

<style scoped>
#swiper-container {
  position: relative;
}

/* Pagination styles */
.custom-swiper-navigation {
  display: flex;
}
</style>
