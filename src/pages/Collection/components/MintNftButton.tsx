import { Button } from "@mui/material";
import React, { useState } from "react";

// INTERNAL
import MintNFTForm from "./MintNFTForm";

const MintNftButton = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    return (
        <React.Fragment>
            <MintNFTForm
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />
            <Button
                variant="contained"
                sx={{
                    width: "100%",
                }}
                onClick={() => setOpenDrawer(true)}
            >
                Mint
            </Button>
        </React.Fragment>
    );
};

export default MintNftButton;
