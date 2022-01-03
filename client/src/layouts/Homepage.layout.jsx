import React from "react";
import FoodTab from '../components/FoodTab/index'
import Navbar from "../components/Navbar/index";

function HomeLayout({ props, children }) {
  return (
    <div>
      <Navbar {...props}/>
      <FoodTab {...props}/>
      <div className="container mx-auto px-4 lg:px-20">{children}</div>\
      Footer
    </div>
  );
}

export default HomeLayout;