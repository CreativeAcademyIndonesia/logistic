'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { LineChart } from '../dashboard/chart/linechart';
import '../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function Slider({countby, table, collumn, headername, years}) {
  const currentMonth = new Date().getMonth();
    return (
      <>
        <Swiper
          // pagination={{
          //   type: 'fraction',
          // }}
          initialSlide={currentMonth}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{ width: '100%'}}
        >
           {[...Array(12)].map((_, index) => (
                <SwiperSlide key={index}>
                <LineChart
                    years={years}
                    countby={countby}
                    table={table}
                    collumn={collumn}
                    headername={headername}
                    monthNumber={index + 1}
                />
                </SwiperSlide>
            ))}
            <div className="swiper-button-prev" >
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                className='text-blue-600/20 pt-6'
              />
            </div>
            <div className="swiper-button-next" >
            <FontAwesomeIcon
                icon={faChevronCircleRight}
                className='text-blue-600/20 pt-6'
              />
            </div>
        </Swiper>
      </>
    );
  }
