import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

// INTERNAL
import "./Category.scss";
import { useParams } from "react-router-dom";
import GuideSection from "components/GuideSection";
import CategorySection from "components/CategorySection";
const CollectionListSection = React.lazy(
    () => import("components/CollectionListSection")
);

const Category = () => {
    const { category } = useParams();
    return (
        <React.Fragment>
            {category && (
                <React.Suspense fallback={<CircularProgress />}>
                    <CollectionListSection category={category} />
                </React.Suspense>
            )}
            <CategorySection />
            <GuideSection />
        </React.Fragment>
    );
};

export default Category;
