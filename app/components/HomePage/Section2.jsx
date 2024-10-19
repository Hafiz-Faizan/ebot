import Image from 'next/image';

const Section2 = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className=" text-1xl md:text-4xl lg:text-5xl font-extrabold text-center  mb-8 lg:px-24 md:px-12 px-6 leading-tight">
            Simplified Affordable <br />Approach to IRS dispute resolutions. PEACE of MIND. 
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 ">
                <div className="flex flex-col items-center p-4  transition">
                    <Image src="/icon/icon1.svg" height={120} width={120} alt='icon' />
                    <p className="text-2xl font-bold text-center px-6 pt-4">Diagnose the IRS Tax Notice.</p>
                </div>
                <div className="flex flex-col items-center p-4  transition">
                    <Image src="/icon/icon2.svg" height={120} width={120} alt='icon' />
                    <p className="text-2xl font-bold text-center  pt-4">Apply  Tax Dispute Resolution Strategies.
                    </p>
                </div>
                <div className="flex flex-col items-center p-4  transition">
                    <Image src="/icon/icon3.svg" height={120} width={120} alt='icon' />
                    <p className="text-2xl font-bold text-center px-6 pt-4">Create a Tax Resolution Plan to give your Tax Relief.</p>
                </div>
                <div className="flex flex-col items-center p-4  transition">
                    <Image src="/icon/icon4.svg" height={120} width={120} alt='icon' />
                    <p className="text-2xl font-bold text-center px-6 pt-4">Analyze and Resolve the Tax Problem based on your Tax Scenario.</p>
                </div>
            </div>
        </section>
    );
};

export default Section2;
