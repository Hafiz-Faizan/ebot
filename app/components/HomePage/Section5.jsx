const Section5 = () => {
    const boxes = [
        {
            id: 1,
            image: "/icon/icon5.svg", // Replace with actual image path
            title: "Offer In Compromise and Installment Agreements",
            description: (
                <div>
                    <p>
                        It is a program by the IRS that allows taxpayers to settle their tax debt for less than the full amount owed. This can be beneficial for taxpayers who are unable to pay their full tax liability due to financial hardship.
                        <br /><br />
                        <strong>Outcomes for Offer in Compromise (OIC):</strong>
                    </p>
                    <ul className="list-disc pl-5 text-left">
                        <li><strong>Doubt as to Liability (DATL):</strong> Basis: When there is a legitimate doubt that the assessed tax is correct. Use: File an OIC on this basis if you believe the IRS has made a mistake in determining your tax liability.</li>
                        <li><strong>Doubt as to Collectability (DATC):</strong> Basis: When you cannot pay the full tax debt owed due to financial hardship. Use: File an OIC on this basis if your income and assets are insufficient to pay off the tax debt.</li>
                        <li><strong>Effective Tax Administration (ETA):</strong> Basis: When paying the full tax liability would create an economic hardship or would be unfair and inequitable. Use: File an OIC on this basis if you can technically pay the debt but doing so would result in an undue hardship or would be unjust.</li>
                    </ul>
                </div>
            )
        },
        {
            id: 2,
            image: "/icon/icon6.svg", // Replace with actual image path
            title: "Installment Agreements",
            description: (
                <div>
                    <p>
                        These agreements help taxpayers manage their tax liabilities by allowing them to pay over time rather than in a single lump sum. Diagnosing your tax case will help us identify the appropriate Installment Agreement for you.
                    </p>
                    <ul className="list-disc pl-5 text-left">
                        <li><strong>Guaranteed Installment Agreement:</strong> For taxpayers who owe $10,000 or less in combined tax, penalties, and interest.</li>
                        <li><strong>Streamlined Installment Agreement:</strong> For taxpayers who owe less than $50,000 in combined tax, penalties, and interest.</li>
                        <li><strong>Partial Payment Installment Agreement:</strong> For taxpayers who can&apos;t pay their full tax liability and have little or no disposable income.</li>
                        <li><strong>Non-Streamlined Installment Agreement:</strong> For taxpayers who owe more than $50,000 in combined tax, penalties, and interest.</li>
                        <li><strong>Direct Debit Installment Agreement:</strong> Allows the IRS to automatically withdraw payments from your bank account.</li>
                        <li><strong>Non-Direct Debit Installment Agreement:</strong> Payments are made manually by the taxpayer.</li>
                        <li><strong>In-Business Trust Fund Express Installment Agreement:</strong> For businesses that owe payroll taxes and can pay the liability in full within 24 months.</li>
                        <li><strong>Offer in Compromise (OIC):</strong> An agreement between the taxpayer and the IRS to settle the tax debt for less than the full amount owed.</li>
                        <li><strong>Short-Term Payment Plan:</strong> For taxpayers who can pay their tax liability within 120 days.</li>
                        <li><strong>Long-Term Payment Plan:</strong> For taxpayers who need more than 120 days to pay their tax liability, allowing payments over up to 72 months (6 years).</li>
                    </ul>
                </div>
            )
        },
        {
            id: 3,
            image: "/icon/icon7.svg", // Replace with actual image path
            title: "Liens, Levies and Garnishments",
            description: (
                <div>
                    <p><strong>IRS Liens:</strong> A lien is a legal claim against your property when you neglect or fail to pay a tax debt. It secures the government interest in your property and can affect your credit score or ability to transfer property.</p>
                    <p><strong>IRS Levies:</strong> A levy is the actual seizure of your property to satisfy a tax debt, including wages, bank accounts, vehicles, and real estate.</p>
                </div>
            )
        },
        {
            id: 4,
            image: "/icon/icon8.svg", // Replace with actual image path
            title: "CNC and Hardship Deferment",
            description: (
                <div>
                    <p><strong>Currently Not Collectible (CNC):</strong></p>
                    <ul className="list-disc pl-5 text-left">
                        <li><strong>Temporary Relief:</strong> The IRS stops attempting to collect the tax debt.</li>
                        <li><strong>Criteria:</strong> You must demonstrate that paying the tax debt would prevent you from meeting basic living expenses.</li>
                        <li><strong>Continued Interest and Penalties:</strong> Interest and penalties continue to accrue on unpaid taxes.</li>
                    </ul>
                    <p><strong>Hardship Deferment:</strong></p>
                    <ul className="list-disc pl-5 text-left">
                        <li><strong>Temporary Relief:</strong> The IRS stops collection efforts such as levies on wages and bank accounts.</li>
                        <li><strong>Continued Interest and Penalties:</strong> Interest and penalties on unpaid taxes continue to accrue.</li>
                    </ul>
                </div>
            )
        },
        {
            id: 5,
            image: "/icon/icon9.svg", // Replace with actual image path
            title: "IRS Audits and Audit Reconsiderations",
            description: (
                <div>
                    <p>An IRS audit is a review of an individual or organization financial records to ensure tax compliance.</p>
                    <ul className="list-disc pl-5 text-left">
                        <li><strong>Correspondence Audit:</strong> Conducted by mail with requests for additional information or documentation.</li>
                        <li><strong>Office Audit:</strong> Conducted at an IRS office where you bring your records for review.</li>
                        <li><strong>Field Audit:</strong> Conducted at your home, business, or accountant office for a more comprehensive review.</li>
                    </ul>
                </div>
            )
        },
        {
            id: 6,
            image: "/icon/icon10.svg", // Replace with actual image path
            title: "Collection Due Process (CDP) and Collection Appeals Program (CAP)",
            description: (
                <div>
                    <p><strong>Collection Due Process (CDP):</strong> A formal procedure that allows taxpayers to challenge IRS collection actions, such as levies and liens, before they occur. Taxpayers can appeal the decision to the U.S. Tax Court if they disagree with the IRS&apos;s determination.</p>
                    <p><strong>Collection Appeals Program (CAP):</strong> A quicker, streamlined process to resolve disputes over IRS collection actions. CAP decisions are final and cannot be appealed to the Tax Court.</p>
                </div>
            )
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
                                <h3 className="text-2xl font-semibold mt-8 pl-2">{box.title}</h3>
                            </div>
                            <div className="text-gray-600">{box.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section5;
