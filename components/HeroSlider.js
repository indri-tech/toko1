"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

const banners = [
    { id: 1, text: "Diskon 50% untuk Produk Terpilih", image: "/sale1.jpg" },
    { id: 2, text: "Belanja Nyaman dengan Harga Terbaik", image: "/sale2.jpg" },
];

export default function HeroSlider() {
    return (
        <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            autoplay={{ delay: 4000 }}
            loop={true}
            className="w-full h-80"
        >
            {banners.map((banner) => (
                <SwiperSlide key={banner.id} className="relative">
                    <img src={banner.image} alt={banner.text} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h2 className="text-white text-3xl font-bold">{banner.text}</h2>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}