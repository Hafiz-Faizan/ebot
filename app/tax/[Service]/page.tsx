'use client'
import React, {  useState } from 'react';


const TaxServicesSection = (params) => {
    const service = (params.params.Service);
  const [openAccordions, setOpenAccordions] = useState({});




  const serviceData = {

        "TaxPlanning": [
          {
            title: "Income Timing Optimization",
            responsibilities: "Analyze financial situations to determine the best times to receive income. This involves planning when to recognize income to minimize tax liability.",
            impact: "Reduces overall tax burden, increasing disposable income. Failure to Optimize: Could result in higher tax liabilities and reduced cash flow, impacting financial stability."
          },
          {
            title: "Deductions and Credits Maximization",
            responsibilities: "Ensure clients claim all possible deductions and credits. This includes identifying eligible expenses and credits to lower taxable income.",
            impact: "Lowers taxable income, resulting in significant tax savings. Failure to Maximize: Missing out on deductions and credits can lead to paying more taxes than necessary, reducing available funds for other needs."
          },
          {
            title: "Retirement Planning",
            responsibilities: "Advise on contributions to retirement accounts like IRAs and 401(k)s. This helps clients save for retirement in a tax-efficient manner.",
            impact: "Enhances long-term financial security while reducing current tax liabilities. Failure to Plan: Inadequate retirement savings and higher tax bills can jeopardize future financial security."
          },
          {
            title: "Investment Tax Strategies",
            responsibilities: "Guide clients on investments that offer tax advantages. This includes selecting investments that minimize tax impact.",
            impact: "Maximizes investment returns by minimizing tax impact. Failure to Strategize: Poor investment choices can lead to higher taxes and lower overall returns, affecting financial growth."
          },
          {
            title: "Estate Planning",
            responsibilities: "Create estate plans that minimize estate and gift taxes. This ensures a tax-efficient transfer of assets to heirs.",
            impact: "Preserves wealth for future generations. Failure to Plan: Heirs may face significant tax burdens, reducing the value of the inheritance and causing financial strain."
          }
        ],
        "TaxResolution": [
          {
            title: "IRS Audit Representation",
            responsibilities: "Prepare and present documentation to the IRS. This involves defending clients during audits to ensure fair treatment.",
            impact: "Protects clients from potential penalties and ensures fair treatment. Failure to Represent: Can result in hefty penalties, interest, and additional taxes, causing financial distress."
          },
          {
            title: "Tax Debt Settlement",
            responsibilities: "Work with the IRS to reduce the amount owed. This includes negotiating settlements for outstanding tax debts.",
            impact: "Alleviates financial stress by reducing tax liabilities. Failure to Settle: Unresolved tax debts can lead to wage garnishments, liens, and severe financial hardship."
          },
          {
            title: "Penalty Abatement",
            responsibilities: "File for penalty abatement based on reasonable cause. This seeks relief from tax penalties.",
            impact: "Reduces or eliminates penalties, lowering overall tax debt. Failure to Abate: Accumulating penalties can significantly increase tax debt, making it harder to manage."
          },
          {
            title: "Installment Agreements",
            responsibilities: "Negotiate manageable payment terms with the IRS. This sets up payment plans for tax debts.",
            impact: "Provides a structured way to pay off tax debts without financial strain. Failure to Arrange: Lack of payment plans can lead to enforced collections, including asset seizures."
          },
          {
            title: "Offer in Compromise",
            responsibilities: "Prepare and submit offers to the IRS. This involves negotiating to settle tax debts for less than the full amount owed.",
            impact: "Resolves tax debts for a fraction of the original amount, providing financial relief. Failure to Compromise: Full tax debt remains, leading to ongoing financial pressure and potential legal action."
          }
        ],
        "TaxCompliance": [
          {
            title: "Accurate Tax Filing",
            responsibilities: "Prepare and file federal, state, and local tax returns. This ensures all tax obligations are met accurately and on time.",
            impact: "Avoids penalties and interest, ensuring compliance with tax laws. Failure to File: Late or inaccurate filings can result in significant penalties, interest, and legal issues."
          },
          {
            title: "Record Keeping",
            responsibilities: "Keep detailed records of all financial transactions. This is crucial for accurate tax reporting and audit readiness.",
            impact: "Facilitates accurate tax reporting and audit readiness. Failure to Keep Records: Poor record-keeping can lead to inaccurate tax filings, audits, and potential penalties."
          },
          {
            title: "Tax Payment Management",
            responsibilities: "Calculate and remit taxes due, including estimated and payroll taxes. This ensures timely payment of all tax obligations.",
            impact: "Prevents penalties and interest from late payments. Failure to Manage Payments: Late payments can incur penalties and interest, increasing overall tax liability."
          },
          {
            title: "Regulatory Compliance",
            responsibilities: "Monitor changes in tax laws and ensure compliance. This keeps clients updated with current tax regulations.",
            impact: "Avoids legal issues and ensures adherence to current tax regulations. Failure to Comply: Non-compliance can result in legal actions, fines, and damage to reputation."
          },
          {
            title: "Tax Reporting",
            responsibilities: "Compile and submit reports such as sales tax and employment tax returns. This ensures all required tax reports are filed accurately.",
            impact: "Ensures compliance with reporting requirements, avoiding fines and penalties. Failure to Report: Inaccurate or missed reports can lead to fines, penalties, and increased scrutiny from tax authorities."
          }
        ]
      
  };


 

  const toggleAccordion = (title) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };



  return (
    <div className="container mx-auto p-6 max-w-6xl">
      
      <div className="max-w-2xl">
        {serviceData[service]?.map((item) => (
          <div key={item.title} className="border-b pb-4 mb-4">
           
            <h2
              className="text-xl font-bold cursor-pointer flex items-center justify-between"
              onClick={() => toggleAccordion(item.title)}
              aria-expanded={openAccordions[item.title]}
            >
              {item.title}
              <span>{openAccordions[item.title] ? "▲" : "▼"}</span>
            </h2>

            {/* Accordion Content */}
            {openAccordions[item.title] && (
              <div className="pl-4 mt-2">
                <p>
                  <strong>Responsibilities:</strong> {item.responsibilities}
                </p>
                <p>
                  <strong>Impact:</strong> {item.impact}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaxServicesSection;
