import React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "layouts/Footer";
import Header from "layouts/Header/";

// INTERNAL
import "./MainLayout.scss";
import ScrollToTopFab from "layouts/ScrollToTopFab";

type Props = {
    children: JSX.Element;
};

const MainLayout = ({ children }: Props) => {
    return (
        <React.Fragment>
            <Toaster />
            <Header />
            <main className="layout_main">{children}</main>
            <Footer />
            <ScrollToTopFab />
        </React.Fragment>
    );
};

export default MainLayout;
