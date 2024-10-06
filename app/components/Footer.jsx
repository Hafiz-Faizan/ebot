import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Left Section */}
                    <div className="flex flex-col mb-8 md:mb-0">
                        <div className=" items-center mb-4">
                            <h1 className="text-3xl font-bold">ebotCPA</h1>
                            <p className="text-sm">(305) 985-7740</p>
                        </div>
                        <a href="#" className="mt-4 bg-white text-gray-900 px-4 py-2 rounded-md text-center">
                            Client Login
                        </a>
                    </div>

                    {/* Center Sections */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        <div>
                            <h3 className="font-semibold mb-2">About ebotCPA</h3>
                            <ul className="space-y-1">
                                <li><a href="#" className="hover:text-gray-400">Who We Are</a></li>
                             
                                <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                                <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Tax</h3>
                            <ul className="space-y-1">
                                <li><a href="#" className="hover:text-gray-400">Tax Compliance</a></li>
                                <li><a href="#" className="hover:text-gray-400">Tax Resolution</a></li>
                                <li><a href="#" className="hover:text-gray-400">Tax Planning</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">financialReporting</h3>
                            <ul className="space-y-1">
                                <li><a href="#" className="hover:text-gray-400">Fractional CFO</a></li>
                                <li><a href="#" className="hover:text-gray-400">Accounting</a></li>
                                <li><a href="#" className="hover:text-gray-400">Bookkeeping</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">s4Finance</h3>
                            <ul className="space-y-1">
                                <li><a href="#" className="hover:text-gray-400">Implementations</a></li>
                                <li><a href="#" className="hover:text-gray-400">Central Finance (CFIN)</a></li>
                                <li><a href="#" className="hover:text-gray-400">Support and Training</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
                    <p>© 2024 ebotCPA</p>
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        <a href="#" className="hover:text-gray-400">Privacy</a>
                        <a href="#" className="hover:text-gray-400">Terms</a>
                        <a href="#" className="hover:text-gray-400">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
