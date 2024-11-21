<template>
  <div id="car_type" class="bg-[#FCFAF5] py-16">
    <div class="container my-5">
      <div class="section-head">
        <h1 tag="h1" class="font-weight-bold text-main title">
          {{ $t("Car types") }}
        </h1>
        <p>
          {{ $t("A system of automatic evaluation after each booking.") }}
        </p>
      </div>
      <div class="">
        <div>
          <v-sheet
            class="mx-auto bg-transparent d-flex justify-center"
            max-width="60%"
          >
            <v-slide-group>
              <v-slide-group-item
                v-for="(category, index) in categories_data"
                :key="category.id"
                v-slot="{ isSelected, toggle }"
              >
                <v-btn
                  :style="{
                    backgroundColor:
                      selectedCategory === index ? '#bba664' : 'transparent',
                    color: selectedCategory === index ? 'white' : 'inherit', // Set text color based on selection
                  }"
                  class="ma-3"
                  @click="selectCategory(index)"
                  flat
                >
                  <p class="font-bold">{{ category.name }}</p>
                </v-btn>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        </div>

        <div>
          <swiper
            :initial-slide="Math.floor(selectedCars.length / 2)"
            :breakpoints="{
              640: { slidesPerView: 1 },
              960: { slidesPerView: 3 },
            }"
            :pagination="{
              dynamicBullets: true,
              clickable: true,
            }"
            :navigation="{
              nextEl: '.swiper-button-next-cars',
              prevEl: '.swiper-button-prev-cars',
            }"
            :modules="[Pagination, Navigation]"
            :space-between="20"
          >
            <div class="d-flex justify-center">
              <swiper-slide v-for="(car, index) in selectedCars" :key="index">
                <v-card
                  class="mx-auto no-border my-6 no-shadow bg-transparent"
                  max-width="352"
                  flat
                >
                  <v-img
                    class="bg-white"
                    :src="car.image[0]"
                    contain
                    cover
                    style="
                      max-width: 352px;
                      max-height: 202px;
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                    "
                  ></v-img>

                  <v-card-item>
                    <v-card-title class="text-center">{{
                      car.name
                    }}</v-card-title>
                  </v-card-item>
                </v-card>
              </swiper-slide>
            </div>
          </swiper>
        </div>
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
// Swiper event handlers
const onSwiper = (swiper) => {
  console.log(swiper);
};

const props = defineProps({
  data: Object, // Define the prop 'data' as an object
});

const categories_data = props.data.data.Categories;

// Data
const selectedCategoryIndex = ref(0);

// Computed Property for Selected Cars
const selectedCars = computed(() => {
  return categories_data[selectedCategoryIndex.value]?.cars || [];
});

// Method to select category
const selectCategory = (index) => {
  selectedCategoryIndex.value = index;
};

const cat = [
  {
    ar: "سيارة اقتصادية",
    en: "Economical Car",
  },
  {
    ar: "سيارة عائلية",
    en: "Family Car",
  },
  {
    ar: "سيارة VIP",
    en: "VIP Car",
  },
  {
    ar: "فئة رجال الأعمال",
    en: "Business Class",
  },
  {
    ar: "المشازير الخاصة",
    en: "Private Transfers",
  },
];

const cars = [
  {
    img: "img/index/car1.svg",
    title: {
      ar: "فورد تورس 2024",
      en: "Ford Taurus 2024",
    },
  },
  {
    img: "img/index/car2.svg",
    title: {
      ar: "كامري",
      en: "Camry",
    },
  },
  {
    img: "img/index/car1.svg",
    title: {
      ar: "فورد تورس 2024",
      en: "Ford Taurus 2024",
    },
  },
  {
    img: "img/index/car3.svg",
    title: {
      ar: "لكزس ES",
      en: "Lexus ES",
    },
  },
];

const onSlideChange = () => {
  console.log("slide change");
};
</script>
