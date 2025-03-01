"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const products = [
    { id: 1, name: "", image: "/images/image6.jpg" },
    { id: 2, name: "", image: "/images/image3.jpg" },
    { id: 3, name: "", image: "/images/image7.jpg" },
    { id: 4, name: "", image: "/images/image8.jpg" },
    { id: 5, name: "", image: "/images/image1.jpg" },
];

export default function ProductSlider() {
    return (
        <div className="w-full max-w-3xl mx-auto">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
                loop={true}
                className="w-full h-72"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="flex justify-center items-center bg-gray-200">
                        <div className="text-center">
                            <img src={product.image} alt={product.name} className="h-100 w-200 mx-auto" />
                            <p className="mt-2 font-semibold">{product.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}