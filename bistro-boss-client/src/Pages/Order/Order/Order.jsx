import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import orderCover from '../../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css'
import './Order.css'
import useMenu from '../../../Hooks/UseMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category == 'dessert')
    const soup = menu.filter(item => item.category == 'soup')
    const salad = menu.filter(item => item.category == 'salad')
    const pizza = menu.filter(item => item.category == 'pizza')
    const drinks = menu.filter(item => item.category == 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover title={"our shop"} img={orderCover} />
            <div className='' >
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                
                    <TabList className='tablist justify-center items-center my-10'>
                        <Tab className="ml-10 border-none focus:text-yellow-500 cursor-pointer">Salad</Tab>
                        <Tab className="ml-10 border-none focus:text-yellow-500 cursor-pointer">Pizza</Tab>
                        <Tab className="ml-10 border-none focus:text-yellow-500 cursor-pointer">Soup</Tab>
                        <Tab className="ml-10 border-none focus:text-yellow-500 cursor-pointer">Dessart</Tab>
                        <Tab className="ml-10 border-none focus:text-yellow-500 cursor-pointer">Drinks</Tab>
                    </TabList>
                    

                    <TabPanel>
                        <OrderTab items={salad}/>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={pizza}/>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={soup}/>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={dessert}/>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={drinks}/>
                        </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;