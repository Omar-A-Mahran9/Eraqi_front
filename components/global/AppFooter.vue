<template>
  <div class="bg-[#5C5C5C] text-white py-16">
    <footer class="footer container">
      <v-row>
        <v-col class="hidden md:block" md="3">
          <div class="mb-5">
            <nuxt-link x to="/">
              <span class="sr-only">{{ $t("Al Raqi") }}</span>
              <div v-if="locale === 'ar'" class="d-flex">
                <img
                  class="h-5 w-auto"
                  src="/img/header/logo.svg"
                  alt="Company logo"
                />
              </div>
              <div v-else>
                <h1 class="text-main font-bold" style="font-size: 190%">
                  Al Raqi
                </h1>
              </div>
            </nuxt-link>
          </div>
          <v-row align="center">
            <v-col cols="3">
              <img
                src="/img/footer/homeicon.svg"
                class="img-fluid rounded-top"
                alt=""
              />
            </v-col>
            <v-col cols="8">
              <h4 class="font-bold text-main">
                {{ $t("location") }}
              </h4>
              <p class="font-light">
                {{ getAddress() }}
              </p></v-col
            >
          </v-row>
          <v-row align="center">
            <v-col cols="3">
              <img
                src="/img/footer/phone.svg"
                class="img-fluid rounded-top"
                alt=""
              />
            </v-col>
            <v-col cols="8">
              <h4 class="font-bold text-main">
                {{ $t("phone") }}
              </h4>
              <p class="font-light">
                {{ footer.phone }}
              </p></v-col
            >
          </v-row>
          <v-row align="center">
            <v-col cols="3">
              <img
                src="/img/footer/email.svg"
                class="img-fluid rounded-top"
                alt=""
              />
            </v-col>
            <v-col cols="8">
              <h4 class="font-bold text-main">
                {{ $t("Email") }}
              </h4>
              <p class="font-light">
                {{ footer.email }}
              </p></v-col
            >
          </v-row>
        </v-col>
        <v-col cols="12" md="3">
          <div @click="toggleMenu" class="d-flex align-center justify-between">
            <h1 class="text-main font-bold pb-3" style="font-size: 20px">
              {{ $t("departments") }}
            </h1>
            <div
              class="md:hidden"
              :class="[
                'arrow',
                {
                  'arrow-up': menuOpen,
                  'arrow-down': !menuOpen,
                },
              ]"
            ></div>
          </div>

          <ul
            class="text-white md:block"
            :class="{ hidden: !menuOpen, block: menuOpen }"
          >
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("Home") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("Why us") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("Car types") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("Evaluation") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("Frequently Asked Questions") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("Contact us") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("paper") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("advertising") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("reservation") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("pricing") }}</nuxt-link
              >
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <div @click="toggleMenu2" class="d-flex align-center justify-between">
            <h1 class="text-main font-bold pb-3" style="font-size: 20px">
              {{ $t("links") }}
            </h1>
            <div
              class="md:hidden"
              :class="[
                'arrow',
                {
                  'arrow-up': menuOpen2,
                  'arrow-down': !menuOpen2,
                },
              ]"
            ></div>
          </div>

          <ul
            class="md:block"
            :class="{ hidden: !menuOpen2, block: menuOpen2 }"
          >
            <li>
              <nuxt-link
                to="/about/#loyalty"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("loyalty and rewards program") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("for travel and tourism agencies") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/corprate"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("become a partner") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/about/#terms_and_conditions"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("terms and conditions") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("privacy policy") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/blogs"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("our blog") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("hotels") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-white"
                >{{ $t("packages") }}</nuxt-link
              >
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <div @click="toggleMenu3" class="d-flex align-center justify-between">
            <h1 class="text-main font-bold pb-6" style="font-size: 20px">
              {{ $t("Contact with us") }}
            </h1>
            <div
              class="md:hidden"
              :class="[
                'arrow',
                {
                  'arrow-up': menuOpen3,
                  'arrow-down': !menuOpen3,
                },
              ]"
            ></div>
          </div>

          <div
            class="md:block"
            :class="{ hidden: !menuOpen3, block: menuOpen3 }"
          >
            <v-row align="center">
              <a
                :href="data?.data?.facebook_link"
                style="display: flex; width: 100%; text-decoration: none"
              >
                <v-col cols="2">
                  <img
                    src="/img/footer/Facebook.svg"
                    class="img-fluid rounded-top"
                    alt="Facebook"
                  />
                </v-col>
                <v-col cols="8">
                  <p class="font-light">
                    {{ $t("Facebook") }}
                  </p>
                </v-col>
              </a>
            </v-row>
            <v-row align="center">
              <a
                :href="data?.data?.twitter_link"
                style="
                  display: flex;
                  width: 100%;
                  text-decoration: none;
                  align-items: center;
                "
              >
                <v-col cols="2">
                  <img
                    src="/img/footer/TWITER.svg"
                    class="img-fluid rounded-top"
                    alt="Twitter"
                  />
                </v-col>
                <v-col cols="8">
                  <p class="font-light">
                    {{ $t("Twitter") }}
                  </p>
                </v-col>
              </a>
            </v-row>

            <v-row align="center">
              <a
                :href="data?.data?.instagram_link"
                style="
                  display: flex;
                  width: 100%;
                  text-decoration: none;
                  align-items: center;
                "
              >
                <v-col cols="2">
                  <img
                    src="/img/footer/inst.svg"
                    class="img-fluid rounded-top"
                    alt="Instagram"
                  />
                </v-col>
                <v-col cols="8">
                  <p class="font-light">
                    {{ $t("Instagram") }}
                  </p>
                </v-col>
              </a>
            </v-row>

            <v-row align="center">
              <a
                :href="'https://wa.me/' + data?.data?.whatsapp_number"
                style="
                  display: flex;
                  width: 100%;
                  text-decoration: none;
                  align-items: center;
                "
              >
                <v-col cols="2">
                  <img
                    src="/img/footer/whats.svg"
                    class="img-fluid rounded-top"
                    alt="WhatsApp"
                  />
                </v-col>
                <v-col cols="8">
                  <p class="font-light">
                    {{ $t("whatsapp") }}
                  </p>
                </v-col>
              </a>
            </v-row>
          </div></v-col
        >
      </v-row>
      <div class="d-flex flex-col justify-center align-center mb-13 mt-10">
        <hr
          width="100%"
          class="mb-5"
          style="border-color: white; border-width: 1px; opacity: 0.3"
        />
        <hr
          width="95%"
          style="border-color: white; border-width: 1px; opacity: 0.3"
        />
      </div>

      <v-sheet class="mx-auto" style="background: none; width: 100%">
        <v-slide-group show-arrows="false" style="width: 100%">
          <div class="d-flex m-auto">
            <v-slide-group-item v-for="(bank, index) in banks" :key="index">
              <div style="display: block; margin: auto; width: 8%">
                <img class="mt-5" :src="bank.logo" alt="Bank logo" />
              </div>
            </v-slide-group-item>
          </div>
        </v-slide-group>
      </v-sheet>

      <div style="width: 15%; margin: auto; margin-top: 40px">
        <img
          :src="`/img/footer/bank8.svg`"
          alt="Bank logo"
          style="margin: auto"
        />
      </div>

      <div class="mt-9 md:mt-0">
        <p class="text-sm text-center" v-html="footer.copyright[locale]"></p>
        <div class="text-sm text-center">
          <span v-html="footer.createdBy[locale]"></span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { locale } = useI18n(); // This will give you the current locale
import { ref } from "vue"; // Import ref from Vue
const config = useRuntimeConfig();

const { data, error } = await useFetch(`${config.public.apiBase}general`);

const footer = {
  email: data?.value?.data?.email,
  phone: data?.value?.data?.sms_number,
  address: {
    ar: data?.value?.data?.address_ar,
    en: data?.value?.data?.address_en,
  },
  copyright: {
    en: "&copy; 2024 elraqi. All rights reserved.",
    ar: "&copy; 2024 الراقي للتوصيل. جميع الحقوق محفوظة.",
  },
  createdBy: {
    // en: 'Created by <a href="https://www.linkedin.com/in/omar-a-mahran/" class="text-blue-400 hover:underline">Omar_A_Mahran</a>',
    // ar: 'تم الإنشاء بواسطة <a href="https://www.linkedin.com/in/omar-a-mahran/" class="text-blue-400 hover:underline">عمر مهران</a>',
  },
};
const getAddress = () => {
  return footer.address[locale.value] || footer.address["en"]; // Default to English if locale is not found
};
const banks = [
  { name: "BNI", logo: "/img/footer/bank1.svg" },
  { name: "BNI", logo: "/img/footer/bank2.svg" },
  { name: "BNI", logo: "/img/footer/bank3.svg" },
  { name: "BNI", logo: "/img/footer/bank4.svg" },
  { name: "BNI", logo: "/img/footer/bank5.svg" },
  { name: "BNI", logo: "/img/footer/bank6.svg" },
  { name: "BNI", logo: "/img/footer/bank7.svg" },
];
// Function to return the correct address based on the locale

const menuOpen = ref(false); // Reactive reference for menu state
const menuOpen2 = ref(false); // Reactive reference for menu state
const menuOpen3 = ref(false); // Reactive reference for menu state

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value; // Toggle menu state
};
const toggleMenu2 = () => {
  menuOpen2.value = !menuOpen2.value; // Toggle menu state
};
const toggleMenu3 = () => {
  menuOpen3.value = !menuOpen3.value; // Toggle menu state
};
</script>

<style scoped>
/* Styling for the arrow */
.arrow {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  transition: all 0.3s ease; /* Smooth transition */
}

.arrow-down {
  border-top: 10px solid #bba664; /* Arrow pointing down */
  margin-left: 10px; /* Space between title and arrow */
}

.arrow-up {
  border-bottom: 10px solid #bba664; /* Arrow pointing up */
  margin-left: 10px; /* Space between title and arrow */
}
</style>
