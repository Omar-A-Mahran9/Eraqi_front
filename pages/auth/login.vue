<template>
    <div class="my-16">
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
                    <h1 class="font-semibold">{{ $t("Welcome back") }}</h1>
                </div>

                <p style="color: gray; font-size: 15px">
                    {{ $t("Login to your account") }}
                </p>
            </div>

            <v-text-field
                class="mb-4"
                :placeholder="$t('Email address')"
                variant="solo"
                v-model="store.Formlogin.email"
                style="border-radius: 25px"
            >
                <template v-slot:prepend-inner>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M17.9033 8.85156L13.46 12.4646C12.6205 13.1306 11.4394 13.1306 10.5999 12.4646L6.11914 8.85156"
                            stroke="#6E7079"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z"
                            stroke="#6E7079"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </template>
            </v-text-field>
            <div v-if="store.errorsLogin" class="mb-3 text-[tomato]">{{ store.errorsLogin?.email[0] }}</div>
            <v-text-field
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                :placeholder="$t('Enter your password')"
                variant="solo"
                v-model="store.Formlogin.password"
                @click:append-inner="visible = !visible"
                style="margin-bottom: -12px"
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
            <div v-if="store.errorsLogin" class="mb-3 text-[tomato]">{{ store.errorsLogin?.password[0] }}</div>

            <div
                class="text-medium-emphasis d-flex align-center justify-space-between mb-20"
            >
                <div></div>
                <a
                    class="text-sm text-main"
                    href="forget_password"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {{ $t("Recover password") }}
                </a>
            </div>

            <v-btn
            @click="loginFunc()"
                class="mb-1"
                size="x-large"
                block
                style="
                    background-color: #bba664;
                    color: white;
                    border-radius: 15px;
                "
            >
                <p class="font-bold">{{ $t("Sign in") }}</p>
            </v-btn>

            <v-card-text class="text-center d-flex gap-2 justify-center">
                <p>
                    {{ $t("Not have account ?") }}
                </p>

                <nuxt-link
                    class="text-main text-decoration-none"
                    to="/auth/register"
                    rel="noopener noreferrer"
                >
                    {{ $t("Sign up now") }}
                </nuxt-link>
            </v-card-text>
        </v-card>
    </div>
</template>
<script setup>
import {useAuthStore} from '@/stores/auth';
const store = useAuthStore();
const isFocused = false;
const config = useRuntimeConfig();
const formData = ref({
    email: '',
  password: '',
});

const loginFunc = ()=>{
    console.log('testtttt');
    store.login();
}

let router = useRouter();
const response = ref(null)
const errors = ref(null)
const message = ref(null)

</script>
