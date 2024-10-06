const Section3 = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 mb-12">
            <section
                className="relative flex items-center justify-center w-full h-[300px] bg-cover bg-center rounded-lg overflow-hidden"
                style={{ backgroundImage: "url('/section/section3.png')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div> {/* Optional overlay for contrast */}
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between p-6 text-center">
                    <div className="text-white max-w-2xl mb-4 sm:mb-0 sm:text-left">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">See How Corvee Can Help You Save Your Clients Money</h2>

                    </div>
                    <a
                        href="#learn-more"
                        className="text-lg font-bold px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition mt-4 sm:mt-0"
                    >
                        Get a Demo
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Section3;
