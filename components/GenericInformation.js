"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";


const GenericInformation = () => {
    const imageData = [
        "/images/gallery1.jpg",
        "/images/gallery2.jpg",
        "/images/gallery3.jpg",
        "/images/gallery4.jpg"
    ];
    return (
        <section className="bg-black py-16 px-6 md:px-12 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-tedRed mb-12">
                Event Information
            </h2>

            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className="w-full pb-12"
            >
                {imageData.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full rounded-lg overflow-hidden shadow-xl transition-transform ease-in-out">
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="object-cover w-full h-full"
                                fill
                                sizes="(max-width: 480px) 100vw, (max-width: 640px) 50vw, (max-width: 1024px) 33vw"
                                quality={75}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default GenericInformation;
