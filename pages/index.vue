<template>
  <HomeHeroSection />
  <HomeOurService />
  <!-- <HomeWhyUsSection /> -->
  <HomeCarTypesSection />
  <HomeClientEvaluationSection />
  <HomeCommonQuestions />
  <HomeContactSection
    :getAddress="getAddress()"
    :locale="locale"
    :footer="footer"
  />
  <!-- WhatsApp Icon at the bottom -->
</template>

<script setup>
const { locale } = useI18n(); // This will give you the current locale

const footer = {
  email: " info@alraqii.com",
  phone: "+966568623333",
  address: {
    ar: "جدة - الذهب- المملكة العربيه السعودية",
    en: "Gada-Gold-Saudi Arabia",
  },
  copyright: {
    en: "&copy; 2024 elraqi. All rights reserved.",
    ar: "&copy; 2024 الراقي للتوصيل. جميع الحقوق محفوظة.",
  },
  createdBy: {
    en: 'Created by <a href="https://www.linkedin.com/in/omar-a-mahran/" class="text-blue-400 hover:underline">Omar_A_Mahran</a>',
    ar: 'تم الإنشاء بواسطة <a href="https://www.linkedin.com/in/omar-a-mahran/" class="text-blue-400 hover:underline">عمر مهران</a>',
  },
};

// Return the correct address based on the locale
const getAddress = () => {
  return footer.address[locale.value] || footer.address["en"]; // Default to English if locale is not found
};
</script>
