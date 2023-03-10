import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

// INTERNAL
const HeroSection = React.lazy(() => import("components/HeroSection"));
const CategorySection = React.lazy(() => import("components/CategorySection"));
const SellerSection = React.lazy(() => import("components/SellerSection"));
const TrendingSection = React.lazy(() => import("components/TrendingSection"));
const GuideSection = React.lazy(() => import("components/GuideSection"));

const Home = () => {
    return (
        <React.Fragment>
            <React.Suspense fallback={<CircularProgress />}>
                <HeroSection />
            </React.Suspense>

            <React.Suspense fallback={<CircularProgress />}>
                <TrendingSection />
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
