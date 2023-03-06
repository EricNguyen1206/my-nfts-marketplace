/* eslint-disable camelcase */
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { postNewCollection } from "services/collectionApi";

// INTERNAL
import { getUserData } from "services/userApi";
import { User } from "./typings";

// CREATE ACTIONS
const createNewCollection = createAsyncThunk(
    "user/createNewCollection",
    async ({
        sdk,
        name,
        description,
        image,
        fee_recipient,
        primary_sale_recipient,
    }: {
        sdk: any;
        name: string;
        description: string;
        image: any;
        fee_recipient: string;
        primary_sale_recipient: string;
    }) => {
        try {
            if (sdk && name && description && primary_sale_recipient) {
                toast.promise(
                    postNewCollection(
                        sdk,
                        name,
                        description,
                        image,
                        fee_recipient,
                        primary_sale_recipient
                    ),
                    {
                        loading: "Transaction processing...",
                        success: "Transaction success!",
                        error: "Error when deploying your contract 😥",
                    },
                    {
                        style: {
                            minWidth: "250px",
                        },
                        success: {
                            duration: 1500,
                            icon: "🔥",
                        },
                    }
                );
            } else {
                toast.error("Something when wrong 😥");
            }
        } catch (error) {
            toast.error("Something when wrong 😥");
        }
    }
);

// READ ACTIONS
const readUserData = createAsyncThunk(
    "user/readUserData",
    async (address: string) => {
        const data: User = await getUserData(address);
        return data;
    }
);

export { createNewCollection, readUserData };
