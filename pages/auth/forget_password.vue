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
                        {{ $t("Create new password") }}
                    </h1>
                </div>

                <p style="color: gray; font-size: 15px">
                    {{ $t("New password must be change from past password") }}
                </p>
            </div>

            <v-text-field
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                :placeholder="$t('Insert new password')"
                variant="solo"
                @click:append-inner="visible = !visible"
            >
                <template v-slot:prepend-inner>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                    >
                        <path
                            d="M13.4237 7.44804V5.30104C13.4237 2.78804 11.3857 0.750045 8.87273 0.750045C6.35973 0.739045 4.31373 2.76704 4.30273 5.28104V5.30104V7.44804"
                            stroke="#5E6366"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.683 19.25H5.042C2.948 19.25 1.25 17.553 1.25 15.458V11.169C1.25 9.07395 2.948 7.37695 5.042 7.37695H12.683C14.777 7.37695 16.475 9.07395 16.475 11.169V15.458C16.475 17.553 14.777 19.25 12.683 19.25Z"
                            stroke="#5E6366"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M8.86328 12.2031V14.4241"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg> </template
            ></v-text-field>
            <v-text-field
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                :placeholder="$t('Confirm password')"
                variant="solo"
                @click:append-inner="visible = !visible"
                class="mb-10"
            >
                <template v-slot:prepend-inner>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                    >
                        <path
                            d="M13.4237 7.44804V5.30104C13.4237 2.78804 11.3857 0.750045 8.87273 0.750045C6.35973 0.739045 4.31373 2.76704 4.30273 5.28104V5.30104V7.44804"
                            stroke="#5E6366"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.683 19.25H5.042C2.948 19.25 1.25 17.553 1.25 15.458V11.169C1.25 9.07395 2.948 7.37695 5.042 7.37695H12.683C14.777 7.37695 16.475 9.07395 16.475 11.169V15.458C16.475 17.553 14.777 19.25 12.683 19.25Z"
                            stroke="#5E6366"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M8.86328 12.2031V14.4241"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg> </template
            ></v-text-field>

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
                <p class="font-bold">{{ $t("Submit passowrd") }}</p>
            </v-btn>
        </v-card>
    </div>
</template>
<script setup>
const isFocused = false;
</script>
