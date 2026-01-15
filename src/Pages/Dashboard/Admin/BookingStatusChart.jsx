import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#ff6b6b", "#ffa500", "#4ade80"]; // red, orange, green

export default function BookingStatusPieChart() {
  // Fetch booking stats from backend
  const { data, isLoading, error } = useQuery({
    queryKey: ["booking-stats"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/admin/booking-stats");
      return res.data;
    },
  });

  if (isLoading) return <p>Loading chart...</p>;
  if (error) return <p>Failed to load chart data</p>;

  return (
    <div className="w-full h-[400px] p-4  rounded-xl ">
      <h2 className="text-xl font-bold text-primary mb-4 font-title text-center">
        Booking Status Distribution
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
