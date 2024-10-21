<template>
  <v-app>
    <div class="bg-[#F6F7F9] p-5">
      <div class="container">
        <div class="text-h6 my-6">
          <h1>{{ $t("Control in your account setting") }}</h1>
        </div>

        <!-- v-sheet containing layout -->
        <v-sheet
          :elevation="1"
          rounded
          class="container py-5"
          style="height: 500px"
        >
          <v-row>
            <!-- Sidebar (v-navigation-drawer) -->
            <v-col cols="3">
              <v-navigation-drawer
                permanent
                class="pa-1"
                style="position: relative; height: 400px"
              >
                <v-list>
                  <v-list density="compact" nav>
                    <v-list-item
                      prepend-icon="mdi-account"
                      value="personal_information"
                      class="list-item"
                      :class="{
                        'active-item': isActive('personal_information'),
                      }"
                      @click="showTabs('personal_information')"
                    >
                      <template v-slot:title>
                        <div class="text-lg">
                          <span class="">{{ $t("Personal profile") }}</span>
                        </div>
                      </template></v-list-item
                    >
                    <v-list-item
                      prepend-icon="mdi-information"
                      class="list-item"
                      :class="{ 'active-item': isActive('more_information') }"
                      value="more_information"
                      @click="showTabs('about')"
                    >
                      <div class="text-lg">
                        <span class="">{{ $t("more information") }}</span>
                      </div></v-list-item
                    >
                  </v-list>
                </v-list>
              </v-navigation-drawer>
            </v-col>
            <v-col cols="9">
              <v-card flat>
                <v-tabs
                  v-model="tab"
                  v-if="showTabContent"
                  background-color="grey-lighten-4"
                >
                  <v-tab value="one">{{ $t("Edit email") }}</v-tab>
                  <v-tab value="two">{{ $t("Edit password") }}</v-tab>
                </v-tabs>

                <v-card-text>
                  <v-tabs-window v-model="tab" v-if="showTabContent">
                    <v-tabs-window-item value="one">
                      <div class="w-50 mt-5">
                        <v-text-field
                          class="mb-4"
                          :placeholder="$t('Email address')"
                          variant="solo"
                          style="border-radius: 25px"
                        >
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          :placeholder="$t('Full name')"
                          variant="solo"
                          style="border-radius: 25px"
                        >
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          :placeholder="$t('Whatsapp phone')"
                          variant="solo"
                          style="border-radius: 25px"
                        >
                          <template v-slot:append>
                            <v-select
                              variant="solo"
                              label="Select"
                              :items="[
                              
                              ]"
                              style="margin-top: -40px"
                            >
                            </v-select>
                          </template>
                        </v-text-field>
                      </div>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="two">
                      <div class="w-50 mt-5">
                        <v-text-field
                          :append-inner-icon="
                            visible ? 'mdi-eye-off' : 'mdi-eye'
                          "
                          :type="visible ? 'text' : 'password'"
                          :placeholder="$t('Current password')"
                          variant="solo"
                          @click:append-inner="visible = !visible"
                        >
                        </v-text-field>
                        <v-text-field
                          :append-inner-icon="
                            visible ? 'mdi-eye-off' : 'mdi-eye'
                          "
                          :type="visible ? 'text' : 'password'"
                          :placeholder="$t('Insert new password')"
                          variant="solo"
                          @click:append-inner="visible = !visible"
                        >
                        </v-text-field>
                        <v-text-field
                          :append-inner-icon="
                            visible ? 'mdi-eye-off' : 'mdi-eye'
                          "
                          :type="visible ? 'text' : 'password'"
                          :placeholder="$t('Confirm password')"
                          variant="solo"
                          @click:append-inner="visible = !visible"
                          class="mb-10"
                        >
                        </v-text-field>
                      </div>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="three">
                      Content for Item Three
                    </v-tabs-window-item>
                  </v-tabs-window>
                  <div v-else>
                    <!-- Content for About section -->
                    <h2>About Us</h2>
                    <p>
                      This is the about section where you can describe your
                      application or organization.
                    </p>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </div>
    </div>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const tab = ref("one"); // Default tab
const showTabContent = ref(true); // Flag to control visibility of tabs

const showTabs = (section) => {
  if (section === "personal_information") {
    showTabContent.value = true; // Show tabs for personal_information
  } else {
    showTabContent.value = false; // Show content for About
  }
};
const isActive = (section) => {
  return (
    (section === "personal_information" && showTabContent.value) ||
    (section === "more_information" && !showTabContent.value)
  );
};
</script>

<style scoped>
.active-item {
  background-color: #bba664; /* Change this to your desired color */
  color: white; /* Optional: Change text color for better contrast */
}
.list-item {
  font-size: 20px;
}
</style>
