import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Title from "../../../Components/Shared/Title/Title";
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
    <div className="mx-auto text-center">
      <Title text="Payment Successful" />
    </div>
  );
}
