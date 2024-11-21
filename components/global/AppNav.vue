<template>
    <header class="bg-whit shadow-md">
        <nav class="mx-auto flex container items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <nuxt-link to="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">{{ $t("Al Raqi") }}</span>
                    <div v-if="locale === 'ar'" class="d-flex">
                        <img class="h-5 w-auto" src="/img/header/logo.svg" alt="Company logo" />
                    </div>
                    <div v-else>
                        <h1 class="text-main font-bold" style="font-size: 190%">
                            Al Raqi
                        </h1>
                    </div>
                </nuxt-link>
            </div>
            <div class="flex lg:hidden">
                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <PopoverGroup class="hidden lg:flex lg:gap-x-12">
                <nuxt-link to="/" class="text-sm font-semibold leading-6 text-gray-900">{{ $t("Home") }}</nuxt-link>
                <nuxt-link to="#why_us" class="text-sm font-semibold leading-6 text-gray-900">{{ $t("Why us")
                    }}</nuxt-link>
                <nuxt-link to="#car_type" class="text-sm font-semibold leading-6 text-gray-900">{{ $t("Car types")
                    }}</nuxt-link>

                <nuxt-link to="#client_evaluation" class="text-sm font-semibold leading-6 text-gray-900">{{
                    $t("Evaluation") }}</nuxt-link>

                <nuxt-link to="#Frequently_Asked_Questions" class="text-sm font-semibold leading-6 text-gray-900">{{
                    $t("Frequently Asked Questions") }}</nuxt-link>

                <nuxt-link to="#contact_us" class="text-sm font-semibold leading-6 text-gray-900">{{ $t("Contact us")
                    }}</nuxt-link>
            </PopoverGroup>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end align-middle">
                <nuxt-link v-if="!token" to="/auth/login">
                    <v-btn class="!bg-main text-white !font-bold mx-10">
                        {{ $t("Sign in") }}
                    </v-btn></nuxt-link>


                <v-menu v-if="token">
                    <template v-slot:activator="{ props }">
                        <button color="primary" v-bind="props">
                            <div class="mx-5 flex items-center gap-3">
                                <span class="font-bold "> محمد ابراهيم </span>
                                <v-avatar image="/img/index/car2.svg" size="60"></v-avatar>
                            </div>
                        </button>
                    </template>
                    <div class="bg-white shadow-md flex items-center flex-col gap-3 rounded-md py-5">
                        <button class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                fill="none">
                                <path
                                    d="M6.55169 15.5827L6.26836 13.316C6.11489 13.257 5.97039 13.1862 5.83486 13.1035C5.69933 13.0209 5.5664 12.9323 5.43607 12.8379L3.32878 13.7233L1.38086 10.3587L3.20482 8.97747C3.19301 8.89484 3.18711 8.81527 3.18711 8.73877V8.26064C3.18711 8.18367 3.19301 8.10386 3.20482 8.02122L1.38086 6.63997L3.32878 3.27539L5.43607 4.16081C5.56593 4.06636 5.70169 3.97782 5.84336 3.89518C5.98503 3.81254 6.12669 3.74171 6.26836 3.68268L6.55169 1.41602H10.4475L10.7309 3.68268C10.8843 3.74171 11.0291 3.81254 11.1651 3.89518C11.3011 3.97782 11.4338 4.06636 11.5632 4.16081L13.6704 3.27539L15.6184 6.63997L13.7944 8.02122C13.8062 8.10386 13.8121 8.18367 13.8121 8.26064V8.73806C13.8121 8.81503 13.8003 8.89484 13.7767 8.97747L15.6007 10.3587L13.6527 13.7233L11.5632 12.8379C11.4333 12.9323 11.2975 13.0209 11.1559 13.1035C11.0142 13.1862 10.8725 13.257 10.7309 13.316L10.4475 15.5827H6.55169ZM8.53503 10.9785C9.21975 10.9785 9.80412 10.7365 10.2882 10.2525C10.7722 9.76845 11.0142 9.18407 11.0142 8.49935C11.0142 7.81463 10.7722 7.23025 10.2882 6.74622C9.80412 6.2622 9.21975 6.02018 8.53503 6.02018C7.8385 6.02018 7.25105 6.2622 6.77269 6.74622C6.29433 7.23025 6.05539 7.81463 6.05586 8.49935C6.05633 9.18407 6.29551 9.76845 6.7734 10.2525C7.25129 10.7365 7.8385 10.9785 8.53503 10.9785Z"
                                    fill="#263238" />
                            </svg>
                            <span> اعدادات الحساب </span>
                        </button>
                        <button @click="logout()" class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                    d="M2.33398 6.99935C2.33398 7.15406 2.39544 7.30243 2.50484 7.41183C2.61424 7.52122 2.76261 7.58268 2.91732 7.58268H7.34482L6.00315 8.91852C5.94848 8.97274 5.90508 9.03726 5.87546 9.10835C5.84585 9.17943 5.8306 9.25568 5.8306 9.33268C5.8306 9.40969 5.84585 9.48594 5.87546 9.55702C5.90508 9.6281 5.94848 9.69262 6.00315 9.74685C6.05738 9.80152 6.1219 9.84492 6.19298 9.87454C6.26407 9.90415 6.34031 9.9194 6.41732 9.9194C6.49432 9.9194 6.57057 9.90415 6.64165 9.87454C6.71274 9.84492 6.77726 9.80152 6.83148 9.74685L9.16482 7.41352C9.21792 7.35804 9.25955 7.29262 9.28732 7.22102C9.34566 7.079 9.34566 6.9197 9.28732 6.77768C9.25955 6.70608 9.21792 6.64066 9.16482 6.58518L6.83148 4.25185C6.7771 4.19746 6.71253 4.15432 6.64146 4.12488C6.5704 4.09545 6.49424 4.0803 6.41732 4.0803C6.3404 4.0803 6.26423 4.09545 6.19317 4.12488C6.12211 4.15432 6.05754 4.19746 6.00315 4.25185C5.94876 4.30624 5.90562 4.37081 5.87618 4.44187C5.84675 4.51293 5.8316 4.5891 5.8316 4.66602C5.8316 4.74293 5.84675 4.8191 5.87618 4.89016C5.90562 4.96122 5.94876 5.02579 6.00315 5.08018L7.34482 6.41602H2.91732C2.76261 6.41602 2.61424 6.47747 2.50484 6.58687C2.39544 6.69627 2.33398 6.84464 2.33398 6.99935ZM9.91732 1.16602H4.08398C3.61986 1.16602 3.17474 1.35039 2.84655 1.67858C2.51836 2.00677 2.33398 2.45189 2.33398 2.91602V4.66602C2.33398 4.82073 2.39544 4.9691 2.50484 5.07849C2.61424 5.18789 2.76261 5.24935 2.91732 5.24935C3.07203 5.24935 3.2204 5.18789 3.3298 5.07849C3.43919 4.9691 3.50065 4.82073 3.50065 4.66602V2.91602C3.50065 2.76131 3.56211 2.61293 3.67151 2.50354C3.7809 2.39414 3.92927 2.33268 4.08398 2.33268H9.91732C10.072 2.33268 10.2204 2.39414 10.3298 2.50354C10.4392 2.61293 10.5007 2.76131 10.5007 2.91602V11.0827C10.5007 11.2374 10.4392 11.3858 10.3298 11.4952C10.2204 11.6046 10.072 11.666 9.91732 11.666H4.08398C3.92927 11.666 3.7809 11.6046 3.67151 11.4952C3.56211 11.3858 3.50065 11.2374 3.50065 11.0827V9.33268C3.50065 9.17797 3.43919 9.0296 3.3298 8.9202C3.2204 8.81081 3.07203 8.74935 2.91732 8.74935C2.76261 8.74935 2.61424 8.81081 2.50484 8.9202C2.39544 9.0296 2.33398 9.17797 2.33398 9.33268V11.0827C2.33398 11.5468 2.51836 11.9919 2.84655 12.3201C3.17474 12.6483 3.61986 12.8327 4.08398 12.8327H9.91732C10.3814 12.8327 10.8266 12.6483 11.1548 12.3201C11.4829 11.9919 11.6673 11.5468 11.6673 11.0827V2.91602C11.6673 2.45189 11.4829 2.00677 11.1548 1.67858C10.8266 1.35039 10.3814 1.16602 9.91732 1.16602Z"
                                    fill="#FF3333" />
                            </svg>
                            <span class="text-[#FF0000]"> تسجيل الخروج </span>
                        </button>
                    </div>
                </v-menu>


                <div>
                    <v-menu open-on-hover>
                        <template v-slot:activator="{ props }">
                            <div v-bind="props">
                                <span class="d-flex flex-col">
                                    <div>
                                        <div v-if="locale === 'ar'" class="d-flex">
                                            <img class="h-5 w-auto" src="/img/header/saudi_icon.svg" />
                                            <v-icon>mdi-chevron-down</v-icon>
                                        </div>
                                        <div v-else class="d-flex">
                                            <v-icon>mdi-chevron-down</v-icon>
                                            <img class="h-5 w-auto" src="/img/header/american_icon.svg" />
                                        </div>

                                        <!-- Use an icon representing the American flag -->
                                    </div>
                                    <div>
                                        <span v-if="locale === 'ar'">{{
                                            $t("Arabic")
                                        }}</span>
                                        <span v-else class="mx-2">
                                            <!-- Remove this span and use an else statement -->
                                            {{ $t("English") }}
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </template>

                        <v-list>
                            <v-list-item v-for="lang in languages" :key="lang.code"
                                @click="setLocaleAndDirection(lang.code)">
                                <div class="flex flex-col items-center text-center">
                                    <v-list-item-title>
                                        {{ $t(lang.label) }}
                                    </v-list-item-title>
                                    <!-- Downward arrow -->
                                </div>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </div>
        </nav>
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <nuxt-link to="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">{{ $t("Al Raqi") }}</span>

                        <div v-if="locale === 'ar'" class="d-flex">
                            <img class="h-5 w-auto" src="/img/header/logo.svg" alt="Company logo" />
                        </div>
                        <div v-else>
                            <h1 class="text-main font-bold" style="font-size: 190%">
                                Al Raqi
                            </h1>
                        </div>
                    </nuxt-link>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <nuxt-link to="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                    $t("Home") }}</nuxt-link>
                            <nuxt-link to="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                    $t("Why us") }}</nuxt-link>
                            <nuxt-link to="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                    $t("Car types") }}</nuxt-link>

                            <nuxt-link to="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                    $t("Evaluation") }}</nuxt-link>
                            <nuxt-link to="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                    $t("Frequently Asked Questions")
                                }}</nuxt-link>
                            <nuxt-link to="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                    $t("Contact us") }}</nuxt-link>
                        </div>
                        <div class="py-6 d-flex">
                            <div>
                                <v-btn class="!bg-main text-white !font-bold mx-10">
                                    {{ $t("Sign in") }}
                                </v-btn>
                            </div>
                            <div>
                                <v-menu open-on-hover>
                                    <template v-slot:activator="{ props }">
                                        <div v-bind="props">
                                            <span class="d-flex flex-col">
                                                <div>
                                                    <div v-if="locale === 'ar'" class="d-flex">
                                                        <img class="h-5 w-auto" src="/img/header/saudi_icon.svg" />
                                                        <v-icon>mdi-chevron-down</v-icon>
                                                    </div>
                                                    <div v-else class="d-flex">
                                                        <v-icon>mdi-chevron-down</v-icon>
                                                        <img class="h-5 w-auto" src="/img/header/american_icon.svg" />
                                                    </div>

                                                    <!-- Use an icon representing the American flag -->
                                                </div>
                                                <div>
                                                    <span v-if="locale === 'ar'">{{
                                                        $t("Arabic")
                                                        }}</span>
                                                    <span v-else class="mx-2">
                                                        <!-- Remove this span and use an else statement -->
                                                        {{ $t("English") }}
                                                    </span>
                                                </div>
                                            </span>
                                        </div>
                                    </template>

                                    <v-list>
                                        <v-list-item v-for="lang in languages" :key="lang.code" @click="
                                            setLocaleAndDirection(lang.code)
                                            ">
                                            <div class="flex flex-col items-center text-center">
                                                <v-list-item-title>
                                                    {{ $t(lang.label) }}
                                                </v-list-item-title>
                                                <!-- Downward arrow -->
                                            </div>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n"; // Ensure to import this from vue-i18n
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from "@headlessui/vue";
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
} from "@heroicons/vue/20/solid";
import { fa } from "vuetify/locale";
import { useStorage } from '@vueuse/core'

// Locale and language setup
const { locale, setLocale } = useI18n();
const languages = [
    { code: "ar", label: "Arabic", icon: "mdi-saudi-arabia" },
    { code: "en", label: "English", icon: "mdi-flag" },
];

function setLocaleAndDirection(lang) {
    setLocale(lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem("preferredLanguage", lang);
}

let token = computed(()=>{
    return localStorage.getItem('token') ? true : false;
});


const logout = ()=>{
    localStorage.clear("token");
    localStorage.clear("user");
    token.value = false;
    window.location.reload();
}
// watch(()=>  , (val)=>{
//     if(val){
//         console.log('dsdsdsd' , val);
        
//         token.value = true;
//     } else{
//         token.value = false
//     }
// })

// Mobile menu control
const mobileMenuOpen = ref(false);
</script>

<style scoped>
.rotate-180 {
    transform: rotate(180deg);
}

a {
    font-size: 17px;
}
</style>
