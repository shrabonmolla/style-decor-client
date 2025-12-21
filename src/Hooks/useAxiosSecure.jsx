import React, { useEffect } from "react";
import axios from "axios";
import useAuthHook from "./useAuthHook";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: `https://style-decor-server-neon.vercel.app`,
});

export default function useAxiosSecure() {
  const { user, logOut } = useAuthHook();
  const navigate = useNavigate();

  useEffect(() => {
    // intercept request

    const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });

    // interceptor response
    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);

        const statusCode = error.status;
        if (statusCode === 401 || statusCode === 403) {
          logOut().then(() => {
            navigate("/authlayout/login");
          });
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, navigate, logOut]);

  return axiosSecure;
}
