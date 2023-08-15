"use client";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut, ChartData, TData, TLabel } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

interface CollateralChartProps {
  EthAmount: number;
  BtcAmount: number;
}

const data: ChartData<"doughnut", TData, TLabel> = {
  labels: ["ETH", "BTC"],
  datasets: [
    {
      label: "Collateral Info",
      data: [],
      backgroundColor: ["rgb(23, 101, 253)", "rgb(79, 203, 141)"],
      borderColor: ["rgb(23, 101, 253)", "rgb(79, 203, 141)"],
      hoverOffset: 4,
      borderWidth: 0.8,
    },
  ],
  borderColor: "#00000",
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "Custom Chart Title",
      color: "rgb(23, 101, 253)",
    },
  },
};

const CollateralChart = ({ EthAmount, BtcAmount }: CollateralChartProps) => {
  data.datasets[0].data.push(EthAmount, BtcAmount);

  return <Doughnut data={data} options={options} />;
};

export default CollateralChart;
