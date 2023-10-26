import { lazy } from "react";
import { GlobalStyle } from '../global-style';
import { SharedLayout } from "./sharedLayout/SharedLayout";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const BaseItems = lazy(() => import("pages/BaseItems"));
const CustomItems = lazy(() => import("pages/CustomItems"));

export const App = () => {

    return (
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/base-items" element={<BaseItems />} />
            <Route path="/custom-items" element={<CustomItems />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </>
    )
    };