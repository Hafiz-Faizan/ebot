import Image from 'next/image';

const Section7 = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 ">
                <div className="flex flex-col items-center p-4  transition">
                    <Image src="/icon/icon11.png" height={120} width={120} alt='icon' />
                    <p className="text-2xl font-bold text-center px-6 pt-4">Thriving Community
                    </p>
                    <p className='text-sm font-normal text-center pt-4'>Private client community for power users coupled with those who have built successful tax planning firms

                    </p>
                </div>
                <div className="flex flex-col items-center p-4  transition">
                    <Image src="/icon/icon12.png" height={120} width={120} alt='icon' />
                    <p className="text-2xl font-bold text-center  pt-4">Detailed Documentation

                    </p>
                    <p className='text-sm font-normal text-center pt-4'>Descriptions, tax code references and requirements for every tax-saving strategy, right in the tool

                    </p>
                </div>
                <div className="flex flex-col items-center p-4  transition">
                    <Image src="/icon/icon13.png" height={120} width={120} alt='icon' />
                    <p className="text-2xl font-bold text-center px-6 pt-4">Responsive Support
                    </p>
                    <p className='text-sm font-normal text-center pt-4'>
                        Dedicated client success manager and free support via chat, email and phone


                    </p>
                </div>
                <div className="flex flex-col items-center p-4  transition">
                    <Image src="/icon/icon14.png" height={120} width={120} alt='icon' />
                    <p className="text-2xl font-bold text-center px-6 pt-4">World-Class Expertise
                    </p>
                    <p className='text-sm font-normal text-center pt-4'>Direct access to Corvee’s team of tax and accounting experts to answer your questions

                    </p>
                </div>
            </div>
        </section>
    );
};

export default Section7;
