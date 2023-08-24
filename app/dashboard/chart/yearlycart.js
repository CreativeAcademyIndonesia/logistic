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

export function Yearlychart({years}) {

    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data: datapengiriman, error : errdatapengiriman, isLoading : loadingdatapengiriman } = useSWR(`/api/chart/recap?t=pengiriman&c=Tgl_Stuffing&y=${years}`, fetcher);
    const { data: datapenerimaan, error : errdatapenerimaan, isLoading : loadingdatapenerimaan } = useSWR(`/api/chart/recap?t=penerimaan&c=Tgl_Stripping&y=${years}`, fetcher);
    const { data: armada, error : errarmada, isLoading : loadingarmada } = useSWR(`/api/chart/recap?t=armada&c=tanggal&y=${years}`, fetcher);

    if (loadingdatapengiriman || loadingdatapenerimaan || loadingarmada ) {
        return <LoadingData />
    }


    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    // const year = new Date().getFullYear();
    const options = {
        responsive: true,
        plugins: {
        legend: {
            position: 'top' ,
        },
        title: {
            display: true,
            text: `Jumlah Pengiriman dan Penerimaan Tahun ${years}`,
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