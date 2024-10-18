<template>
    <div id="car_type" class="bg-[#FCFAF5] py-16">
        <div class="container my-5">
            <div class="section-head">
                <h1 tag="h1" class="font-weight-bold text-main title">
                    {{ $t("Car types") }}
                </h1>
                <p>
                    {{
                        $t(
                            "A system of automatic evaluation after each booking."
                        )
                    }}
                </p>
            </div>
            <div>
                <v-sheet class="mx-auto bg-transparent" max-width="60%">
                    <v-slide-group>
                        <v-slide-group-item
                            v-for="(category, index) in cat"
                            :key="index"
                            v-slot="{ isSelected, toggle }"
                        >
                            <v-btn
                                :style="{
                                    backgroundColor: isSelected
                                        ? '#bba664'
                                        : 'transparent',
                                    color: isSelected ? 'white' : 'inherit', // Set text color based on selection
                                }"
                                class="ma-3"
                                @click="toggle"
                                flat
                            >
                                <p class="font-bold">{{ category[locale] }}</p>
                            </v-btn>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>

                <div>
                    <swiper
                        :initial-slide="Math.floor(cars.length / 2)"
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
                            nextEl: '.swiper-button-next-cars',
                            prevEl: '.swiper-button-prev-cars',
                        }"
                        :modules="[Pagination, Navigation]"
                        :space-between="20"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                    >
                        <swiper-slide v-for="(car, index) in cars" :key="index">
                            <div id="swiper-container">
                                <template>
                                    <v-card
                                        :disabled="loading"
                                        :loading="loading"
                                        class="mx-auto no-border my-6 no-shadow bg-transparent"
                                        max-width="352"
                                        flat
                                    >
                                        <template v-slot:loader="{ isActive }">
                                            <v-progress-linear
                                                :active="isActive"
                                                color="deep-purple"
                                                height="4"
                                                indeterminate
                                            ></v-progress-linear>
                                        </template>

                                        <v-img
                                            class="bg-white"
                                            :src="`/assets/img/index/${car.img}`"
                                            cover
                                        ></v-img>

                                        <v-card-item>
                                            <v-card-title class="text-center">{{
                                                car.title[locale]
                                            }}</v-card-title>
                                        </v-card-item>
                                    </v-card>
                                </template>
                            </div>
                        </swiper-slide>
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

const cars = [
    {
        img: "car1.svg",
        title: {
            ar: "فورد تورس 2024",
            en: "Ford Taurus 2024",
        },
    },
    {
        img: "car2.svg",
        title: {
            ar: "كامري",
            en: "Camry",
        },
    },
    {
        img: "car1.svg",
        title: {
            ar: "فورد تورس 2024",
            en: "Ford Taurus 2024",
        },
    },
    {
        img: "car3.svg",
        title: {
            ar: "لكزس ES",
            en: "Lexus ES",
        },
    },
];

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

const onSlideChange = () => {
    console.log("slide change");
};
</script>
