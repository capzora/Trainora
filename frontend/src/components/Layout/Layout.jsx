import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="layout-container">
      <Navbar/>
      <main className="main-content">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
