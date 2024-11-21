<template>
    <div class="container min-h-[100vh] mt-15">
        <div class="">
            <div class="mb-10 ">
                <v-radio-group v-model="inline" inline :dir="locale == 'ar' ? 'rtl' : 'ltr'">
                    <v-radio color="#BBA664" label="ذهاب و عودة" value="radio-1"></v-radio>
                    <v-radio color="#BBA664" label="ذهاب فقط" value="radio-2"></v-radio>
                </v-radio-group>
            </div>
            <div class="grid grid-cols-4 gap-4">
                <div class="input col-span-2 flex flex-col gap-2">
                    <label for="" class="font-bold mb-2"> المغادرة من </label>
                    <v-text-field placeholder="البلد  /  المدينة" :dir="locale == 'ar' ? 'rtl' : 'ltr'"
                        append-inner-icon="mdi-map-marker" label="" class="" variant="solo-filled"></v-text-field>
                </div>
                <div class="input col-span-2 flex flex-col gap-2">
                    <label for="" class="font-bold mb-2"> الوجهه الي </label>
                    <v-text-field placeholder="البلد  /  المدينة" :dir="locale == 'ar' ? 'rtl' : 'ltr'"
                        append-inner-icon="mdi-map-marker" label="" class="" variant="solo-filled"></v-text-field>
                </div>
                <div class="input col-span-1 flex flex-col gap-2">
                    <label for="" class="font-bold mb-2"> المغادرة </label>
                    <v-text-field placeholder="التاريخ" :dir="locale == 'ar' ? 'rtl' : 'ltr'"
                        append-inner-icon="mdi-map-marker" label="" class="" variant="solo-filled"></v-text-field>
                </div>
                <div class="input flex col-span-1 flex-col gap-2">
                    <label for="" class="font-bold mb-2"> العودة </label>
                    <v-text-field placeholder=" التاريخ " :dir="locale == 'ar' ? 'rtl' : 'ltr'"
                        append-inner-icon="mdi-calendar-multiselect-outline" label="" class="" variant="solo-filled"></v-text-field>
                </div>

                <div class="input flex flex-col col-span-2 gap-2">
                    <label for="" class="font-bold mb-2"> المسافرين </label>
                    <v-text-field placeholder=" مسافر / سائح " :dir="locale == 'ar' ? 'rtl' : 'ltr'"
                        append-inner-icon="mdi-account" label="" class="" variant="solo-filled"></v-text-field>
                </div>
            </div>
            <div class="flex items-center justify-center mt-10">
                <button class="bg-main text-white rounded-lg px-15 py-4"> ابدا </button>
            </div>

        </div>
    </div>
</template>
<script setup>
let inline = ref();
const selectedCard = ref(1)
let actOption = ref(1);

const { t, locale } = useI18n();
</script>
<style lang="">

</style>