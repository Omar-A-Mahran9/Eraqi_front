<template>
  <v-carousel :show-arrows="showArrows" hide-delimiters style="height: 655px">
    <v-carousel-item
      v-for="(image, index) in images"
      :key="index"
      src="/img/index/hero.png"
      cover
    >
      <div class="relative w-full h-full">
        <!-- Overlay positioned behind the content -->
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <!-- Semi-transparent black overlay -->

        <!-- Content above the overlay -->
        <div class="flex flex-col gap-5 justify-center h-full w-full container">
          <div>
            <p
              class="text-2xl md:text-4xl text-white font-bold text-center md:w-2/3 mx-auto leading-relaxed md:leading-relaxed relative z-10"
            >
              {{ image.title[locale] }}
            </p>
          </div>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const { locale } = useI18n(); // This will give you the current locale

const images = [
  {
    title: {
      ar: "احصل ع وسيله مواصلاتك بكبسه زر وبدقائق معدوده احجز الان وادفع عند وصولك او عبر البطاقه الائتمانيه.",
      en: "Book your transportation with a click and pay upon arrival or via credit card.",
    },
    src: "hero.png", // Just the image filename
  },
  // You can add more images here, e.g.:
  // { src: "another-image.png" },
];

const showArrows = computed(() => images.length > 1);
</script>

<style scoped></style>
