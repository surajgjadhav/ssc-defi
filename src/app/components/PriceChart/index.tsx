"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const options = {
  responsive: true,
  plugins: {},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "ETH",
      data: labels.map((label, index: number) => 1000 * index),
      borderColor: "rgb(3, 101, 253)",
      backgroundColor: "rgba(3, 101, 253, 0.2)",
    },
    {
      label: "BTC",
      data: labels.map((label, index: number) => 2000 * index),
      borderColor: "rgb(79, 203, 141)",
      backgroundColor: "rgba(79, 203, 141, 0.2)",
    },
  ],
};

const PriceChart = () => {
  return <Line options={options} data={data} />;
};

export default PriceChart;
