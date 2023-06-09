import React from 'react';
import DocCard from '../../../Components/DocCard';

const DocTab = ({items}) => {
    return (
        <div>
            <div className="">
                {
                    items.map((item) => <DocCard key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default DocTab;