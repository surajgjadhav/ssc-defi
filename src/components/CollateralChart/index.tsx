'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from '@/styles/modules/components/collateralChart.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['ETH', 'BTC'],
  datasets: [
    {
      label: 'Collateral Info',
      data: [50, 50],
      backgroundColor: ['rgb(27, 38, 49)', 'rgb(255, 215, 0)'],
      hoverOffset: 4,
    },
  ],
};

const CollateralChart = () => {
  return (
    <div className={}>
      <Doughnut data={data} />
    </div>
  );
};

export default CollateralChart;
