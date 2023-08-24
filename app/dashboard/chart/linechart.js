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

import { useState } from "react"
import useSWR, { useSWRConfig } from 'swr'
import LoadingData from '@/app/component/LoadingData';

export function LineChart({countby, headername, monthNumber, table, collumn, years}) {

    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data: collections, error, isLoading : loadingCollections } = useSWR(`/api/chart/transaksi?t=${table}&count=${countby}&c=${collumn}&y=${years}`, fetcher);

    if (loadingCollections) {
        // return <p>loading</p>
        return <LoadingData />
    }

    let monthly = []
    collections.forEach(data => data.bulan == monthNumber && monthly.push(data))
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

    // const monthText = monthNames[month];
    const monthText = monthNames[monthNumber-1];
    const options = {
        responsive: true,
        plugins: {
        legend: {
            position: 'top' ,
        },
        title: {
            display: true,
            text: `${headername} Bulan ${monthText} Tahun ${years}`,
        },
        },
    };
    
    const labels = lbl
    
    const data = {
        labels,
        datasets: [
        {
            label: `${table}`,
            data: trk,
            backgroundColor: table == 'pengiriman' ? 'rgba(0, 102, 159, .8)' : 'rgba(0, 163, 255, .8)'   ,
        }
        ],
    };
  return <Bar options={options} data={data} />;
}