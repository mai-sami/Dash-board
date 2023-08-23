import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Spinner } from "react-bootstrap";

export function BaseLayout() {
  return (
    <>
       <Header />
      <Suspense fallback={<Spinner />}>
        <div className="content">
          <Sidebar />
          <Outlet />
        </div>
      </Suspense>
     </>
  );
}
