"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const products = [
    { id: 1, name: "Laptop", image: "/laptop.jpg" },
    { id: 2, name: "Smartphone", image: "/smartphone.jpg" },
    { id: 3, name: "Headphones", image: "/headphones.jpg" },
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
                            <img src={product.image} alt={product.name} className="h-40 mx-auto" />
                            <p className="mt-2 font-semibold">{product.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}