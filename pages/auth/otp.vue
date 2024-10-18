<template>
    <div class="my-16 container">
        <v-card
            class="mx-auto pa-12 pb-3"
            elevation="1"
            max-width="520"
            rounded="lg"
        >
            <div
                class="mx-auto d-flex flex-col justify-contnet-center align-center mb-10 text-center"
            >
                <div class="text-h6">
                    <h1 class="font-semibold">
                        {{ $t("Confirm Phone number") }}
                    </h1>
                </div>

                <p style="color: gray; font-size: 15px">
                    {{ $t("massege send to whatsapp number") }}
                    <span>0577738783884</span>
                    <NuxtLink to="/auth/register" class="text-main">{{
                        $t("Edit")
                    }}</NuxtLink>
                </p>
            </div>
            <v-otp-input
                variant="solo"
                :length="4"
                :type="'number'"
                class="mb-10"
            ></v-otp-input>
            <v-btn
                class="mb-1"
                size="x-large"
                block
                style="
                    background-color: #bba664;
                    color: white;
                    border-radius: 15px;
                "
            >
                <p class="font-bold">{{ $t("Send") }}</p>
            </v-btn>
            <div
                class="mx-auto d-flex flex-col justify-contnet-center align-center mb-10"
            >
                <p style="color: gray; font-size: 15px">
                    {{ $t("Resend otp during") }}

                    <span class="text-main">{{ 3 + " " + $t("second") }}</span>
                </p>
            </div>
        </v-card>
    </div>
</template>
<script setup>
const isFocused = false;
</script>
