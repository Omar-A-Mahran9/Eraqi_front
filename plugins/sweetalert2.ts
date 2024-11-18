// plugins/sweetalert2.ts
import Swal from "sweetalert2";

export default defineNuxtPlugin((nuxtApp) => {
  // Inject SweetAlert2 globally
  nuxtApp.provide("swal", Swal);
});
