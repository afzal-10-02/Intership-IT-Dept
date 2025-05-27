import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const data = [
  { name: 'Pending', value: 10 },
  { name: 'Approved', value: 20 },
  { name: 'Rejected', value: 5 },
];

const COLORS = ['#FFBB28', '#00C49F', '#FF8042'];

const SummaryCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Super Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Summary Cards */}
        <Grid item xs={12} md={4}>
          <SummaryCard>
            <Box>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">150</Typography>
            </Box>
            <PeopleIcon fontSize="large" color="primary" />
          </SummaryCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <SummaryCard>
            <Box>
              <Typography variant="h6">Total Requests</Typography>
              <Typography variant="h4">75</Typography>
            </Box>
            <AssignmentIcon fontSize="large" color="secondary" />
          </SummaryCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <SummaryCard>
            <Box>
              <Typography variant="h6">Approved Requests</Typography>
              <Typography variant="h4">60</Typography>
            </Box>
            <CheckCircleIcon fontSize="large" color="success" />
          </SummaryCard>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Request Status Distribution
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
