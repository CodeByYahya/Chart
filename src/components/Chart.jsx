import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // Import Filler for area fills
} from 'chart.js';
import { FaApple, FaPercent } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import { BsGraphUpArrow } from 'react-icons/bs';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // Register the Filler plugin
);

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        // label: 'Sales',
        data: [33, 53, 50, 80, 60, 70, 84],
        borderColor: "black",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        pointRadius: 4,
        pointBorderColor: "black",
        pointBackgroundColor: "black",
        fill: false,
        tension: 0.4, // To make the line smooth
      },
      {
        // label: 'Range Upper Bound',
        data: [null, null, null, 80, 85, 80, 84],
        borderColor: "rgba(0, 123, 255, 0.5)",
        backgroundColor: "rgba(0, 123, 255, 0.3)",
        pointRadius: 0,
        fill: '+1', // Fill the area between this dataset and the next one
        tension: 0.4, // To make the line smooth
      },
      {
        // label: 'Range Lower Bound',
        data: [null, null, null, 80, 50, 55, 84],
        borderColor: "rgba(0, 123, 255, 0.5)",
        backgroundColor: "rgba(0, 123, 255, 0.3)",
        pointRadius: 0,
        fill: '-1', // Fill the area between this dataset and the previous one
        tension: 0.4, // To make the line smooth
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label.includes('Range') ? '' : tooltipItem.formattedValue;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "black",
          font: {
            size: 14,
          },
        },
        title: {
          display: true,
          color: "black",
          font: {
            size: 16,
          },
        },
      },
      y: {
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: "black",
          font: {
            size: 14,
          },
        },
        title: {
          display: true,
          color: "black",
          font: {
            size: 16,
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <div className="flex">
          <FaApple size={"35px"} className="logo" />
          <h2 className="heading">Revenue Estimates</h2>
        </div>
        <div className="flex icon">
          <FaPercent className="blue"/>
          <span className="gray">Val</span>
          <GiProgression className="blue"/>
          <BsGraphUpArrow className="gray"/>
        </div>
      </div>
      <div className="chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
