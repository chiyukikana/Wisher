import React, { FC, Suspense } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";
import wishlist from "../../public/wishlist.json";

const Home = React.lazy(() => import("../pages/Home"));
const Wishlist = React.lazy(() => import("../components/Wishlist"));

const [html5, js] = wishlist;
const RouteController: FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="h5" element={<Wishlist list={html5} />} />
            <Route path="js" element={<Wishlist list={js} />} />
            <Route path="*" element={<Navigate to="/h5" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default RouteController;
