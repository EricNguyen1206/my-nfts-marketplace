import React from "react";
import ReactDOM from "react-dom/client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Provider } from "react-redux";

// INTERNAL
import "styles/global.scss";
import App from "./App";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <ThirdwebProvider activeChain={"goerli"}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThirdwebProvider>
);
