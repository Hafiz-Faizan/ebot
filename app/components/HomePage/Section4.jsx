const Section4 = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        The Only All-in-One Tax Planning Platform
                    </h2>
                    <p className="text-lg text-gray-700">
                        Whether you are an accountant, tax preparer or financial advisor, the ebotCPA Platform is your comprehensive solution to help you do tax planning right.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img
                        src="/ebotCPA.webp"
                        width={600}
                        height={250}
                        alt="Optimize Your Tax Strategy"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Section4;