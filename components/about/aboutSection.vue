<template>
    <div class="container mt-15 mb-15">
        <div>
            <h1 class="font-bold text-2xl text-main mb-4">
                {{ data.about.title[locale] }}
            </h1>
            <p class="text-justify">{{ data.about.Description[locale] }}</p>
        </div>
        <div id="terms_and_conditions" class="mt-10">
            <h1 class="font-bold text-2xl text-main mb-4">
                {{ data.conditions.title[locale] }}
            </h1>
            <p class="text-justify">
                {{ data.conditions.Description[locale] }}
            </p>
        </div>
        <div id="loyalty" class="mt-10">
            <h1 class="font-bold text-2xl text-main mb-4">
                {{ data.programs.title[locale] }}
            </h1>
            <p class="text-justify">{{ data.programs.Description[locale] }}</p>
        </div>
    </div>
</template>
<script setup>
const { t, locale } = useI18n();

const props = defineProps({
    data: Object, // Define the prop 'data' as an object
});
</script>
