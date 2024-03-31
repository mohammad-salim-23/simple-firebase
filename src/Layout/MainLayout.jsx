import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <div>
            <h1>Salim </h1>
            <Header></Header>
         <Outlet></Outlet>   
        </div>
    );
};

export default MainLayout;