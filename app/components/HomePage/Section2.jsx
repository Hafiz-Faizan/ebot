import Image from 'next/image';

const Section2 = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className=" text-2xl md:text-4xl lg:text-5xl font-extrabold text-center  mb-8 lg:px-24 md:px-12 px-6 leading-tight">
                Tax Planning Software <br />to Build a More Profitable Firm
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 ">
                <div className="flex flex-col items-center p-4  transition">
                    <Image src="/icon/icon1.svg" height={120} width={120} alt='icon' />
                    <p className="text-2xl font-bold text-center px-6 pt-4">Calculate
                        Taxes Owed</p>
                </div>
                <div className="flex flex-col items-center p-4  transition">
                    <Image src="/icon/icon2.svg" height={120} width={120} alt='icon' />
                    <p className="text-2xl font-bold text-center  pt-4">Apply Tax
                        Planning Strategies
                    </p>
                </div>
                <div className="flex flex-col items-center p-4  transition">
                    <Image src="/icon/icon3.svg" height={120} width={120} alt='icon' />
                    <p className="text-2xl font-bold text-center px-6 pt-4">Create a
                        Tax Plan</p>
                </div>
                <div className="flex flex-col items-center p-4  transition">
                    <Image src="/icon/icon4.svg" height={120} width={120} alt='icon' />
                    <p className="text-2xl font-bold text-center px-6 pt-4">Analyze Any
                        Tax Scenario</p>
                </div>
            </div>
        </section>
    );
};

export default Section2;
