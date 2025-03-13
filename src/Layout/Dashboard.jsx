import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import useCart from "../hooks/useCart";
import { MdContactMail } from "react-icons/md";

const Dashboard = () => {
  const [cart] =useCart();
  // TODO: get isAdmin from the database

   const isAdmin = true;
  return (
    <div className="flex">
      {/* Dashboard Side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome className="mr-2"></FaHome>
              User Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
             <SlCalender className="mr-2"></SlCalender>
              Reservation
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart className="mr-2"></FaShoppingCart>
              My Cart ({cart.length})
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaShoppingCart className="mr-2"></FaShoppingCart>
              Add a Review
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaShoppingCart className="mr-2"></FaShoppingCart>
              My Booking
            </NavLink>{" "}
          </li>

          <div className="divider"></div>
          {/* Shared Nav link */}
          <li>
            <NavLink to="/">
              <FaHome className="mr-2"></FaHome>
              Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch className="mr-2"></FaSearch>
              Menu
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="">
              <MdContactMail className="mr-2"></MdContactMail>
              Contact us
            </NavLink>{" "}
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        {/* Dashboard content */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
