import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuthHook from "./useAuthHook";
import useAxiosSecure from "./useAxiosSecure";

export default function useRole() {
  const { user } = useAuthHook();
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}/role`);
      return res.data;
    },
  });

  return { role: data, isLoading };
}
