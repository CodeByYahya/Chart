import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register the necessary components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const RadarChart = () => {
  // Chart data
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset",
        data: [33, 53, 85, 41, 44, 65, 60],
        borderColor: "rgba(0, 0, 0, 0.8)", // Darker border color for visibility
        backgroundColor: "rgba(0, 0, 0, 0.3)", // Slightly transparent fill color
        pointRadius: 0, // Hide points
        borderWidth: 1, // Set border width for visibility
        datalabels: {
          display: false, // Hide data labels
        },
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
      datalabels: {
        display: false, // Disable data labels
      },
    },
    scales: {
      r: {
        grid: {
          display: false, // Hide grid lines
        },
        ticks: {
          display: false, // Hide ticks
        },
        pointLabels: {
          display: false, // Hide point labels
        },
        angleLines: {
          display: false, // Hide angle lines
        },
      },
    },
  };

  return (
    // <div className="radar-chart">
      <Radar data={data} options={options} />
    // </div>
  );
};

export default RadarChart;
