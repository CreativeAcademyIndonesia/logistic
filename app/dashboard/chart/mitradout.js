'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Mitradonut({mitrapengiriman}) {
    function sumTransactionsByShippingLine(data) {
        const result = [];
        const shippingLineMap = {};
        data.forEach(item => {
            const { Shipping_Line, transaksi } = item;
            if (shippingLineMap.hasOwnProperty(Shipping_Line)) {
                shippingLineMap[Shipping_Line] += transaksi;
            } else {
                shippingLineMap[Shipping_Line] = transaksi;
            }
        });
        for (const Shipping_Line in shippingLineMap) {
            result.push({
                Shipping_Line: Shipping_Line,
                transaksi: shippingLineMap[Shipping_Line]
            });
        }
    
        return result;
    }

    let recapMitra = sumTransactionsByShippingLine(mitrapengiriman)
    let mitra = recapMitra.map((mtr)=>mtr.Shipping_Line)
    let dataMitra = recapMitra.map((mtr)=>mtr.transaksi)
    const year = new Date().getFullYear();
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `Mitra Analytics Tahun ${year}`,
            },
            legend: {
                display: false
            }
        },
    };

    const data = {
        labels: mitra,
        datasets: [
          {
            label: 'Transaksi',
            data: dataMitra,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

  return <Pie options={options} data={data} />;
}
