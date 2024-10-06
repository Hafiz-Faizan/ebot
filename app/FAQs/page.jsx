'use client';
import React, { useState } from 'react';

const FAQsIRSPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index); // Toggle open/close
  };

  const faqData = [
    {
      question: "1. Offer in Compromise",
      answer: "This service allows you to settle your tax debt for less than the full amount owed if paying the full amount would cause financial hardship.",
      example: "Example: John owes $50,000 in taxes but can only afford to pay $10,000. We negotiate with the IRS to accept the $10,000 as full payment."
    },
    {
      question: "2. Installment Agreement",
      answer: "This is an arrangement where you can pay off your tax debt over time through monthly payments.",
      example: "Example: Sarah owes $20,000 in taxes. We set up a plan for her to pay $500 per month until the debt is cleared."
    },
    {
      question: "3. Penalty Abatement",
      answer: "If you have a reasonable cause for not meeting tax obligations, this service can reduce or remove penalties applied to your account.",
      example: "Example: Due to a medical emergency, Mike missed his tax filing deadline. We help him get the penalties waived."
    },
    {
      question: "4. Innocent Spouse Relief",
      answer: "This provides relief from additional tax owed if your spouse or former spouse failed to report income, reported income improperly, or claimed improper deductions or credits.",
      example: "Example: Lisa discovers her ex-husband underreported income. We help her avoid paying the additional taxes he owes."
    },
    {
      question: "5. Tax Lien Removal",
      answer: "This service helps remove liens placed on your property as security for payment of tax debts once those debts are paid or terms are met.",
      example: "Example: After paying off his tax debt, we assist Tom in getting the lien on his house removed."
    },
    {
      question: "6. Tax Levy Release",
      answer: "If the IRS has levied your assets (like bank accounts), this service works towards releasing the levy once compliance with certain conditions is met.",
      example: "Example: The IRS levies Jane’s bank account. We negotiate the release of the levy by setting up a payment plan."
    },
    {
      question: "7. Wage Garnishment Release",
      answer: "This stops the IRS from taking part of your salary directly from your paycheck to cover unpaid taxes.",
      example: "Example: Mark’s wages are being garnished. We work to stop the garnishment and set up an alternative payment plan."
    },
    {
      question: "8. Audit Representation",
      answer: "Professional representation during an audit by the IRS, helping ensure that your rights are protected and minimizing potential additional liabilities.",
      example: "Example: During an IRS audit, we represent Emily to ensure she only pays what she truly owes."
    },
    {
      question: "9. Currently Not Collectible Status (CNC)",
      answer: "If you cannot pay due to financial hardship, this status prevents the IRS from engaging in collection activities like levies or garnishments.",
      example: "Example: Due to unemployment, Alex can’t pay his taxes. We get him CNC status to halt collection efforts."
    },
    {
      question: "10. Tax Preparation for Unfiled Returns",
      answer: "Assistance with preparing and filing back taxes that have not been submitted in previous years.",
      example: "Example: Maria hasn’t filed taxes for three years. We help her prepare and file all her overdue returns."
    },
    {
      question: "11. Trust Fund Recovery Penalty",
      answer: "This service helps resolve penalties assessed against individuals responsible for withholding taxes that were not paid to the IRS.",
      example: "Example: As a business owner, Sam faces penalties for unpaid payroll taxes. We help reduce or eliminate these penalties."
    },
    {
      question: "12. State Tax Resolution",
      answer: "Assistance with resolving state tax issues, including unpaid taxes, penalties, and audits.",
      example: "Example: Karen owes state taxes. We negotiate with the state tax authority to reduce her debt."
    },
    {
      question: "13. Payroll Tax Resolution",
      answer: "Help with resolving issues related to unpaid payroll taxes, including penalties and interest.",
      example: "Example: Bob’s business owes payroll taxes. We set up a payment plan to resolve the debt."
    },
    {
      question: "14. Business Tax Resolution",
      answer: "Assistance with resolving tax issues specific to businesses, including unpaid taxes, audits, and penalties.",
      example: "Example: A small business faces an IRS audit. We represent them to ensure a fair outcome."
    },
    {
      question: "15. IRS Appeals",
      answer: "Representation in appealing IRS decisions, such as audit results or penalties.",
      example: "Example: After an unfavorable audit, we help Jane appeal the IRS’s decision."
    },
    {
      question: "16. Tax Account Monitoring",
      answer: "Ongoing monitoring of your tax account to ensure compliance and avoid future issues.",
      example: "Example: We regularly check John’s tax account to ensure he stays compliant and avoids penalties."
    },
    {
      question: "17. Bankruptcy Assistance",
      answer: "Help with understanding how bankruptcy affects your tax debts and navigating the process.",
      example: "Example: Facing bankruptcy, we guide Lisa on how it impacts her tax obligations."
    },
    {
      question: "18. Tax Debt Settlement",
      answer: "Negotiating with the IRS to settle your tax debt for less than the full amount owed.",
      example: "Example: We negotiate a settlement for Tom, reducing his $30,000 tax debt to $10,000."
    },
    {
      question: "19. Tax Consultation",
      answer: "Professional advice on tax-related matters to help you make informed decisions.",
      example: "Example: We provide Sarah with advice on how to minimize her tax liability for the upcoming year."
    },
    {
      question: "20. Financial Analysis and Planning",
      answer: "Comprehensive analysis and planning to improve your financial situation and tax compliance.",
      example: "Example: We help Alex create a financial plan to manage his taxes and improve his overall financial health."
    },
    {
      question: "21. CNC (Currently Not Collectible)",
      answer: "Similar to Currently Not Collectible Status, this service helps you if you cannot pay your tax debt due to financial hardship.",
      example: "Example: We help Mark obtain CNC status, stopping IRS collection efforts due to his financial situation."
    },
    {
      question: "22. DTL (Doubt as to Liability)",
      answer: "This service helps you dispute the amount of tax the IRS claims you owe if you believe it is incorrect.",
      example: "Example: Jane disputes a $5,000 tax bill. We help her prove she doesn’t owe that amount."
    },
    {
      question: "23. DTC (Doubt as to Collectibility)",
      answer: "This service helps you settle your tax debt for less than the full amount if you can prove you cannot pay the full amount.",
      example: "Example: We negotiate a settlement for Mike, reducing his $20,000 tax debt to $5,000."
    },
    {
      question: "24. ETA (Effective Tax Administration)",
      answer: "This service helps you settle your tax debt if paying it would cause economic hardship, even if you can technically afford to pay the full amount.",
      example: "Example: Lisa can technically pay her $15,000 tax debt, but it would cause severe financial hardship. We help her settle for less."
    },
    {
      question: "25. CDP (Collection Due Process)",
      answer: "This service helps you request a hearing with the IRS to dispute a lien or levy.",
      example: "Example: After receiving a levy notice, we help John request a CDP hearing to dispute it."
    },
    {
      question: "26. RCP (Reasonable Cause Penalty Relief)",
      answer: "This service helps you get penalties removed if you can show you had a reasonable cause for not complying with tax laws.",
      example: "Example: Due to a natural disaster, Sarah missed her tax deadline. We help her get the penalties waived."
    },
    {
      question: "27. Audit Reconsideration",
      answer: "This service helps you request a review of an audit if you disagree with the results.",
      example: "Example: After an unfavorable audit, we help Tom request reconsideration and present new evidence."
    },
    {
      question: "28. General Notice Review",
      answer: "This service helps you understand and respond to IRS notices.",
      example: "Example: We help Maria understand and respond to a notice about her tax return."
    },
    {
      question: "29. Form 8821 (Tax Information Authorization)",
      answer: "This form allows us to receive your tax information from the IRS to better assist you.",
      example: "Example: We file Form 8821 to access John’s tax records and provide accurate advice."
    },
    {
      question: "30. Form 2848 (Power of Attorney)",
      answer: "This form allows us to represent you before the IRS.",
      example: "Example: We file Form 2848 to represent Sarah in her dealings with the IRS."
    },
    {
      question: "31. Average Reasonable Amount",
      answer: "This service helps determine a fair amount to offer in a settlement based on your financial situation.",
      example: "Example: We calculate a reasonable offer for Mike’s tax settlement based on his income and expenses."
    },
    {
      question: "32. Form 433-A (Collection Information Statement for Wage Earners and Self-Employed Individuals)",
      answer: "This form provides the IRS with detailed financial information to evaluate your ability to pay.",
      example: "Example: We help Lisa complete Form 433-A to negotiate a payment plan with the IRS."
    },
    {
      question: "33. Form 433-B (Collection Information Statement for Businesses)",
      answer: "This form provides the IRS with detailed financial information about your business to evaluate its ability to pay.",
      example: "Example: We assist Tom’s business in completing Form 433-B to negotiate a payment plan."
    },
    {
      question: "34. Form 433-F (Collection Information Statement)",
      answer: "This simplified form provides the IRS with financial information to evaluate your ability to pay.",
      example: "Example: We help Sarah complete Form 433-F to set up an installment agreement."
    },
    {
      question: "35. Form 433-A (OIC) (Collection Information Statement for Wage Earners and Self-Employed Individuals for Offer in Compromise)",
      answer: "This form is used specifically for submitting an Offer in Compromise.",
      example: "Example: We assist John in completing Form 433-A (OIC) to submit an offer to settle his tax debt for less than the full amount."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">FAQs - IRS Tax Resolutions</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        The most common questions users have are listed below.
      </p>
      <div className="space-y-4 max-w-5xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h2 className="text-xl font-bold">
                {faq.question}
              </h2>
              <span>{openFaq === index ? "▲" : "▼"}</span>
            </div>

            {openFaq === index && (
              <div className="mt-2">
                <p className="text-lg mb-2">{faq.answer}</p>
                <p className="text-sm text-gray-500 italic">{faq.example}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsIRSPage;
