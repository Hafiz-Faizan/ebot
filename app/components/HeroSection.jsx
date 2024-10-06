"use client";

import { useState } from 'react';
import DemoModal from './HomePage/DemoModal';  // Import the modal

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="pt-20 lg:pt-0 lg:pb-0 relative w-full h-auto lg:h-[70vh] bg-cover bg-left md:bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/HeroSection.jpg')" }}>
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="relative z-10 max-w-6xl space-y-4 mx-auto h-full flex flex-col justify-center items-start pb-8 px-12 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    1,500+ Tax Strategies
                </h1>
                <h2 className="text-2xl md:text-4xl mb-4 pb-4">
                    Find Savings for Every Client
                </h2>
                <p className="text-lg mb-6">
                    Don’t just tell clients what they owe in taxes. Tell them how much <br /> you can save them. Quickly find and calculate over 1,500 strategies at <br /> both the Federal and State level.
                </p>
                <button onClick={openModal} className="text-lg font-bold px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                    Get a Demo
                </button>
            </div>

            <DemoModal isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
};

export default HeroSection;
