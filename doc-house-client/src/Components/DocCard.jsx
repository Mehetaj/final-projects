import React from 'react';
import { Link } from 'react-router-dom';

const DocCard = ({ item }) => {
    console.log(item);
    const { img, demoPic, title, id } = item
    const handleViewMore = (item) => {
        console.log(item);
    }
    return (
        <div className='my-10'>
            <div className='flex gap-10'>
                <img className='h-[1053px] w-[558px]' src={img} alt="" />
                <div>
                    <h1 className='text-3xl font-bold mb-6'>Our Services</h1>
                    <p className='w-full mb-10 lg:w-[550px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <img src={demoPic} alt="" />
                    <h2 className='text-2xl font-bold my-6 italic'>{title}</h2>
                    <p className='mt-3 w-full lg:w-[550px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae quos consequatur earum obcaecati veniam, aperiam tempora omnis alias corporis eveniet soluta dolores maxime, aspernatur maiores. Nobis suscipit nisi perferendis ut amet? Molestias dolorem adipisci, magni, earum nihil eos eligendi odio suscipit eum amet, quod cum hic velit. Eligendi ex quos labore, quod iure dolore nulla quisquam, fugiat perspiciatis, sequi mollitia voluptatum provident impedit doloremque eaque nemo quaerat? Unde voluptatum, architecto quo ipsum temporibus maiores eligendi quaerat obcaecati optio? Tempore voluptates praesentium ipsum laborum modi non. Laudantium molestiae at ratione aliquid quam dignissimos aut quis obcaecati autem quisquam molestias sapiente illum accusantium id veritatis optio voluptatum minus quaerat nesciunt nihil rerum ex, impedit tempora? Officiis est nihil consequatur repudiandae incidunt eos quod nisi! Autem neque saepe consequuntur voluptas perspiciatis odio hic debitis dolore cupiditate temporibus, quidem odit! Quisquam obcaecati at, saepe nam voluptas repellendus laboriosam, fuga assumenda eligendi quidem recusandae.</p>
                    <Link to={`details/${id}`}> <button onClick={() => handleViewMore(item)} className='btnp'>More Details</button></Link>
                </div>
            </div>

        </div>
    );
};

export default DocCard;