import { Outlet } from "react-router-dom";
import TopHeader from "./TopHeader";
import RecipeFooter from "./Footer";

export default function Layout(){
    return(
        <>
        <TopHeader/>
        <Outlet/>
        <RecipeFooter />
        </>
    );
}