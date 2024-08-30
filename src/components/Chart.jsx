import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { GiProgression } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { FaApple, FaPercent } from "react-icons/fa";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels // Register the datalabels plugin
);

const LineChart = () => {
  // Chart data
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        tension: 0.4,
        data: [33, 53, 85, 41, 44, 65, 60],
        borderColor: "black", // Line color
        backgroundColor: "rgba(0, 0, 0, 0.2)", // Background color
        pointRadius: 8, // Increase the size of the points
        pointBorderColor: "black", // Point border color
        pointBackgroundColor: "black", // Point fill color
        fill: true,
        datalabels: {
          color: "black", // Color of the data labels
          display: true,
          align: "top", // Position the labels on top of the points
          anchor: "end",
          font: {
            size: 12, // Font size of the data labels
            weight: "bold",
          },
        },
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to stretch to fill the container
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function () {
            return ""; // Remove the label from the tooltip
          },
        },
      },
      datalabels: {
        display: false, // Disable datalabels globally (use dataset-specific config instead)
      },
    },
    scales: {
      x: {
        grid: {
          display: true, 
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
          display: false, // Disable grid lines on y-axis
        },
        ticks: {
          color: "black", // Font color for y-axis labels
          font: {
            size: 14, // Font size for y-axis labels
          },
        },
        title: {
          display: true,
          color: "black", // Font color for y-axis title
          font: {
            size: 16, // Font size for y-axis title
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
