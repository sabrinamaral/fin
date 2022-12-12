import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

const Dashboard = () => {
  const [toggle, setToggle] = useState(true);
  const toggleSidebar = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Navbar handleClick={toggleSidebar} />
      {toggle && <Sidebar />}
      <Outlet />
    </>
  );
};

export default Dashboard;
