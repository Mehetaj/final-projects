import React from 'react';
import FoodCard from '../../../components/SectionTitle/FoosCard/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'


const OrderTab = ({ items }) => {


    return (
        <div>
            <div className="grid  md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    items.map(item => <FoodCard key={item._id} item={item} />)
                }
            </div>
        </div>

    );
};

export default OrderTab;