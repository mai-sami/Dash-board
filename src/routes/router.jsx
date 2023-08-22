 import { BaseLayout } from "../Layout/BaseLayout";
import Dashboard from "../Pages/Home/dashboard";
import NotFound from "../Pages/NotFound";

export const router = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [{ path: "", element: <Dashboard /> }
 ],
  },
  { path: "*", element: <NotFound /> },
];
