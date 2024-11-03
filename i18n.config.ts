import arfile from "./lang/ar.json"; // Adjust the path to your Arabic language JSON file
import enfile from "./lang/en.json"; // Adjust the path to your Arabic language JSON file

// Function to get preferred language
const getPreferredLanguage = () => {
  let savedLanguage = "ar"; // Default to English

  // Only access localStorage on the client side
  if (!import.meta.env.SSR) {
    const storedLanguage = localStorage.getItem("preferredLanguage");

    if (storedLanguage && ["ar", "en"].includes(storedLanguage)) {
      savedLanguage = storedLanguage; // If valid language is stored, use it
    }
  }

  return savedLanguage;
};

export default defineI18nConfig(() => {
  const preferredLanguage = getPreferredLanguage(); // Get the preferred language

  // Computed property for setting direction
  const direction = preferredLanguage === "ar" ? "rtl" : "ltr";

  // Dynamically set the direction of the document's HTML element
  if (typeof window !== "undefined") {
    document.documentElement.setAttribute("dir", direction);
  }

  return {
    legacy: false,
    locale: preferredLanguage, // Set the preferred language dynamically
    messages: {
      ar: arfile, // Arabic language file
      en: enfile, // Arabic language file
    },
  };
});
