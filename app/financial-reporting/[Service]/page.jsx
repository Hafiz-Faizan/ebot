
'use client'
import { useState } from "react";
import ClosingStatement from "../../components/ClosingStatement";

const FinancialServicesSection = (params) => {
  const service = (params.params.Service);  
  const [openAccordions, setOpenAccordions] = useState({});


  const toggleAccordion = (title) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };
  

  const serviceData = {
    bookkeeping: [
      {
        title: "Transaction Recording",
        responsibilities: "Record all financial transactions, including sales, purchases, receipts, and payments, in the accounting software.",
        impact: "Ensures accurate and up-to-date financial records."
      },
      {
        title: "Bank Reconciliation",
        responsibilities: "Reconcile bank statements with the company's financial records to ensure consistency and accuracy.",
        impact: "Identifies discrepancies and prevents fraud."
      },
      {
        title: "Accounts Payable and Receivable",
        responsibilities: "Manage invoices and payments to suppliers (accounts payable) and track incoming payments from clients (accounts receivable).",
        impact: "Maintains healthy cash flow and good supplier relationships."
      },
      {
        title: "Payroll Processing",
        responsibilities: "Track and manage customer invoices, follow up on overdue payments, and process incoming paymentsCalculate and process employee salaries, wages, bonuses, and deductions.",
        impact: "Ensures employees are paid accurately and on time."
      },
      {
        title: "Financial Statements",
        responsibilities: "Generate financial reports, such as profit and loss statements and balance sheets, for management review.",
        impact: "Provides insights into the financial health of the business."
      }
    ],
    Accounting: [
      {
        title: "Financial Reporting and Analysis",
        responsibilities: "Prepare and analyze financial statements, including balance sheets, income statements, and cash flow statements.",
        impact: "Provides a clear picture of the company’s financial performance and health."
      },
      {
        title: "Budgeting and Forecasting",
        responsibilities: "Develop budgets and financial forecasts to guide business planning and decision-making.",
        impact: " Helps the business plan for future growth and manage resources effectively."
      },
      {
        title: "Audit and Compliance",
        responsibilities: "Conduct internal audits, ensure compliance with financial regulations, and prepare for external audits.",
        impact: "Ensures accuracy and integrity of financial records and compliance with laws."
      },
      {
        title: "Cost Management",
        responsibilities: "Analyze and manage costs to improve profitability and efficiency.",
        impact: "Identifies cost-saving opportunities and enhances financial performance."
      },
      {
        title: "Risk Management",
        responsibilities: "Identify, assess, and manage financial risks, including credit risk, market risk, and operational risk. Develop strategies to mitigate these risks.",
        impact: "Protects the business from potential financial losses and ensures long-term stability."
      }
    ],
    Fractional_CFO: [
      {
        title: "Strategic Financial Planning",
        responsibilities: "Develop long-term financial strategies aligned with business goals, including growth plans and risk management.",
        impact: "Provides high-level financial guidance to drive business success and sustainability."
      },
      {
        title: "Financial Analysis and Modeling",
        responsibilities: "Create complex financial models to analyze business performance, evaluate investment opportunities, and support decision-making.",
        impact: "Enables data-driven decision-making and helps optimize financial performance."
      },
      {
        title: "Capital Raising and Management",
        responsibilities: "Identify capital needs, evaluate funding options, and manage relationships with investors and lenders.",
        impact: "Ensures the business has adequate capital to fund operations and growth initiatives."
      },
      {
        title: "Board and Investor Relations",
        responsibilities: "Prepare financial presentations for board meetings and communicate with investors about the company's financial performance and outlook.",
        impact: "Maintains transparency and builds trust with key stakeholders."
      },
      {
        title: "Cash Flow Management",
        responsibilities: "Monitoring and managing cash flow, ensuring that the business has sufficient liquidity to meet its obligations. Implementing strategies to optimize cash flow.",
        impact: "Prevents cash shortages and helps maintain financial stability."
      },
      {
        title: "Strategic Planning",
        responsibilities: "Developing and implementing long-term financial strategies that align with the company’s goals. Advising on mergers, acquisitions, and other strategic initiatives.",
        impact: "Supports the business in achieving its long-term objectives and navigating complex financial decisions."
      },
      {
        title: "Audit Preparation and Compliance",
        responsibilities: "Preparing for tax season and audits, ensuring compliance with tax laws and regulations. Coordinating with external auditors and tax professionals.",
        impact: "Minimizes tax liabilities and ensures compliance, reducing the risk of penalties and audits."
      },
      {
        title: "Financial Reporting and Analysis",
        responsibilities: "Preparing accurate and timely financial reports, such as balance sheets, income statements, and cash flow statements. Analyzing financial data to provide insights and recommendations for business decisions.",
        impact: "Helps businesses understand their financial health and make informed decisions."
      },
      {
        title: "Budgeting and Forecasting",
        responsibilities: "Creating and managing budgets, forecasting future financial performance, and developing financial models.",
        impact: "Ensures that the business stays on track financially and can plan for future growth and challenges."
      }
    ]
    
  };


 



  return (
    <>
     
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

     
      <ClosingStatement />
    </>
  );
};

export default FinancialServicesSection;
