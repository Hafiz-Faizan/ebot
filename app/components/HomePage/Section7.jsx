import Image from 'next/image';

const Section7 = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
                <div className="flex flex-col items-center p-4 transition">
                    <Image src="/icon/icon11.png" height={120} width={120} alt="icon" />
                    <p className="text-2xl font-bold text-center px-6 pt-4">Tax Notice Diagnosis</p>
                    <p className="text-sm font-normal text-center pt-4">
                        An IRS tax notice is a letter or document sent by the IRS to inform you about a specific issue related to your tax account or tax return. We can solve your tax problem from the IRS notice you received. It starts here! Let&apos;s diagnose your case and build a solution to defend you before the IRS. 
                        {/* <br /><br />
                        20 Notices that require Quick Actions. These notices are serious and require immediate attention to avoid severe consequences. If you receive any of these notices, it's crucial to act promptly and seek professional help. */}
                    </p>
                </div>
                
                <div className="flex flex-col items-center p-4 transition">
                    <Image src="/icon/icon12.png" height={120} width={120} alt="icon" />
                    <p className="text-2xl font-bold text-center pt-4">Tax Resolution Plan</p>
                    <p className="text-sm font-normal text-center pt-4">
                        Once we diagnose the Tax Notice, we review your transcripts, gather facts, and build your IRS Tax Resolution case to present to the IRS on your behalf.
                    </p>
                </div>
                
                <div className="flex flex-col items-center p-4 transition">
                    <Image src="/icon/icon13.png" height={120} width={120} alt="icon" />
                    <p className="text-2xl font-bold text-center px-6 pt-4">Responsive Support</p>
                    <p className="text-sm font-normal text-center pt-4">
                        We represent you before the IRS and take the driver&apos;s seat. You communicate with us, and we communicate with the IRS on your behalf, giving you peace of mind.
                    </p>
                </div>
                
                <div className="flex flex-col items-center p-4 transition">
                    <Image src="/icon/icon14.png" height={120} width={120} alt="icon" />
                    <p className="text-2xl font-bold text-center px-6 pt-4">World-Class Expertise</p>
                    <p className="text-sm font-normal text-center pt-4">
                        We have the expertise to solve your tax problems and the credentials to represent you before the IRS. Remember, CPAs are highly competent specialists and have a wide array of training geared towards resolving IRS problems.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Section7;
