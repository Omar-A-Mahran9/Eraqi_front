// Import Material Design Icons
import "@mdi/font/css/materialdesignicons.css";

// Import Vuetify styles
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { mdiAccount } from "@mdi/js";

// Optionally, import locale files (if needed)
import { en, ar } from "vuetify/locale"; // Add more locales as necessary
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        locale: {
            // Define available messages for each locale
            messages: { en, ar },
            rtl: { ar: true }, // Enable RTL for Arabic (ar)
        },
    });

    // Use Vuetify in your Nuxt app
    nuxtApp.vueApp.use(vuetify);
});



// import { createVuetify } from "vuetify";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";

// export default defineNuxtPlugin((nuxtApp) => {
//   const vuetify = createVuetify({
//     ssr: true,
//     components,
//     directives,
//   });

//   nuxtApp.vueApp.use(vuetify);
// });
