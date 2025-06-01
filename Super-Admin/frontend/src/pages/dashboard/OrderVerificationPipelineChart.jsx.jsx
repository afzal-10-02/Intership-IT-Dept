import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const OrderVerificationPipelineChart = () => {
  const datasets = [
    { label: "IT Operator", data: [5], backgroundColor: "#fbbf24" },
    { label: "IT Verifier", data: [4], backgroundColor: "#60a5fa" },
    { label: "IT Approver", data: [3], backgroundColor: "#34d399" },
    { label: "Approved", data: [6], backgroundColor: "#10b981" },
    { label: "Rejected", data: [2], backgroundColor: "#ef4444" },
  ];

  const totalOrders = datasets.reduce((sum, item) => sum + item.data[0], 0);

  const data = {
    labels: [`Total Orders: ${totalOrders}`],
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: { stacked: true },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Orders",
        },
      },
    },
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ marginTop: '85px' }}>
      <div className="d-flex flex-column align-items-center bg-white rounded shadow w-75">
        <h2 className="text-2xl font-bold mb-1">Order Verification Stages</h2>
        <Bar className="p-3" data={data} options={options} />
      </div>
    </div>
  );
};

export default OrderVerificationPipelineChart;
