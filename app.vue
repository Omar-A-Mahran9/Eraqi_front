<template dir="rtl">
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <div>
      <a
        href="https://wa.me/+966568623333"
        target="_blank"
        class="whatsapp-link"
      >
        <DotLottieVue
          style="height: 50px; width: 50px"
          autoplay
          loop
          src="https://lottie.host/f1de0179-62d7-4b79-be5c-6288da36470b/7his0dZkN5.json"
        />
      </a>

      <!-- Welcome message with cancel icon -->
      <div v-if="showWelcomeMessage" class="welcome-message mb-5">
        <span>{{ message[locale] }}</span>
        <button @click="closeWelcomeMessage" class="close-btn">
          <i class="fa-times">x</i>
          <!-- Font Awesome close icon -->
        </button>
        <div class="whatsapp-pointer"></div>
        <!-- Triangle pointer below the icon -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const config = useRuntimeConfig();

// Get the current locale
const { locale } = useI18n();
const { data, error } = await useFetch(`${config.public.apiBase}general`);

// Initialize the message object with translations for 'ar' and 'en'
const message = ref({
  ar: data?.value?.data?.whatsapp_message, // Arabic message
  en: "Message in English", // English message
});

// Show welcome message after 3 seconds
const showWelcomeMessage = ref(false);

onMounted(() => {
  if (data?.value?.data?.whatsapp_show == 1) {
    setTimeout(() => {
      showWelcomeMessage.value = true;
    }, data?.value?.data?.whatsapp_message_time * 1000);
  } else {
    const showWelcomeMessage = ref(false);
  }
});

// Close welcome message function
const closeWelcomeMessage = () => {
  showWelcomeMessage.value = false;
};
</script>
<style scoped>
/* Add your styles if needed */
.layout[dir="rtl"] {
  text-align: right;
}

.layout[dir="ltr"] {
  text-align: left;
}

.whatsapp-pointer {
  position: absolute;
  bottom: -8px;
  inset-inline-start: 5px; /* 'start' based on LTR/RTL */
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 10px solid #bba664;
}
.whatsapp-link {
  position: fixed;
  bottom: 20px;
  inset-inline-start: 20px; /* 'start' based on LTR/RTL */
  border-radius: 50%;
  padding: 10px;
  font-size: 24px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.whatsapp-link:hover {
  opacity: 1;
}

.welcome-message {
  position: fixed;
  bottom: 70px;
  inset-inline-start: 35px; /* 'start' based on LTR/RTL */
  background-color: #bba764f6;
  color: white;
  font-weight: bold;
  width: 300px;
  /* text-align: justify; */
  font-size: 15px;
  padding: 20px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 1001;
}
.close-btn {
  background: none;
  border: none;
  position: absolute;
  top: 0px;

  right: 10px;
  color: red;

  font-size: 16px;
  cursor: pointer;
  color: #333;
}
</style>
