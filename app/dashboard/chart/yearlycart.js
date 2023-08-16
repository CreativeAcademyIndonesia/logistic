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

const rangkumData = (data)=>{
    const result = Array(12).fill(0);
    const monthMap = {
    '01': 0,
    '02': 1,
    '03': 2,
    '04': 3,
    '05': 4,
    '06': 5,
    '07': 6,
    '08': 7,
    '09': 8,
    '10': 9,
    '11': 10,
    '12': 11
    };

    data.forEach(item => {
        const monthIndex = monthMap[item.bulan];
        result[monthIndex] = item.jumlah_transaksi;
    });

    return result;
}

export function Yearlychart({datapengiriman, datapenerimaan, armada}) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const year = new Date().getFullYear();
    const options = {
        responsive: true,
        plugins: {
        legend: {
            position: 'top' ,
        },
        title: {
            display: true,
            text: `Jumlah Pengiriman dan Penerimaan Tahun ${year}`,
        },
        },
    };
    
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jen', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const data = {
        labels,
        datasets: [
        {
            label: 'Pengiriman',
            data: rangkumData(datapengiriman),
            backgroundColor: 'rgba(0, 102, 159, .8)',
        },
        {
            label: 'Penerimaan',
            data: rangkumData(datapenerimaan),
            backgroundColor: 'rgba(0, 163, 255, .8)',
        },
        {
            label: 'Armada',
            data: rangkumData(armada),
            backgroundColor: 'rgba(248, 182, 0, .8)',
        }
        ],
    };
  return <Bar options={options} data={data} />;
}