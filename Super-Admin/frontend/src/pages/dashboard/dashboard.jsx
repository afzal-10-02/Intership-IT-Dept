import React from 'react';
import OrderVerificationPipelineChart from './OrderVerificationPipelineChart.jsx';
import OrderFilterTable from "./OrderFilterTable";
import UserRoleBarChart from './UserRoleBarChart.jsx';

const Dashboard = () => {
  return (
    <div className="mt-4">
      <OrderVerificationPipelineChart />
      <OrderFilterTable />
      <UserRoleBarChart />
    </div>
  );
};

export default Dashboard;
