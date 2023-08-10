import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

const MainLayout = () => {
    return (
        <div>
            <Header />

            <div className="pt-24">
            <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;