const Section4 = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">All in one Tax Resolution Platform
                </h2>
                <p className="text-lg text-gray-700">
                    Regardless of your Tax Problem we can assist. Use the app to upload your tax notice and we will analyze your tax problem and advise on a solution.
                </p>
            </div>
            <div className="md:w-1/2">
                <img
                    src="/ebotCPA.webp"
                    alt="Optimize Your Tax Strategy"
                    className="rounded-lg shadow-lg"
                    style={{ width: '500px', height: '350px' }}   // Set the desired width and height here
                />
            </div>
        </div>
    );
};

export default Section4;
