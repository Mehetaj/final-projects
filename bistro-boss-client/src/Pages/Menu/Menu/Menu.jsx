import React from 'react';
import { Helmet } from 'react-helmet-async'
import menuImg from '../../../assets/menu/banner3.jpg'
import dessartImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category == 'dessert')
    const soup = menu.filter(item => item.category == 'soup')
    const salad = menu.filter(item => item.category == 'salad')
    const pizza = menu.filter(item => item.category == 'pizza')
    const offered = menu.filter(item => item.category == 'offered')



    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={"Our menu"}
                description={"Would you like to try a dish?"}
            ></Cover>

            <SectionTitle subHeading={"Don't Miss"} heading={"Today's offer"} />


            {/* Offerd menu items */}

            <MenuCategory items={offered}></MenuCategory>
            {/* ?Desset menu items */}


            <Cover  title={'DESSERTS'} img={dessartImg}/>
            <MenuCategory items={dessert}/>
            {/*  */}
            <Cover title={'PIZZA'} img={pizzaImg}/>
            <MenuCategory items={pizza}/>

            <Cover title={'SALADS'} img={saladImg}/>
            <MenuCategory items={salad}/>
 
            <Cover title={'SOUPS'} img={soupImg}/>
            <MenuCategory items={soup}/>

        </div>
    );
};

export default Menu;