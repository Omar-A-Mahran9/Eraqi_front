import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null, // Holds the logged-in user data
        token: null, // Holds the authentication token
        errorsLogin: undefined,
        errorsRegister: undefined,
        otpNum: null,
        errorOtp: undefined,
        Formlogin:{
         email:"",
         password:""
        },
        formRegister:{
            full_name:"",
            phone:"",
            email:"",
            password:"",
            privacy_flag: 1
        }
    }),
    getters: {
        isLoggedIn: (state) => !!state.token, // Returns true if token exists
    },
    actions: {
        async login() {
            const router = useRouter();
            const localePath = useLocalePath();
            try {
                const api = useApi();
                const response = await api.post('login', this.Formlogin);
                const { user, token } = response.data.data;
                if (user && token){
                    this.setUser(user, token);
                    this.Formlogin.email = "";
                    this.Formlogin.password = "";
                    this.errorsLogin = undefined;
                    router.push('/');
                } 
            } catch (error) {
                this.errorsLogin = error.response?.data?.errors;
            }
        },
        async register() {
            const router = useRouter();
            try {
                const api = useApi();
                const response = await api.post('register', this.formRegister);
                if (response.data){
                   this.otpNum = response.data.data?.customer?.otp
                   router.push('/auth/otp');
                    this.errorsRegister = undefined;
                } 
            } catch (error) {
                this.errorsRegister = error.response?.data?.errors;
            }
        },
        async checkOtp() {
            const router = useRouter();
            try {
                const api = useApi();
                const response = await api.post(`check-otp/${this.formRegister.phone}`, {otp:this.otpNum});
                if (response.data){
                    router.push('/auth/login');
                    this.errorOtp = undefined;
                    this.Formlogin.email = this.formRegister.email;
                    this.formRegister.email = "";
                    this.formRegister.phone = "";
                    this.formRegister.password = "";
                    this.formRegister.full_name = "";
                    this.otpNum = null;
                } 
            } catch (error) {
                this.errorOtp = error.response?.data?.errors;
            }
        },
        setUser(user, token) {
            this.user = user;
            this.token = token;
            if (process.client) {
                localStorage.setItem('token', token);
                localStorage.setItem('user',  JSON.stringify(user));
            }
        },
        clearAuth() {
            this.user = null;
            this.token = null;
            if (process.client) {
                localStorage.removeItem('token');
            }
        },
        initializeAuth() {
            // Restore token from localStorage
            if(process.client){
                const token = localStorage.getItem('token');
                const user = JSON.parse(localStorage.getItem('user'));
                if (token && user) {
                    this.token = token;
                    this.user = user;
                    // Optionally fetch user data with the token
                }
            }
        },
    },
});