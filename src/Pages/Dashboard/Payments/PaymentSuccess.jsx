import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
export default function PaymentSuccess() {
  const axiosSecure = useAxiosSecure();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    axiosSecure
      .patch(`/payment-success?sessionId=${sessionId}`)
      .then((res) => console.log(res.data));
  }, [sessionId]);

  return (
    <div>
      <h1>PaymentSuccess</h1>
    </div>
  );
}
