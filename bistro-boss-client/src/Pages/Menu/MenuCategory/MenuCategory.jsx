import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title} />}
            <div className='grid p-10 md:grid-cols-2 gap-10 my-16'>
                {
                    items.map(item => <MenuItem item={item} key={item._id} />)
                }
            </div>
            <div className='text-center'>
                <Link to={`/order/${title}`}>
                    <button className='btnp'>ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;