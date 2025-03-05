import React from "react";

import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
  const [menu] = useMenu();
  const deserts = menu.filter(item => item.category === "dessert");
  const soup = menu.filter(item => item.category === "soup");
  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const offered = menu.filter(item => item.category === "offered");
  return (
    <div>
      <Cover img={menuImg} title={"our Menu"}></Cover>
      <SectionTitle
      subHeading="Don't Miss"
      heading="Todays Offer"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory> 
       {/*Desert section  */}
       <MenuCategory items={deserts} title="deserts" coverImg={desertImg}></MenuCategory>

       {/* Pizza Section */}
       <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg}></MenuCategory>
       {/* Salad section */}
       <MenuCategory items={salad} title="salad" coverImg={saladImg}></MenuCategory>
       <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
