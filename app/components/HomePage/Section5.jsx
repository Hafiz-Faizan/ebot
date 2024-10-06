const Section5 = () => {
    const boxes = [
        {
            id: 1,
            image: "/icon/icon5.svg", // Replace with actual image path
            title: "Tax Calculation",
            description: "Estimate taxes due and savings across multiple years with support for federal, state and local forms."
        },
        {
            id: 2,
            image: "/icon/icon6.svg", // Replace with actual image path
            title: "Tax Strategies",
            description: "Minimize taxes with Corvee’s continually updated database of 1,500+ tax strategies"
        },
        {
            id: 3,
            image: "/icon/icon7.svg", // Replace with actual image path
            title: "Entity & Compensation Optimization",
            description: "Model the impact of entity and compensation changes to help clients choose the most tax-efficient structure"
        },
        {
            id: 4,
            image: "/icon/icon8.svg", // Replace with actual image path
            title: "Multi-Entity",
            description: "See how every business and entity affects the Form 1040 across jurisdictions in one consolidated multi-entity tax calculation"
        },
        {
            id: 5,
            image: "/icon/icon9.svg", // Replace with actual image path
            title: "Smart Questionnaires",
            description: "Gather client data with tax return scanning and questionnaires, which delve deeper when needed andomit questions when possible."
        },
        {
            id: 6,
            image: "/icon/icon10.svg", // Replace with actual image path
            title: "Proposals & Plans",
            description: "Show clients your value with professional plans featuring savings, strategies, documentation and calculations for every jurisdiction.."
        },

    ];

    return (
        <section className="w-full bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {boxes.map((box) => (
                        <div key={box.id} className="border bg-white rounded-lg px-6 py-6 max-w-md flex flex-col items-center text-center shadow-lg">
                            <div className="block md:flex space-x-4 mb-4">
                                <img src={box.image} alt={box.title} className="h-24 w-24 object-contain" />
                                <h3 className="text-2xl font-semibold mt-8 pl-2">{box.title}</h3>                        </div>

                            <p className="text-gray-600">{box.description}</p>
                        </div>
                    ))}
                </div>
            </div></section>
    );
};

export default Section5;
