import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Autoplay } from "swiper";
import "swiper/css";

// INTERNAL
import "./Slider.scss";
// import { useAppSelector } from "common/app/hook";
// import { Product } from "models/products/typings";
// import { productsApi } from "services";
// import { default as ProductComponent } from "../Product/Product";

export type SliderProps = {
    cat?: string;
    title?: string;
};

export default React.memo(function Slider({
    cat,
    title = "Product",
}: SliderProps) {
    // const products = useAppSelector((state) => state.products.data);
    // const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    //     []
    // );
    // useEffect(() => {
    //     const fetchProducts = (cat: string) => {
    //         productsApi.getByCategories(cat).then((res) => {
    //             return setFilteredProducts(res);
    //         });
    //     };
    //     cat ? fetchProducts(cat) : setFilteredProducts(products);
    // }, [cat, products]);
    return (
        <section className="section slider">
            <h2 className="section-title">{title}</h2>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                slidesPerGroup={2}
                speed={4000}
                loop={true}
                modules={[Autoplay, Lazy]}
                autoplay={{
                    delay: 2000,
                }}
            >
                {/* {filteredProducts?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ProductComponent item={item} />
                    </SwiperSlide>
                ))} */}
                {/* Prevent empty items in swiper */}
                <SwiperSlide>
                    <></>
                </SwiperSlide>
            </Swiper>
        </section>
    );
});
