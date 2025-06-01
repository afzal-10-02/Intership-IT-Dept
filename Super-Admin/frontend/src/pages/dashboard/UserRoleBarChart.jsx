import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

const UserRoleBarChart = () => {
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
                const role = user.role?.toLowerCase();
                if (counts[role] !== undefined) {
                    counts[role]++;
                }
            });

            setUserCounts(counts);
        } catch (error) {
            console.error('Error fetching users:', error);
            alert('Failed to fetch user data');
        }
    };

    const labels = ['Operator', 'Verifier', 'Approver'];
    const colors = ['#36A2EB', '#FFCE56', '#FF6384'];
    const dataValues = [userCounts.operator, userCounts.verifier, userCounts.approver];
    const maxValue = Math.max(...dataValues) + 1;

    const barData = {
        labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: colors,
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                color: '#000',
                anchor: 'end',
                align: 'top',
                font: {
                    weight: 'bold',
                    size: 14,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: maxValue,
                ticks: {
                    stepSize: 1,
                },
            },
        },
    };

    return (
        <div className='d-flex align-items-center justify-content-center my-2'>
            <div
                className='d-flex flex-column align-items-center justify-content-center bg-white rounded shadow p-2'
                style={{
                    width: '75%',
                    height: '450px',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <h2 className="text-center">User Role Count</h2>
                <div style={{ position: 'relative', width: '95%', height: '90%' }}>
                    <Bar data={barData} options={barOptions} />
                </div>
            </div>
        </div>
    );
};

export default UserRoleBarChart;
