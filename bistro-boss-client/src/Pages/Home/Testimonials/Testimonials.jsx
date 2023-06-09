import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import quote from '../../../assets/quote.png'


const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data)
            })
    }, [])

    return (
        <section>
            <SectionTitle subHeading="What our clinet say" heading="TESTIMONIALS"></SectionTitle>

            <Swiper
                navigation={true}
                modules={[Navigation]}
            >

                {
                    reviews.map(review =>
                        <SwiperSlide key={review._id}>
                            <div className='mx-24 my-16 flex flex-col items-center'>
                                <Rating
                                style={{maxWidth: 180}}
                                value={parseInt(review.rating)}
                                readOnly
                                />
                                <img className='mt-4' src={quote} alt="" />
                                <p className='py-8 text-center'>{review.details}</p>
                                <h3 className='text-2xl text-orange-400'>{ review.name }</h3>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;