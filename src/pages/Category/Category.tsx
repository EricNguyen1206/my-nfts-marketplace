import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

// INTERNAL
import "./Category.scss";
const CategorySection = React.lazy(() => import("components/CategorySection"));
import GuideSection from "components/GuideSection";
import CollectionListSection from "components/CollectionListSection";
import { useParams } from "react-router-dom";

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
