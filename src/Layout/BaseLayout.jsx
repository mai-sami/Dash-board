import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Spinner } from "react-bootstrap";
  
export function BaseLayout() {
     return (
        <>
            <Sidebar />
                 <Header />
                <Suspense fallback={<Spinner />}>
                <Outlet />
                </Suspense>
           
        </>
    )
}