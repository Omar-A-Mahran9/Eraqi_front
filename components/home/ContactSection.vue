<template>
    <div id="contact_us" class="contact">
        <div class="container py-16">
            <v-row>
                <v-col cols="12" sm="12" md="6" lg="6" class="mb-15">
                    <div class="mb-10">
                        <h1
                            class="text-main font-bold pb-6 title"
                            style="text-align: start"
                        >
                            {{ $t("Contact with us") }}
                        </h1>
                        <p>{{ $t("website mangement by") }}</p>
                        <p>
                            {{ $t("website mangement") }}
                        </p>
                    </div>
                    <v-row align="center" class="mb-6">
                        <v-col cols="2">
                            <img
                                src="~/assets/img/footer/homeicon.svg"
                                class="img-fluid rounded-top"
                                alt=""
                            />
                        </v-col>
                        <v-col cols="8">
                            <h4 class="font-bold text-main">
                                {{ $t("location") }}
                            </h4>
                            <p class="font-light">
                                {{ getAddress }}
                            </p>
                        </v-col>
                    </v-row>
                    <v-row align="center" class="mb-6">
                        <v-col cols="2">
                            <img
                                src="~/assets/img/footer/phone.svg"
                                class="img-fluid rounded-top"
                                alt=""
                            />
                        </v-col>
                        <v-col cols="8">
                            <h4 class="font-bold text-main">
                                {{ $t("phone") }}
                            </h4>
                            <p class="font-light">{{ footer.phone }}</p>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="2">
                            <img
                                src="~/assets/img/footer/email.svg"
                                class="img-fluid rounded-top"
                                alt=""
                            />
                        </v-col>
                        <v-col cols="8">
                            <h4 class="font-bold text-main">
                                {{ $t("Email") }}
                            </h4>
                            <p class="font-light">{{ footer.email }}</p>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-row justify="end">
                        <v-col col="12" sm="12" md="9" lg="9" class="parent">
                            <div class="background-pattern"></div>
                            <div class="background-pattern2"></div>
                            <div class="pizza-slice"></div>

                            <v-card>
                                <v-form>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="state.name"
                                                    :label="$t('Name')"
                                                    hide-details
                                                    dir="rtl"
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="state.email"
                                                    :label="$t('Email')"
                                                    hide-details
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="state.Whatsapp"
                                                    :label="$t('Whatsapp')"
                                                    hide-details
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-textarea
                                                    v-model="state.message"
                                                    :label="$t('Message')"
                                                    hide-details
                                                ></v-textarea>
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-btn
                                                    class="me-4"
                                                    type="submit"
                                                    :style="{
                                                        backgroundColor:
                                                            '#BBA664',
                                                        color: 'white',
                                                        width: '100%',
                                                        height: '50px',
                                                        fontSize: '20px',
                                                        fontWeight: 'bold', // Corrected from font-size to fontSize
                                                    }"
                                                >
                                                    {{ $t("Submit") }}
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-form>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script setup>
const state = {
    name: "",
    email: "",
    Whatsapp: "",
    message: "",
};

defineProps({
    footer: Object, // Define footer as a prop
    getAddress: Function, // Pass getAddress as a prop
});
</script>
<style scoped>
.contact {
    background-color: #d9d9d9;
}
.parent {
    position: relative;
}
.background-pattern {
    opacity: 1;
    background-image: radial-gradient(circle, #13c296 20%, transparent 10%),
        /* Create small circular points */
            radial-gradient(circle, #13c296 20%, transparent 10%),
        radial-gradient(circle, #13c296 20%, transparent 10%),
        radial-gradient(circle, #13c296 20%, transparent 10%);
    background-position: 0px 0, 0px 0, 0 0, 0 0;
    background-size: 6px 6px;
    background-repeat: repeat;
    width: 105px; /* Set to 100% to fill the card */
    height: 133px; /* Set to 100% to fill the card */
    position: absolute; /* Adjusted to relative for proper positioning */
    top: 60px;
    left: -15px;
}

.background-pattern2 {
    opacity: 0.5;
    background-image: radial-gradient(circle, #13c296 20%, transparent 10%),
        /* Create small circular points */
            radial-gradient(circle, #13c296 20%, transparent 10%),
        radial-gradient(circle, #13c296 20%, transparent 10%),
        radial-gradient(circle, #13c296 20%, transparent 10%);
    background-position: 0px 0, 0px 0, 0 0, 0 0;
    background-size: 6px 6px;
    background-repeat: repeat;
    width: 105px; /* Set to 100% to fill the card */
    height: 133px; /* Set to 100% to fill the card */
    position: absolute; /* Adjusted to relative for proper positioning */
    bottom: -15px;
    right: -15px;
}

.pizza-slice {
    border-radius: 50%; /* Keep the rounded edges */
    position: absolute; /* Position it absolutely */
    top: -20px; /* Adjusted to position the slice */
    left: -20px; /* Adjusted to position the slice */
    width: 100px; /* Width of the pizza slice */
    height: 100px; /* Height of the pizza slice */
    background-color: #bba664; /* Orange color for pizza */
    clip-path: polygon(
        0% 70%,
        /* Top left corner */ 0% 0%,
        /* Top left corner */ 60% 0%,
        /* Top right corner */ 60% 70% /* Pointing downwards */
    ); /* Creates a triangular shape pointing upwards */
}

@media screen and (max-width: 960px) {
    .contact {
        background-color: transparent;
    }
}
</style>
