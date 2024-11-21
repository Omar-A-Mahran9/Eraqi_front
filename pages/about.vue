<template>
  <AboutHeroSection />
  <AboutSection :data="dataa" />
</template>

<script setup>
const config = useRuntimeConfig();

const { data, error } = await useFetch(`${config.public.apiBase}general`);
console.log(data?.value?.data);

const dataa = {
  about: {
    title: {
      ar: "معلومات عنا",
      en: "About Us",
    },
    Description: {
      ar: data?.value?.data?.about_us?.description,
      en: data?.value?.data?.about_us?.description,
    },
  },
  conditions: {
    title: {
      ar: "الشروط والأحكام",
      en: "Terms and Conditions",
    },
    Description: {
      ar: data?.value?.data?.terms_and_condition,
      en: data?.value?.data?.terms_and_condition,
    },
  },
  programs: {
    title: {
      ar: "برنامج الولاء والمكافآت",
      en: "Loyalty and Rewards Program",
    },
    Description: {
      ar: data?.value?.data?.loyality,
      ar: data?.value?.data?.loyality,
    },
  },
};
</script>
