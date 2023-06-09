import React, { useEffect } from 'react';
import DocBanner from './DocBanner';
import { useLoaderData, useParams } from 'react-router-dom';

const DocDetails = () => {
    const docs = useLoaderData()
    const { id } = useParams()
        const specificData = docs.find(doc => doc.id = id)
    
    return (
        <div className='py-40'>
            <DocBanner />
        </div>
    );
};

export default DocDetails;