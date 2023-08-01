'use client'

import React, { useState } from 'react';

const NilaiPerusahaan = () => {
    const [faq, setFaq] = useState([
        {
            question: 'Kepuasan Pelanggan',
            answer: 'Kami memberikan prioritas utama pada kepuasan pelanggan kami dengan menyediakan layanan yang berkualitas, tepat waktu, dan sesuai dengan kebutuhan mereka.',
            open: false
        },
        {
            question: 'Keandalan',
            answer: ' Kami mengadopsi teknologi terbaru dan terus berinovasi untuk meningkatkan efisiensi dan kualitas layanan kami.',
            open: false
        },
        {
            question: 'Kerjasama',
            answer: 'Kami menghargai kemitraan dan kerjasama dengan mitra bisnis, pemasok, dan pelanggan kami untuk mencapai kesuksesan bersama.',
            open: false
        },
        {
            question: 'Keberlanjutan',
            answer: 'Kami memperhatikan dampak lingkungan dalam setiap aspek operasional kami dan berkomitmen untuk menjadi perusahaan yang bertanggung jawab secara sosial dan lingkungan.',
            open: false
        }
    ]);

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }

            return item;
        }));
    }

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-blue-primary sm:text-4xl lg:text-5xl"> Nilai Perusahaan</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Saat ini, PT. Hasfi Prima Logistik telah berhasil membangun reputasi yang baik di industri pengurusan transportasi dan terus berupaya untuk memberikan solusi transportasi yang handal dan inovatif kepada pelanggan kami.</p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFaq(index)}>
                                <span className="flex text-lg font-semibold text-blue-primary"> {item.question} </span>

                                <svg className={`w-6 h-6 text-gray-400 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6 text-slate-600`}>
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                        ))}
                        <p className="text-center text-gray-600 textbase mt-9">PT. Hasfi Prima Logistik</p>
                </div>
            </div>
        </section>
    );
}

export default NilaiPerusahaan;