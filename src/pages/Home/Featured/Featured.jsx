import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed pt-10 my-20">
      <SectionTitle
        heading="Featured Item"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-20 px-30">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
            <p className="text-xl text-white">Aug 20, 2025</p>
            <p className="uppercase text-white">Where can i get?</p>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dolore sed perferendis aperiam maiores illum non atque saepe eaque itaque.</p>
            <button className="btn btn-outline btn-primary border-0 border-b-4">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
