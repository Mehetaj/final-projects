import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import quote from '../../../assets/Group 17.png'
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
       items: 2
        
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])


    return (
        <div className=' '>
            <SectionTitle title={'What Our Patients Says'} subTitle={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'} />
            <div className=''>
                <div className='lg:mx-[250px]'>

                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className="w-full  mx-auto"
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={responsive}
                        rewind={false}
                        rewindWithAnimation={false}
                    >
                        {
                            reviews.map((review,i) => 
                            <div key={i} className='border mx-auto lg:w-[558px]  p-10 m-10'>
                                <div className='flex lg:justify-between'>
                                <div className='lg:flex items-center lg:gap-6'>
                                    <img className='w-20 rounded-full' src={review.img} alt="" />
                                    <div>
                                        <h2>{review.name}</h2>
                                        <p>{review.prof}</p>
                                    </div>
                                </div>
                                <img className=' w-14 h-14' src={quote} alt="" />
                                </div>
                                <p className='mt-6 w-[250px] lg:w-full'>{review.says}</p>
                            </div>
                            )
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Reviews;