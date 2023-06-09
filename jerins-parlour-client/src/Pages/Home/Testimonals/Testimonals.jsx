import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../HOOKS/useAxiosSecure';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactStarsRating from 'react-awesome-stars-rating';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Testimonals = () => {
    const [reviews, setReviews] = useState([]);
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get("/reviews")
            .then(res => {
                setReviews(res.data);
            })
    }, [])
    return (
        <div className='mt-24'>
            <h1 className='text-3xl font-bold text-center'>Testimonials</h1>


            <Carousel className='mt-10 mx-auto' responsive={responsive}>
                {
                    reviews.map(review => <div className='w-full mx-auto' key={review._id}>
                        <div className='flex items-center gap-6'>
                            <img width={100} className='rounded-full' src={review.img} alt="" />
                            <div>
                                <h1 className='text-2xl font-semibold'>{review.name}</h1>
                                <p>{review.prof}</p>
                            </div>
                        </div>
                        <p className='w-[70%] my-6'>{review.desc}</p>
                        <ReactStarsRating
                        className="flex w-[30px] h-[40px]" 
                        value={review.ratings}
                        />

                    </div>)
                }

            </Carousel>

        </div>
    );
};

export default Testimonals;