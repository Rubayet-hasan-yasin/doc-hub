import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />

      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
