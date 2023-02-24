import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

// INTERNAL
import "./App.scss";
import { publicRoutes } from "./routes";
import MainLayout from "./layouts/MainLayout";
import useAppThemes from "./hooks/useAppThemes";
import PageNotFound from "./pages/PageNotFound";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
/**
 * Component root App
 * @component
 * @return {JSX.Element}
 */
function App(): JSX.Element {
    const { colorMode, theme } = useAppThemes();
    const renderPage = () => {
        const routes = publicRoutes;
        if (routes && routes.length > 0) {
            return (
                <Fragment>
                    {routes.map((item) => {
                        const Page = item.element;
                        return (
                            <Route
                                key={item.path}
                                path={item.path}
                                element={
                                    <MainLayout>
                                        <Page />
                                    </MainLayout>
                                }
                            />
                        );
                    })}
                    <Route path="*" element={<PageNotFound />} />
                </Fragment>
            );
        } else {
            return <Route path="*" element={<PageNotFound />} />;
        }
    };
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>{renderPage()}</Routes>
                </Router>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
