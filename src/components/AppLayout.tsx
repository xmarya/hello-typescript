import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";
import Navbar from "./Navbar";
import "../styles/global.scss";

export default function AppLayout() {
  return (
    <main>
      <Navbar />
      <div className="content-menu-wrapper">
        <Menu />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </main>
  );
}
