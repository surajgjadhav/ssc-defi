"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface CollateralChartProps {
  EthAmount: number;
  BtcAmount: number;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    hoverOffset: number;
  }[];
  borderColor: string;
}
const data: ChartData = {
  labels: ["ETH", "BTC"],
  datasets: [
    {
      label: "Collateral Info",
      data: [],
      backgroundColor: ["rgb(93, 109, 126 , 0.2)", "rgba(255, 159, 64, 0.2)"],
      borderColor: ["rgba(93, 109, 126  , 1)", "rgba(255, 159, 64, 1)"],
      hoverOffset: 4,
    },
  ],
  borderColor: "#00000",
};

const CollateralChart = ({ EthAmount, BtcAmount }: CollateralChartProps) => {
  data.datasets[0].data.push(EthAmount, BtcAmount);

  return <Doughnut data={data} />;
};

export default CollateralChart;
