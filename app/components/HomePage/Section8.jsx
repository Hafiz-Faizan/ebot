const Section8 = () => {
    return (
        <section
            className="relative flex items-center justify-center w-full h-auto pb-20 bg-cover bg-center  overflow-hidden "
            style={{ backgroundImage: "url('/section/section3.png')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Optional overlay for contrast */}
            <div className="relative space-x-12 z-10 flex flex-col sm:flex-row items-center justify-between p-6 text-center">
                <div className="text-white max-w-4xl mb-4 sm:mb-0 sm:text-left pt-24">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight ">Save Clients Money <br /> and
                        Increase Your Firm’s Revenue</h2>
                    <p className="text-2xl md:text-2xl">
                        See how easy tax planning can be with Corvee.

                    </p>
                </div>
                <a
                    href="#learn-more"
                    className="text-lg lg:mt-24 font-bold px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition mt-4 sm:mt-0"
                >
                    Get a Demo
                </a>
            </div>
        </section>
    );
};

export default Section8;
