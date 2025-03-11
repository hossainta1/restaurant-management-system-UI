import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Dashboard = () => {
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
        </ul>
      </div>
      <div className="flex-1">
        {/* Dashboard content */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
