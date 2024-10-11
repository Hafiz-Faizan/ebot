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
        <section className="bg-purple-700 text-white py-24 w-full flex items-center">
            <div className="container flex max-w-6xl px-6 mx-auto flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        1,500+ Tax Strategies
                    </h1>
                    <h2 className="text-2xl md:text-4xl mb-4">
                        Find Savings for Every Client
                    </h2>
                    <p className="text-xl mb-8">
                        Dont just tell clients what they owe in taxes. Tell them how much 
                        you can save them. Quickly find and calculate over 1,500 strategies at 
                        both the Federal and State level.
                    </p>
                    {/* <button 
                        onClick={openModal}
                        className="bg-white text-purple-700 px-6 py-2 rounded-full font-bold hover:bg-purple-100 transition duration-300"
                    >
                        Get Started
                    </button> */}
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img 
                        src="/tax-saving.jpg" 
                        alt="Tax Strategy Illustration" 
                        style={{ width: '600px', height: '400px', objectFit: 'cover' }} 
                    />
                </div>
            </div>
            <DemoModal isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
};

export default HeroSection;