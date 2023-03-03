import React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

// INTERNAL
import "./MainLayout.scss";

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
        </React.Fragment>
    );
};

export default MainLayout;
