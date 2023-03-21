import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

// INTERNAL
const HeroSection = React.lazy(() => import("components/HeroSection"));
const CategorySection = React.lazy(() => import("components/CategorySection"));
const SellerSection = React.lazy(() => import("components/SellerSection"));
const CollectionListSection = React.lazy(
    () => import("components/CollectionListSection")
);
const GuideSection = React.lazy(() => import("components/GuideSection"));
import { CategoryEnum } from "constants/categories";

const Home = () => {
    return (
        <React.Fragment>
            <React.Suspense fallback={<CircularProgress />}>
                <HeroSection />
            </React.Suspense>

            <React.Suspense fallback={<CircularProgress />}>
                <CollectionListSection category={CategoryEnum.ART} />
            </React.Suspense>

            <React.Suspense fallback={<CircularProgress />}>
                <CollectionListSection category={CategoryEnum.GAME} />
            </React.Suspense>

            <React.Suspense fallback={<CircularProgress />}>
                <CollectionListSection category={CategoryEnum.MEMBERSHIP} />
            </React.Suspense>

            <React.Suspense fallback={<CircularProgress />}>
                <CollectionListSection category={CategoryEnum.PHOTOGRAPHY} />
            </React.Suspense>

            <React.Suspense fallback={<CircularProgress />}>
                <SellerSection />
            </React.Suspense>

            <React.Suspense fallback={<CircularProgress />}>
                <CategorySection />
            </React.Suspense>

            <React.Suspense fallback={<CircularProgress />}>
                <GuideSection />
            </React.Suspense>
        </React.Fragment>
    );
};

export default Home;
