'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export function LineChart({rawdata, countby, headername}) {
    let monthly = []
    rawdata.forEach(data => data.bulan == new Date().getMonth() + 1 && monthly.push(data))

    const lbl = monthly.map((data)=> data[countby])
    const trk = monthly.map((data)=> data.transaksi)

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const month = new Date().getMonth();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const monthText = monthNames[month];
    const options = {
        responsive: true,
        plugins: {
        legend: {
            position: 'top' ,
        },
        title: {
            display: true,
            text: `${headername} Bulan ${monthText}`,
        },
        },
    };
    
    const labels = lbl
    
    const data = {
        labels,
        datasets: [
        {
            label: 'Pengiriman',
            data: trk,
            backgroundColor: 'rgba(0, 102, 159, .8)',
        }
        ],
    };
  return <Bar options={options} data={data} />;
}