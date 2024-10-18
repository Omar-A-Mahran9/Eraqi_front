<template>
    <div id="Frequently_Asked_Questions" class="py-16">
        <div class="container my-5">
            <div class="section-head mb-12">
                <h1
                    tag="h1"
                    class="font-weight-bold text-black title border-b-2 border-b-black"
                >
                    {{ $t("Common Questions") }}
                </h1>
            </div>

            <div>
                <v-row
                    justify="center"
                    v-for="(question, index) in Questions"
                    :key="index"
                    class="w-100 w-md-75 mx-auto"
                >
                    <v-col class="mx-auto p-5">
                        <v-card>
                            <v-sheet
                                class="w-100 p-5 cursor-pointer"
                                style="width: 100% !important"
                            >
                                <v-row
                                    class="w-100"
                                    justify="space-between"
                                    align="center"
                                    @click="expand[index] = !expand[index]"
                                >
                                    <v-col cols="9">
                                        <span class="text-base font-bold">{{
                                            question.question[locale]
                                        }}</span>
                                    </v-col>
                                    <v-col class="text-end text-white" cols="3">
                                        <v-icon
                                            class="bg-[#BBA664] rounded p-2"
                                            :size="30"
                                        >
                                            {{
                                                expand[index]
                                                    ? "mdi-chevron-up"
                                                    : "mdi-chevron-down"
                                            }}
                                        </v-icon>
                                    </v-col>
                                </v-row>
                            </v-sheet>

                            <v-card-text v-show="expand[index]">
                                <p>{{ question.answer[locale] }}</p>
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <div class="mx-4 hidden-sm-and-down"></div>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const { locale, setLocale } = useI18n();
const expand = ref(Array(6).fill(false)); // Initialize an array of false values based on the number of questions

const Questions = [
    {
        question: {
            ar: "كيف يمكنني الحجز ؟",
            en: "How can I book?",
        },
        answer: {
            ar: "يتم التوصيل الى الفندق مباشرةيتم استقبال المعتمر أو الزائر بسيارة مرخصه للدخول الى الحرم مباشرة أو الفندق الذي قمت بالحجز فية دون المرور بباصات كدي.يمكنك الحجز عبر موقعنا الإلكتروني أو من خلال الاتصال بنا مباشرة.",
            en: "You can book through our website or by contacting us directly.",
        },
    },
    {
        question: {
            ar: "هل يتم التوصيل الى الفندق مباشرة أو النزول في باصات كدي؟",
            en: "Is the delivery to the hotel directly or will it be at the Kadi buses?",
        },
        answer: {
            ar: "نعم، نقدم خدمة التوصيل إلى الفندق مباشرة، دون الحاجة لاستخدام باصات كدي.",
            en: "Yes, we provide direct delivery to the hotel without needing to use Kadi buses.",
        },
    },
    {
        question: {
            ar: "كيف يتم استقبال الضيف من المطار؟",
            en: "How is the guest received at the airport?",
        },
        answer: {
            ar: "يتم استقبال الضيف من المطار بسيارة مرخصة تتواجد في صالة الوصول.",
            en: "The guest is received at the airport by a licensed vehicle waiting in the arrival hall.",
        },
    },
    {
        question: {
            ar: "هل توفرون حجز في فنادق مكة ؟",
            en: "Do you provide bookings at hotels in Mecca?",
        },
        answer: {
            ar: "نعم، نحن نقدم خيارات حجز متنوعة في فنادق مكة.",
            en: "Yes, we offer a variety of booking options at hotels in Mecca.",
        },
    },
    {
        question: {
            ar: "ماهي موديلات السيارات المتوفرة ؟",
            en: "What car models are available?",
        },
        answer: {
            ar: "لدينا مجموعة متنوعة من السيارات، بما في ذلك سيارات السيدان، SUVs، والحافلات.",
            en: "We have a variety of cars available, including sedans, SUVs, and buses.",
        },
    },
    {
        question: {
            ar: "كيف يمكنني الدفع ؟",
            en: "How can I pay?",
        },
        answer: {
            ar: "يمكنك الدفع عبر الإنترنت باستخدام بطاقات الائتمان أو النقد عند الاستلام.",
            en: "You can pay online using credit cards or in cash upon delivery.",
        },
    },
];
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
