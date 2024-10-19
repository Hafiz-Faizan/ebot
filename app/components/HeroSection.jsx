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
                50 plus IRS Tax Resolution Services 
                </h1>
                <h2 className="text-2xl md:text-4xl mb-4 pb-4">
                Solving Tax Problems per Client
                </h2>
                <p className="text-lg mb-6">
                We analyze your tax issue and we find relief for your tax issues. 
                </p>
                <p className="text-lg mb-6">
                Quickly find out what the solution is for your tax burden. Upload your IRS Tax Notice. 
                </p>
                
                
            </div>

            <DemoModal isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
};

export default HeroSection;
