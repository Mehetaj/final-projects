import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useDoc from '../../../hooks/userDocs';
import DocTab from './DocTab';

const DocTabs = () => {
    const categories = ['cavity']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [doc] = useDoc()
    const cavity = doc.filter(item => item.type == 'cavity protection')
    const oral = doc.filter(item => item.type == 'oral surgery')
    const cosmatic = doc.filter(item => item.type == 'cosmetic dentisty')
    // console.log(cosmatic);
    // console.log(cavity);
    // console.log(oral);
    


    // const dental = data.filter(doctor => doctor.type === 'cavity protection');
    // console.log(dental);

    return (
        <div className=' container mx-auto my-20'>

            <Tabs defaultIndex={0} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Cavity Protection</Tab>
                    <Tab>Cosmetic Dentisty</Tab>
                    <Tab>Oral Surgery</Tab>
                </TabList>

                <TabPanel>  
                    <DocTab items={cavity}/>
                </TabPanel>
                <TabPanel>
                    <DocTab items={oral}/>
                </TabPanel>
                <TabPanel>
                    <DocTab items={cosmatic}/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default DocTabs;