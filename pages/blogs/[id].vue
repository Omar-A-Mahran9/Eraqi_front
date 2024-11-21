<template>
  <div class="container my-10">
    <v-card flat>
      <v-card-item>
        <v-row>
          <v-col>
            <div class="main-img">
              <img
                :src="blog.full_image_path"
                alt="Cooking illustration"
                class="cover-image"
              />
            </div>
          </v-col>
        </v-row>
      </v-card-item>

      <v-card-title class="mt-5">
        <div class="text-h6">
          <p class="font-bold">
            {{ $t(blog.title[locale]) }}
          </p>
        </div>
      </v-card-title>
      <v-card-subtitle></v-card-subtitle>

      <v-card-text>
        <p class="text-justify" style="line-height: 50px">
          {{ $t(blog.description[locale]) }}
        </p>
      </v-card-text>
      <div class="d-flex justify-between container">
        <p></p>
        <p class="font-bold text-end">{{ blog.date }}</p>
      </div>
    </v-card>
  </div>

  <div class="container my-16">
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
const route = useRoute();

const config = useRuntimeConfig();
const { data, error } = await useFetch(
  `${config.public.apiBase}blog/${route.params.id}`
);
const relatedBlogs = data?.value?.data?.relatedBlogs.map((blog) => ({
  id: blog.id,
  title: {
    ar: blog.name, // Assuming 'name' is the field for the title
    en: blog.name, // If your API provides titles in different languages, adjust as needed
  },
  imageUrl: blog.full_image_path, // Assuming 'image' is the URL for the image
  description: {
    ar: blog.description, // Assuming 'description' is the field for the blog's description
    en: blog.description, // If you have translations, you can adjust this accordingly
  },
  date: blog.created_at ? new Date(blog.created_at).toLocaleDateString() : "", // Format the date if necessary
}));

// If you want to assign this to a reactive `ref` in Vue
const blogs = ref(relatedBlogs);
const blog = {
  full_image_path: data?.value?.data?.full_image_path,
  date: data?.value?.data?.created_at,
  title: {
    ar: data?.value?.data?.name,
    en: data?.value?.data?.name,
  },
  description: {
    ar: data?.value?.data?.description,
    ar: data?.value?.data?.description,
  },
};

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
.cover-image {
  height: 500px;
  width: 100%; /* Make the image take the full width of the container */
  object-fit: cover; /* Cover the entire area while maintaining the aspect ratio */
  border-radius: 25px;
}
#swiper-container {
  position: relative;
}

/* Pagination styles */
.custom-swiper-navigation {
  display: flex;
}

@media screen and (max-width: 992px) {
  .cover-image {
    height: 200px !important; /* Adjust this value based on your design */
  }
}
</style>
