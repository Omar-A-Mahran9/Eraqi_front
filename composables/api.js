// composables/api.ts

import { useRuntimeConfig, navigateTo } from "#app";
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

export function useApi() {
  const config = useRuntimeConfig();
  
  // Create Axios instance with default configuration
  const apiClient = axios.create({
    baseURL: 'https://admin.alraqi.sa/api/',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000, // Set a timeout
  });
  
  // Interceptors for request and response
  apiClient.interceptors.request.use(
    (config) => {
      // Add Authorization token if available
      let token;
      if (process.client) {
        token = localStorage.getItem('token');
      }
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle errors globally
      if (error.response?.status === 401) {
        const authStore = useAuthStore();
        authStore.clearAuth();
        navigateTo('/login');
      }
  
      if (error.response) {
        console.error(`API Error: ${error.response.status} - ${error.response.data.message}`);
      } else {
        console.error(`API Error: ${error.message}`);
      }
      return Promise.reject(error);
    }
  );

  return {
    get: async (url, config) => {
      const response = await apiClient.get(url, config);
      return response;
    },
    post: async (url, data, config) => {
      const response = await apiClient.post(url, data, config);
      return response;
    },
    put: async (url, data, config) => {
      const response = await apiClient.put(url, data, config);
      return response;
    },
    delete: async (url, config) => {
      const response = await apiClient.delete(url, config);
      return response;
    },
  };
}
