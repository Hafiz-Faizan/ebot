"use client";  // Ensure this is a client component

import { useEffect } from 'react';
import Modal from 'react-modal';

const DemoModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Demo Modal"
            className="w-full max-w-5xl mx-auto p-12 bg-white shadow-2xl rounded-lg relative z-50"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-40"
        >
            {/* Modal Close Button */}
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 text-xl">X</button>

            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
                
                {/* Left Section: Text */}
                <div className="md:w-1/2 pt-6">  {/* Added padding-top */}
                    <h2 className="text-4xl font-bold mb-4 text-indigo-700">Schedule a Free Demo with Q&A</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Let us show you how you could save your clients thousands of dollars and <span className="font-semibold text-gray-900">make tax planning easier than ever with Corvee.</span>
                    </p>
                </div>

                {/* Right Section: Form */}
                <div className="md:w-1/2">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                className="border border-gray-300 rounded-lg p-4 w-full"
                            />
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                className="border border-gray-300 rounded-lg p-4 w-full"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="border border-gray-300 rounded-lg p-4 w-full"
                            />
                            <input 
                                type="tel" 
                                placeholder="Phone" 
                                className="border border-gray-300 rounded-lg p-4 w-full"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <select className="border border-gray-300 rounded-lg p-4 w-full">
                                <option value="">What is your firm revenue?</option>
                                <option value="less than 100k">Less than 100k</option>
                                <option value="100k - 500k">100k - 500k</option>
                                <option value="500k+">500k+</option>
                            </select>
                        </div>

                        <div className="flex justify-center mt-8">  {/* Centering the button */}
                            <button type="submit" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition w-full sm:w-auto">
                                Get a Demo
                            </button>
                        </div>

                        {/* Terms and Conditions */}
                        <p className="text-xs text-gray-500 mt-6 text-center">
                            By clicking the button above I confirm that I have read and agree to the <a href="#" className="text-indigo-600">Terms & Conditions</a> and <a href="#" className="text-indigo-600">Privacy Policy</a>.
                        </p>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default DemoModal;
