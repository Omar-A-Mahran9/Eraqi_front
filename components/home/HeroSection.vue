<template>
  <v-carousel :show-arrows="showArrows" hide-delimiters style="height: 655px">
    <v-carousel-item
      v-for="(image, index) in images"
      :key="index"
      :src="`${image.src}`"
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
          <div>
            <v-tabs v-model="tab" class="text-white" color="#bca664">
              <div
                :style="{
                  backgroundColor: 'rgba(200, 200, 200, 0.2)',
                  borderTopLeftRadius: locale === 'ar' ? '25px' : '0',
                  borderTopRightRadius: locale === 'en' ? '25px' : '0', // Add border radius for right side in RTL
                }"
              >
                <v-tab
                  v-for="(tabItem, tabIndex) in tabs"
                  :key="tabIndex"
                  :value="tabItem.value"
                  class="no-style-tab text-none custom-tab"
                >
                  <div class="d-flex align-center gap-2 align-center">
                    <span v-html="tabItem.icon"></span>
                    <span class="mt-1">{{ tabItem.title[locale] }}</span>

                    <v-tooltip
                      v-if="tabItem.hint.show"
                      v-model="tooltipVisibility[tabIndex]"
                      location="top"
                      class="custom-tooltip"
                    >
                      <template v-slot:activator="{ props }">
                        <div icon v-bind="props">
                          <v-icon icon="mdi-help-circle" />
                        </div>
                      </template>
                      <span>{{ tabItem.hint[locale] }}</span>
                    </v-tooltip>
                  </div>
                </v-tab>
              </div>
            </v-tabs>
            <v-card>
              <v-card-text>
                <v-tabs-window v-model="tab">
                  <v-tabs-window-item value="one">
                    <v-form v-model="valid">
                      <v-radio-group
                        v-model="inline"
                        inline
                        :dir="locale === 'ar' ? 'rtl' : 'ltr'"
                      >
                        <v-radio
                          class="font-bold"
                          :label="$t('Go only')"
                          value="radio-1"
                        ></v-radio>
                        <v-radio
                          class="font-bold"
                          :label="$t('Go and back')"
                          value="radio-2"
                        ></v-radio>
                      </v-radio-group>
                      <v-row>
                        <v-col cols="12" md="2">
                          <v-select
                            :label="$t('From')"
                            density="compact"
                            :items="[
                              'مطار جدة',
                              'جدة',
                              'المدينة',
                              'الخبر',
                              'مكة المكرمة',
                              'ينبع',
                              'الطائف',
                              'مطار الطائف',
                              'الطائف',
                              'قطار المدينة',
                              'قطار مكة',
                              'من الفندق',
                              'الحرم',
                            ]"
                          ></v-select>
                        </v-col>

                        <v-col cols="12" md="2">
                          <v-select
                            :label="$t('To')"
                            density="compact"
                            :items="[
                              'مطار جدة',
                              'جدة',
                              'المدينة',
                              'الخبر',
                              'مكة المكرمة',
                              'ينبع',
                              'الطائف',
                              'مطار الطائف',
                              'الطائف',
                              'قطار المدينة',
                              'قطار مكة',
                              'من الفندق',
                              'الحرم',
                            ]"
                          ></v-select>
                        </v-col>

                        <v-col cols="12" md="2">
                          <v-select
                            :label="$t('Booking Date')"
                            density="compact"
                            :items="[
                              '08:00 AM',
                              '10:00 AM',
                              '12:00 PM',
                              '02:00 PM',
                              '04:00 PM',
                            ]"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="2">
                          <v-select
                            :label="$t('Time')"
                            density="compact"
                            :items="[
                              'مطار جدة',
                              'جدة',
                              'المدينة',
                              'الخبر',
                              'مكة المكرمة',
                              'ينبع',
                              'الطائف',
                              'مطار الطائف',
                              'الطائف',
                              'قطار المدينة',
                              'قطار مكة',
                              'من الفندق',
                              'الحرم',
                            ]"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="2">
                          <v-select
                            :label="$t('Passengers')"
                            density="compact"
                            :items="['1', '2', '3', '4', '5+']"
                          ></v-select>
                        </v-col>

                        <v-col cols="12" md="2">
                          <v-btn
                            class="!bg-main text-white !font-bold"
                            style="width: 100%; padding: 21px"
                          >
                            {{ $t("Sign in") }}
                          </v-btn>
                        </v-col>
                      </v-row>

                      <div>
                        <p class="text-lg font-bold">
                          {{ $t("Category") }}
                        </p>

                        <v-sheet class="mx-auto" max-width="100%">
                          <v-slide-group show-arrows="false">
                            <v-slide-group-item
                              v-for="(cat, index) in category"
                              :key="index"
                              v-slot="{ isSelected, toggle }"
                            >
                              <v-card class="mx-2" max-width="368">
                                <v-card-title>
                                  {{ $t(cat.title[locale]) }}
                                  <!-- Using $t for translations -->
                                </v-card-title>

                                <v-card-text class="py-0">
                                  <v-row justify="center" align="center">
                                    <v-col class="text-h6" cols="7">
                                      <p class="font-bold">
                                        {{ $t(cat.cars.title[locale]) }}
                                      </p>
                                      <img
                                        :src="`/img/index/${cat.cars.img}`"
                                        alt=""
                                        width="100"
                                      />
                                    </v-col>

                                    <v-col cols="5" justify-center>
                                      <p
                                        class="text-50 font-bold text-base mb-4"
                                      >
                                        {{ cat.cars.price[locale] }}
                                      </p>
                                      <div
                                        class="d-flex gap-3 align-center justify-center"
                                      >
                                        <div>
                                          <div class="d-flex align-center">
                                            <v-icon
                                              icon="mdi-human-handsdown"
                                            ></v-icon>
                                            <p class="font-bold">
                                              x{{ cat.cars.persons }}
                                            </p>
                                          </div>
                                        </div>
                                        <div>
                                          <div
                                            class="d-flex align-items-center"
                                          >
                                            <v-icon
                                              icon="mdi-bag-checked"
                                            ></v-icon>
                                            <p class="font-bold">
                                              x{{ cat.cars.packages }}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </v-col>
                                  </v-row>
                                </v-card-text>
                              </v-card>
                            </v-slide-group-item>
                          </v-slide-group>
                        </v-sheet>
                      </div>
                    </v-form>
                  </v-tabs-window-item>

                  <v-tabs-window-item value="two">
                    <v-form v-model="valid">
                      <v-radio-group
                        v-model="inline"
                        inline
                        :dir="locale === 'ar' ? 'rtl' : 'ltr'"
                      >
                        <v-radio
                          class="font-bold"
                          :label="$t('Go only')"
                          value="radio-1"
                        ></v-radio>
                        <v-radio
                          class="font-bold"
                          :label="$t('Go and back')"
                          value="radio-2"
                        ></v-radio>
                      </v-radio-group>
                      <v-row>
                        <v-col cols="12" md="2">
                          <v-select
                            :label="$t('From')"
                            density="compact"
                            :items="[
                              'مطار جدة',
                              'جدة',
                              'المدينة',
                              'الخبر',
                              'مكة المكرمة',
                              'ينبع',
                              'الطائف',
                              'مطار الطائف',
                              'الطائف',
                              'قطار المدينة',
                              'قطار مكة',
                              'من الفندق',
                              'الحرم',
                            ]"
                          ></v-select>
                        </v-col>

                        <v-col cols="12" md="2">
                          <v-select
                            :label="$t('To')"
                            density="compact"
                            :items="[
                              'مطار جدة',
                              'جدة',
                              'المدينة',
                              'الخبر',
                              'مكة المكرمة',
                              'ينبع',
                              'الطائف',
                              'مطار الطائف',
                              'الطائف',
                              'قطار المدينة',
                              'قطار مكة',
                              'من الفندق',
                              'الحرم',
                            ]"
                          ></v-select>
                        </v-col>

                        <v-col cols="12" md="2">
                          <v-select
                            :label="$t('Booking Date')"
                            density="compact"
                            :items="['2024-11-01', '2024-11-02', '2024-11-03']"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="2">
                          <v-select
                            :label="$t('Time')"
                            density="compact"
                            :items="[
                              '08:00 AM',
                              '10:00 AM',
                              '12:00 PM',
                              '02:00 PM',
                              '04:00 PM',
                            ]"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="2">
                          <v-select
                            :label="$t('Passengers')"
                            density="compact"
                            :items="['1', '2', '3', '4', '5+']"
                          ></v-select>
                        </v-col>

                        <v-col cols="12" md="2">
                          <v-btn
                            class="!bg-main text-white !font-bold"
                            style="width: 100%; padding: 21px"
                          >
                            {{ $t("Sign in") }}
                          </v-btn>
                        </v-col>
                      </v-row>

                      <div>
                        <p class="text-lg font-bold">
                          {{ $t("Category") }}
                        </p>

                        <v-sheet class="mx-auto" max-width="100%">
                          <v-slide-group show-arrows="false">
                            <v-slide-group-item
                              v-for="(cat, index) in category"
                              :key="index"
                              v-slot="{ isSelected, toggle }"
                            >
                              <v-card class="mx-2" max-width="368">
                                <v-card-title>
                                  {{ $t(cat.title[locale]) }}
                                  <!-- Using $t for translations -->
                                </v-card-title>

                                <v-card-text class="py-0">
                                  <v-row justify="center" align="center">
                                    <v-col class="text-h6" cols="7">
                                      <p class="font-bold">
                                        {{ $t(cat.cars.title[locale]) }}
                                      </p>
                                      <img
                                        :src="`/img/index/${cat.cars.img}`"
                                        alt=""
                                        width="100"
                                      />
                                    </v-col>

                                    <v-col cols="5" justify-center>
                                      <p
                                        class="text-50 font-bold text-base mb-4"
                                      >
                                        {{ cat.cars.price[locale] }}
                                      </p>
                                      <div
                                        class="d-flex gap-3 align-center justify-center"
                                      >
                                        <div>
                                          <div class="d-flex align-center">
                                            <v-icon
                                              icon="mdi-human-handsdown"
                                            ></v-icon>
                                            <p class="font-bold">
                                              x{{ cat.cars.persons }}
                                            </p>
                                          </div>
                                        </div>
                                        <div>
                                          <div
                                            class="d-flex align-items-center"
                                          >
                                            <v-icon
                                              icon="mdi-bag-checked"
                                            ></v-icon>
                                            <p class="font-bold">
                                              x{{ cat.cars.packages }}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </v-col>
                                  </v-row>
                                </v-card-text>
                              </v-card>
                            </v-slide-group-item>
                          </v-slide-group>
                        </v-sheet>
                      </div>
                    </v-form>
                  </v-tabs-window-item>

                  <v-tabs-window-item value="two">
                    <v-form v-model="valid">
                      <v-radio-group
                        v-model="inline"
                        inline
                        :dir="locale === 'ar' ? 'rtl' : 'ltr'"
                      >
                        <v-radio
                          class="font-bold"
                          :label="$t('features packages')"
                          value="radio-1"
                        ></v-radio>
                        <v-radio
                          class="font-bold"
                          :label="$t('Islamic packages')"
                          value="radio-2"
                        ></v-radio>
                      </v-radio-group>

                      <div>
                        <p class="text-lg font-light text-gray-400 mb-5">
                          {{ $t("Book with us fully package") }}
                        </p>

                        <v-sheet class="mx-auto" max-width="100%">
                          <v-slide-group show-arrows="false">
                            <v-slide-group-item
                              v-for="(cat, index) in packages"
                              :key="index"
                              v-slot="{ isSelected, toggle }"
                              style="margin: 200px"
                            >
                              <v-card class="mx-auto" width="290">
                                <v-img
                                  height="100px"
                                  :src="`/img/index/${cat.cars.img}`"
                                  alt=""
                                ></v-img>
                                <p class="text-center font-bold">
                                  {{ cat.cars.title[locale] }}
                                  <span>
                                    <span class="mx-1">
                                      <v-icon
                                        icon="mdi-human-handsdown"
                                      ></v-icon>
                                      <span class="font-bold">
                                        x{{ cat.cars.persons }}
                                      </span>
                                    </span>
                                    <span>
                                      <v-icon icon="mdi-bag-checked"></v-icon>
                                      <span class="font-bold">
                                        x{{ cat.cars.packages }}
                                      </span>
                                    </span>
                                  </span>
                                  <span>
                                    {{ cat.cars.price[locale] }}
                                  </span>
                                </p>
                                <v-row class="mx-1 m-auto my-1">
                                  <v-col
                                    v-for="(tag, index) in cat.tags"
                                    :key="tag"
                                    cols="4"
                                  >
                                    <div
                                      class="bg-gray-200 rounded m-auto"
                                      style="
                                        width: 80px;
                                        padding: 5px;
                                        text-align: center;
                                      "
                                    >
                                      <p
                                        style="
                                          font-size: 13px;
                                          line-height: normal;
                                        "
                                      >
                                        {{ tag.title[locale] }}
                                      </p>
                                    </div>
                                  </v-col>
                                </v-row>
                              </v-card>
                            </v-slide-group-item>
                          </v-slide-group>
                        </v-sheet>
                      </div>
                    </v-form>
                  </v-tabs-window-item>
                </v-tabs-window>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { computed } from "vue";
const { locale } = useI18n(); // This will give you the current locale
const tab = ref(null);
const inline = ref(null);

const tabs = [
  {
    title: {
      en: "Journey",
      ar: "رحلة",
    },
    hint: {
      show: true,
      en: "choose your trip",
      ar: "اختر",
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50173 4.75C7.50173 4.5315 9.75973 3 12.0017 3C14.2437 3 16.5017 4.5315 16.5017 4.75C16.5017 5.53 16.4187 5.992 16.3487 6.2435C16.3022 6.4085 16.1477 6.5 15.9762 6.5H8.02723C7.85573 6.5 7.70123 6.4085 7.65473 6.2435C7.58473 5.992 7.50173 5.53 7.50173 4.75ZM11.2517 4.5C11.1191 4.5 10.9919 4.55268 10.8982 4.64645C10.8044 4.74021 10.7517 4.86739 10.7517 5C10.7517 5.13261 10.8044 5.25979 10.8982 5.35355C10.9919 5.44732 11.1191 5.5 11.2517 5.5H12.7517C12.8843 5.5 13.0115 5.44732 13.1053 5.35355C13.199 5.25979 13.2517 5.13261 13.2517 5C13.2517 4.86739 13.199 4.74021 13.1053 4.64645C13.0115 4.55268 12.8843 4.5 12.7517 4.5H11.2517ZM8.02073 9.609C6.35573 9.094 6.77573 8.174 7.41073 7.5H16.7317C17.2397 8.149 17.5122 9.0245 15.9767 9.5485C16.0395 10.1055 15.9845 10.6695 15.8153 11.2039C15.646 11.7383 15.3664 12.2311 14.9945 12.6505C14.6225 13.0698 14.1666 13.4064 13.6563 13.6382C13.1459 13.87 12.5926 13.992 12.032 13.9962C11.4715 14.0005 10.9164 13.8868 10.4026 13.6627C9.88881 13.4386 9.42787 13.109 9.04965 12.6953C8.67144 12.2816 8.38439 11.793 8.20714 11.2613C8.02989 10.7295 7.96638 10.1664 8.02073 9.6085M11.8657 9.9995C13.1867 9.9995 14.2107 9.9295 14.9957 9.8075C15.0215 10.2152 14.9638 10.6238 14.8261 11.0084C14.6884 11.3929 14.4736 11.7453 14.1949 12.0439C13.9162 12.3426 13.5795 12.5811 13.2053 12.745C12.8311 12.9089 12.4275 12.9946 12.019 12.997C11.6105 12.9993 11.2059 12.9182 10.8299 12.7587C10.4538 12.5991 10.1144 12.3645 9.83224 12.0691C9.55012 11.7737 9.33129 11.4238 9.18916 11.0408C9.04704 10.6579 8.98462 10.2499 9.00573 9.842C9.73723 9.943 10.6747 9.9995 11.8657 9.9995ZM16.2102 17.3C15.758 16.5944 15.1355 16.0139 14.4 15.612C13.6646 15.2101 12.8398 14.9996 12.0017 15C11.1633 14.9995 10.3382 15.2099 9.60244 15.6121C8.86671 16.0142 8.24401 16.595 7.79173 17.301C7.62387 17.0425 7.36607 16.8554 7.06823 16.776L6.10223 16.5175C5.78205 16.4317 5.44088 16.4765 5.15377 16.6422C4.86666 16.8079 4.65711 17.0808 4.57123 17.401L4.18323 18.85C4.14073 19.0086 4.12989 19.174 4.15132 19.3367C4.17275 19.4995 4.22603 19.6564 4.30812 19.7986C4.39021 19.9408 4.49949 20.0654 4.62974 20.1653C4.75999 20.2652 4.90865 20.3385 5.06723 20.381L6.03273 20.64C6.19513 20.6837 6.36471 20.6942 6.53124 20.6706C6.69777 20.6471 6.85782 20.5901 7.00173 20.503C7.00213 20.6356 7.05519 20.7626 7.14923 20.8561C7.24328 20.9496 7.37062 21.0019 7.50323 21.0015C7.63584 21.0011 7.76285 20.948 7.85634 20.854C7.94983 20.7599 8.00213 20.6326 8.00173 20.5V20C8.00173 19.8095 8.01523 19.622 8.04073 19.4385L10.6427 20.136C10.7635 20.3945 10.9555 20.6132 11.1962 20.7665C11.437 20.9197 11.7164 21.0011 12.0017 21.0011C12.2871 21.0011 12.5665 20.9197 12.8072 20.7665C13.0479 20.6132 13.2399 20.3945 13.3607 20.136L15.9627 19.4385C15.9882 19.622 16.0017 19.8095 16.0017 20V20.5C16.0011 20.6326 16.0531 20.76 16.1464 20.8543C16.2397 20.9485 16.3666 21.0018 16.4992 21.0025C16.6318 21.0032 16.7593 20.9511 16.8535 20.8578C16.9478 20.7645 17.0011 20.6376 17.0017 20.505C17.2817 20.673 17.6277 20.7315 17.9682 20.64L18.9342 20.3815C19.0928 20.339 19.2415 20.2657 19.3717 20.1658C19.502 20.0659 19.6112 19.9413 19.6933 19.7991C19.7754 19.6569 19.8287 19.5 19.8501 19.3372C19.8716 19.1745 19.8607 19.0091 19.8182 18.8505L19.4297 17.4015C19.3438 17.0813 19.1343 16.8084 18.8472 16.6427C18.5601 16.477 18.2189 16.4322 17.8987 16.518L16.9327 16.7765C16.6356 16.8556 16.3782 17.0424 16.2102 17.3ZM8.30323 18.473C8.57339 17.8199 9.01163 17.2499 9.57341 16.821C10.1352 16.3921 10.8005 16.1195 11.5017 16.031V18.0855C11.2777 18.165 11.0756 18.2965 10.9122 18.4692C10.7488 18.6419 10.6287 18.8509 10.5617 19.079L8.30323 18.473ZM15.7002 18.473C15.43 17.8199 14.9918 17.25 14.43 16.8211C13.8682 16.3921 13.2029 16.1196 12.5017 16.031V18.0855C12.9537 18.2455 13.3067 18.6155 13.4417 19.079L15.7002 18.473ZM12.0017 20C12.1343 20 12.2615 19.9473 12.3553 19.8536C12.449 19.7598 12.5017 19.6326 12.5017 19.5C12.5017 19.3674 12.449 19.2402 12.3553 19.1464C12.2615 19.0527 12.1343 19 12.0017 19C11.8691 19 11.7419 19.0527 11.6482 19.1464C11.5544 19.2402 11.5017 19.3674 11.5017 19.5C11.5017 19.6326 11.5544 19.7598 11.6482 19.8536C11.7419 19.9473 11.8691 20 12.0017 20Z" fill="#bca664"/>
</svg>`,
  },
  {
    title: {
      en: "Per hour",
      ar: "بالساعة",
    },
    hint: {
      show: true,
      en: "choose car per hour with driver to go inside city",
      ar: "احجز سيارة مع سائق بالساعة للتوصيل للتنقل داخل المدينة فقط",
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 16.875C8.64026 16.875 7.31105 16.4718 6.18046 15.7164C5.04987 14.9609 4.16868 13.8872 3.64833 12.6309C3.12798 11.3747 2.99183 9.99237 3.2571 8.65875C3.52238 7.32513 4.17716 6.10013 5.13864 5.13864C6.10013 4.17716 7.32514 3.52237 8.65876 3.2571C9.99238 2.99183 11.3747 3.12798 12.631 3.64833C13.8872 4.16868 14.9609 5.04987 15.7164 6.18045C16.4718 7.31104 16.875 8.64025 16.875 10C16.8729 11.8227 16.1479 13.5702 14.8591 14.8591C13.5702 16.1479 11.8227 16.8729 10 16.875ZM15 10C15 10.1658 14.9342 10.3247 14.8169 10.4419C14.6997 10.5592 14.5408 10.625 14.375 10.625H10C9.83424 10.625 9.67527 10.5592 9.55806 10.4419C9.44085 10.3247 9.375 10.1658 9.375 10V5.625C9.375 5.45924 9.44085 5.30027 9.55806 5.18306C9.67527 5.06585 9.83424 5 10 5C10.1658 5 10.3247 5.06585 10.4419 5.18306C10.5592 5.30027 10.625 5.45924 10.625 5.625V9.375H14.375C14.5408 9.375 14.6997 9.44085 14.8169 9.55806C14.9342 9.67527 15 9.83424 15 10Z" fill="#bca664"/>
</svg>`,
  },
  {
    title: {
      en: "Per Package",
      ar: "بالباقات",
    },
    hint: {
      show: true,
      en: "Choose your package with perfect price",
      ar: "أختر باقتك كاملة بأفضل سعر",
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M11.6704 3.33301H8.32871C5.17871 3.33301 3.60371 3.33301 2.62454 4.30967C1.94954 4.98134 1.74037 5.93551 1.67454 7.49051C1.66204 7.79884 1.65537 7.95384 1.71287 8.05634C1.77121 8.15884 2.00037 8.28801 2.46037 8.54467C2.71949 8.68913 2.93532 8.90016 3.08558 9.15595C3.23583 9.41174 3.31505 9.70302 3.31505 9.99967C3.31505 10.2963 3.23583 10.5876 3.08558 10.8434C2.93532 11.0992 2.71949 11.3102 2.46037 11.4547C2.00037 11.7122 1.77037 11.8405 1.71287 11.943C1.65537 12.0455 1.66204 12.1997 1.67537 12.508C1.74037 14.0638 1.95037 15.018 2.62454 15.6897C3.60287 16.6663 5.17787 16.6663 8.32871 16.6663H11.6704C14.8204 16.6663 16.3954 16.6663 17.3745 15.6897C18.0495 15.018 18.2587 14.0638 18.3245 12.5088C18.337 12.2005 18.3437 12.0455 18.2862 11.943C18.2279 11.8405 17.9987 11.7122 17.5387 11.4547C17.2796 11.3102 17.0638 11.0992 16.9135 10.8434C16.7633 10.5876 16.684 10.2963 16.684 9.99967C16.684 9.70302 16.7633 9.41174 16.9135 9.15595C17.0638 8.90016 17.2796 8.68913 17.5387 8.54467C17.9987 8.28801 18.2287 8.15884 18.2862 8.05634C18.3437 7.95384 18.337 7.79967 18.3237 7.49051C18.2587 5.93551 18.0487 4.98217 17.3745 4.30967C16.3962 3.33301 14.8212 3.33301 11.6704 3.33301Z" stroke="#bca664" stroke-width="1.5"/>
  <path d="M7.5 12.5L12.5 7.5" stroke="#bca664" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M12.9163 12.083C12.9163 12.304 12.8285 12.516 12.6723 12.6723C12.516 12.8285 12.304 12.9163 12.083 12.9163C11.862 12.9163 11.65 12.8285 11.4938 12.6723C11.3375 12.516 11.2497 12.304 11.2497 12.083C11.2497 11.862 11.3375 11.65 11.4938 11.4938C11.65 11.3375 11.862 11.2497 12.083 11.2497C12.304 11.2497 12.516 11.3375 12.6723 11.4938C12.8285 11.65 12.9163 11.862 12.9163 12.083ZM8.74967 7.91634C8.74967 8.13735 8.66188 8.34932 8.5056 8.5056C8.34932 8.66188 8.13735 8.74967 7.91634 8.74967C7.69533 8.74967 7.48337 8.66188 7.32709 8.5056C7.17081 8.34932 7.08301 8.13735 7.08301 7.91634C7.08301 7.69533 7.17081 7.48337 7.32709 7.32709C7.48337 7.17081 7.69533 7.08301 7.91634 7.08301C8.13735 7.08301 8.34932 7.17081 8.5056 7.32709C8.66188 7.48337 8.74967 7.69533 8.74967 7.91634Z" fill="#bca664"/>
</svg>`,
  },
  {
    title: {
      en: "View video",
      ar: "مشاهدة الفيديو",
    },
    hint: {
      show: false,
      en: "",
      ar: "",
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM9.737 7.868L16.211 11.106C16.3771 11.189 16.5169 11.3167 16.6145 11.4747C16.7122 11.6327 16.7639 11.8148 16.7639 12.0005C16.7639 12.1862 16.7122 12.3683 16.6145 12.5263C16.5169 12.6843 16.3771 12.812 16.211 12.895L9.737 16.132C9.55398 16.2236 9.35058 16.2668 9.14614 16.2577C8.94169 16.2485 8.74299 16.1871 8.56892 16.0795C8.39485 15.9719 8.2512 15.8215 8.15163 15.6427C8.05205 15.4639 7.99985 15.2627 8 15.058V8.943C7.99985 8.73835 8.05205 8.53706 8.15163 8.35826C8.2512 8.17947 8.39485 8.02911 8.56892 7.92148C8.74299 7.81386 8.94169 7.75254 9.14614 7.74335C9.35058 7.73416 9.55398 7.77642 9.737 7.868Z" fill="#bca664"/>
  <path d="M16.211 11.1061L9.737 7.86807C9.55398 7.77649 9.35058 7.73323 9.14614 7.74242C8.94169 7.75161 8.74299 7.81293 8.56892 7.92056C8.39485 8.02818 8.2512 8.17854 8.15163 8.35733C8.05205 8.53613 7.99985 8.73742 8 8.94207V15.0581C7.99985 15.2627 8.05205 15.464 8.15163 15.6428C8.2512 15.8216 8.39485 15.972 8.56892 16.0796C8.74299 16.1872 8.94169 16.2485 9.14614 16.2577C9.35058 16.2669 9.55398 16.2237 9.737 16.1321L16.211 12.8941C16.3769 12.8109 16.5164 12.6833 16.6138 12.5254C16.7113 12.3675 16.7629 12.1856 16.7629 12.0001C16.7629 11.8145 16.7113 11.6326 16.6138 11.4747C16.5164 11.3169 16.3769 11.1892 16.211 11.1061Z" stroke="#BBA664" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#bca664"/>
</svg>`,
  },
];
const tooltipVisibility = ref(Array(tabs.length - 1).fill(false));

const category = [
  {
    title: {
      en: "econamic",
      ar: "اقتصادية",
    },

    cars: {
      img: "cartype1.svg",

      title: {
        en: "Camry sonata",
        ar: "كامري/سوناتا",
      },
      price: {
        en: "from 250 SAR",
        ar: "من ٢٥٠ ر.س",
      },
      persons: 4,
      packages: 4,
      imge: "cat1",
    },
  },
  {
    title: {
      en: "family",
      ar: "عائلية",
    },

    cars: {
      img: "cartype2.svg",

      title: {
        en: "Camry sonata",
        ar: "جمس يوكن اكس ال 2024",
      },
      price: {
        en: "from 500 SAR",
        ar: "من ٥٠٠ ر.س",
      },
      persons: 8,
      packages: 8,
      imge: "cat2",
    },
  },
  {
    title: {
      en: "family",
      ar: "عائلية",
    },

    cars: {
      img: "cartype3.svg",
      title: {
        en: "Camry sonata",
        ar: "فان (ستاريا / أتش ون)",
      },
      price: {
        en: "from 400 SAR",
        ar: "من ٤٠٠ ر.س",
      },
      persons: 8,
      packages: 8,
      imge: "",
    },
  },
  {
    title: {
      en: "VIP",
      ar: "VIP",
    },

    cars: {
      img: "cartype4.svg",

      title: {
        en: "لكزس 2024 es",
        ar: "لكزس 2024 es",
      },
      price: {
        en: "from 500 SAR",
        ar: "من ٥٠٠ ر.س",
      },
      persons: 4,
      packages: 4,
      imge: "",
    },
  },
  {
    title: {
      en: "VIP",
      ar: "VIP",
    },

    cars: {
      img: "cartype5.svg",

      title: {
        en: "فورد تورس",
        ar: "فورد تورس",
      },
      price: {
        en: "from 300 SAR",
        ar: "من ٣٠٠ ر.س",
      },
      persons: 4,
      packages: 4,
      imge: "",
    },
  },
  {
    title: {
      en: "Family",
      ar: "عائلية",
    },

    cars: {
      img: "cartype6.svg",

      title: {
        en: "باص هايس",
        ar: "باص هايس",
      },
      price: {
        en: "from 900 SAR",
        ar: "من ٩٠٠ ر.س",
      },
      persons: 30,
      packages: 30,
      imge: "",
    },
  },
];

const packages = [
  {
    cars: {
      img: "cartype6.svg",

      title: {
        en: "Camry sonata",
        ar: "كامري/سوناتا",
      },
      price: {
        en: " 250 SAR",
        ar: " ٢٥٠ ر.س",
      },
      persons: 14,
      packages: 4,
    },
    tags: [
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
    ],
  },
  {
    title: {
      en: "econamic",
      ar: "اقتصادية",
    },

    cars: {
      img: "cartype2.svg",

      title: {
        en: "Camry sonata",
        ar: "كامري/سوناتا",
      },
      price: {
        en: " 250 SAR",
        ar: " ٢٥٠ ر.س",
      },
      persons: 14,
      packages: 4,
      imge: "cat1",
    },
    tags: [
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
    ],
  },
  {
    title: {
      en: "econamic",
      ar: "اقتصادية",
    },

    cars: {
      img: "cartype5.svg",

      title: {
        en: "Camry sonata",
        ar: "كامري/سوناتا",
      },
      price: {
        en: " 250 SAR",
        ar: " ٢٥٠ ر.س",
      },
      persons: 14,
      packages: 4,
      imge: "cat1",
    },
    tags: [
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
    ],
  },
  {
    title: {
      en: "econamic",
      ar: "اقتصادية",
    },

    cars: {
      img: "cartype4.svg",

      title: {
        en: "Camry sonata",
        ar: "كامري/سوناتا",
      },
      price: {
        en: " 250 SAR",
        ar: " ٢٥٠ ر.س",
      },
      persons: 14,
      packages: 4,
      imge: "cat1",
    },
    tags: [
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
    ],
  },
  {
    title: {
      en: "econamic",
      ar: "اقتصادية",
    },

    cars: {
      img: "cartype3.svg",

      title: {
        en: "Camry sonata",
        ar: "كامري/سوناتا",
      },
      price: {
        en: " 250 SAR",
        ar: " ٢٥٠ ر.س",
      },
      persons: 14,
      packages: 4,
      imge: "cat1",
    },
    tags: [
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
    ],
  },
  {
    title: {
      en: "econamic",
      ar: "اقتصادية",
    },

    cars: {
      img: "cartype1.svg",

      title: {
        en: "Camry sonata",
        ar: "كامري/سوناتا",
      },
      price: {
        en: " 250 SAR",
        ar: " ٢٥٠ ر.س",
      },
      persons: 14,
      packages: 4,
      imge: "cat1",
    },
    tags: [
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
    ],
  },
  {
    title: {
      en: "econamic",
      ar: "اقتصادية",
    },

    cars: {
      img: "cartype1.svg",

      title: {
        en: "Camry sonata",
        ar: "كامري/سوناتا",
      },
      price: {
        en: " 250 SAR",
        ar: " ٢٥٠ ر.س",
      },
      persons: 14,
      packages: 4,
      imge: "cat1",
    },
    tags: [
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
    ],
  },
  {
    title: {
      en: "econamic",
      ar: "اقتصادية",
    },

    cars: {
      img: "cartype1.svg",

      title: {
        en: "Camry sonata",
        ar: "كامري/سوناتا",
      },
      price: {
        en: " 250 SAR",
        ar: " ٢٥٠ ر.س",
      },
      persons: 14,
      packages: 4,
      imge: "cat1",
    },
    tags: [
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
    ],
  },
  {
    title: {
      en: "econamic",
      ar: "اقتصادية",
    },

    cars: {
      img: "cartype1.svg",

      title: {
        en: "Camry sonata",
        ar: "كامري/سوناتا",
      },
      price: {
        en: " 250 SAR",
        ar: " ٢٥٠ ر.س",
      },
      persons: 14,
      packages: 4,
      imge: "cat1",
    },
    tags: [
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
      {
        title: {
          ar: "مطار مكة",
          en: "Makka Airport",
        },
      },
      {
        title: {
          ar: "مطار المدينة",
          en: "Medina Airport",
        },
      },
      {
        title: {
          ar: "مطار جدة",
          en: "Jeddah Airport",
        },
      },
    ],
  },
];

const images = [
  {
    title: {
      ar: "احصل ع وسيله مواصلاتك بكبسه زر وبدقائق معدوده احجز الان وادفع عند وصولك او عبر البطاقه الائتمانيه.",
      en: "Book your transportation with a click and pay upon arrival or via credit card.",
    },
    src: "/img/index/hero.png", // Just the image filename
  },
  // You can add more images here, e.g.:
  // { src: "another-image.png" },
];

const showArrows = computed(() => images.length > 1);
</script>

<style scoped>
.custom-tooltip .v-tooltip__content {
  background-color: white; /* Set background color to white */
  color: black; /* Optional: Change text color to black for contrast */
  border: 1px solid #ccc; /* Optional: Add a border */
  border-radius: 4px; /* Optional: Add border radius */
}

.custom-tab:focus {
  background-color: #ffffff !important; /* Change background color on focus */
  color: #bca664 !important; /* Change text color on focus */
}
</style>
