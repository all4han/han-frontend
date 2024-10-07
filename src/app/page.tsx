'use client'

import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Home() {
    const swiperRef = useRef(null);
    useEffect(() => {
        if (swiperRef.current) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const swiper = new Swiper(swiperRef.current, {
                // Swiper 옵션
                modules: [Navigation, Pagination],
                slidesPerView: 1,
                spaceBetween: 4,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }
            });
        }
    }, []);

    return (
        <main className="flex-grow container mx-auto px-6 py-12">
            <section className="w-full text-center mb-36">
                <div className="m-auto mt-40">
                    <h2 className="text-4xl font-bold gradient-text">사람을 위해,</h2>
                    <h2 className="-translate-y-4 text-4xl font-bold mb-4 text-purple-600">미래를 위해</h2>
                    <p>포트폴리오 생성, 프로젝트 관리, 팀채팅을 한 곳에서.</p>
                    <button
                        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                        바로 시작하기
                    </button>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12">
                <div className="glass-effect p-8 mb-24">
                    <h3 className="text-2xl font-semibold mb-6">참여 중인 프로젝트 한눈에 보기</h3>
                    <div id="swiper-container" ref={swiperRef} className="swiper-container">
                        <div className="swiper-wrapper">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                                <div key={i} className="swiper-slide bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold">Java Study</h4>
                                    <p>2024.09.04 ~</p>
                                    <div className="mt-2">
                                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">spring</span>
                                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">java</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </main>


    )
}