import React, { useEffect } from "react";
import axios from "axios";
import useAuthHook from "./useAuthHook";

export default function useAxiosSecure() {
  const axiosSecure = axios.create({
    baseURL: `http://localhost:3000`,
  });

  const { user } = useAuthHook();
  useEffect(() => {
    axiosSecure.interceptors.response.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken} `;
      return config;
    });
  }, []);

  return axiosSecure;
}
