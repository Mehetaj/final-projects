import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div>
            <section>
                <SectionTitle subHeading={"From 11.00 am to 10.00 pm"} heading={"Order Online"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl italic font-mono text-white text-center -mt-12 uppercase'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl italic font-mono   text-white text-center -mt-12 uppercase'>pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl italic font-mono  text-white text-center -mt-12 uppercase'>soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl italic font-mono  text-white text-center -mt-12 uppercase'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl italic font-mono  text-white text-center -mt-12 uppercase'>Salad</h3>
                </SwiperSlide>
            </Swiper>
            </section>
        </div>
    );
};

export default Category;