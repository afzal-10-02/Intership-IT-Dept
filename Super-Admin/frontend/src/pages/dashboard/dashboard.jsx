import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import OrderVerificationPipelineChart from './OrderVerificationPipelineChart.jsx';
import OrderFilterTable from "./OrderFilterTable";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const [userCounts, setUserCounts] = useState({
    operator: 0,
    verifier: 0,
    approver: 0,
  });

  useEffect(() => {
    fetchUserCounts();
  }, []);

  const fetchUserCounts = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/super-admin/get-users');
      const result = await res.json();
      const users = result?.data || [];

      const counts = {
        operator: 0,
        verifier: 0,
        approver: 0,
      };

      users.forEach(user => {
        if (counts[user.role] !== undefined) {
          counts[user.role]++;
        }
      });

      setUserCounts(counts);
    } catch (error) {
      alert('Failed to fetch user data');
    }
  };

  const barData = {
    labels: ['Operator', 'Verifier', 'Approver'],
    datasets: [
      {
        label: 'Number of Users',
        data: [userCounts.operator, userCounts.verifier, userCounts.approver],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
  };

  return (

    <div className="mt-4">
       <OrderVerificationPipelineChart />
       <OrderFilterTable />

      <div className='center bg-white rounded shadow mt-4' style={{ width: '75%', height: '400px' }}>
        <h2 className="mb-4 text-center">User Role Count</h2>
        <Bar data={barData} options={barOptions} />
      </div>


    </div>
  );
};

export default Dashboard;
