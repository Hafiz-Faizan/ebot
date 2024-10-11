"use client";
import React, { useState } from "react";
import { BookOpen, DollarSign, MapPin } from "lucide-react";
import { auth, db } from "../components/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TrainingPage = () => {
  const [selectedCourse, setSelectedCourse] = useState("Tax Planning");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const courses = ["Tax Planning", "Tax Resolution", "Tax Compliance"];

  const content = {
    "Tax Planning": [
      {
        title: "Course Overview",
        content: `This course is designed to provide comprehensive training in tax planning, leveraging 
        the practical tools offered by Tax planning software. The goal is to equip students with 
        the knowledge and skills needed to optimize tax outcomes for individuals and businesses 
        while maintaining compliance and integrity. Tax Planning software and the ethical and 
        professional standards set by the AICPA will be taught to ensure best practices in tax 
        planning strategies.`,
      },
      {
        title: "Benefits of Tax Planning",
        content: `
        - Reduces Tax Liability: By strategically lowering the amount of taxes owed.
        - Maximizes Savings: Through tax-advantaged accounts and investment opportunities.
        - Ensures Compliance: To avoid penalties and interest.
        - Supports Financial Goals: Aligning tax strategies with overall financial objectives.
        `,
      },
      {
        title: "Key IRS Updates",
        content: `
        - 87,000 new IRS agents are being hired.
        - $82B allocated to the IRS to develop resources and new systems.
        - $5.3T commissioned to the IRS for tax revenues in the next decade.
        - Over 100M IRS Audit by mail letters, over 14M cases in collection.
        - Over 234M tax returns of all kinds filed annually.
        `,
      },
      {
        title: "Module 1: Introduction to Tax Planning",
        content: `
        - Foundations of Tax Planning: Overview of tax planning principles.
        - Importance of Tax Planning: Benefits and goals of effective tax planning.
        - Introduction to Tax planning software: Navigating tax planning software tools.
        - AICPA Standards: Overview of AICPA standards in tax practice.
        - Course Objectives: What students will achieve by the end of the course.
        `,
      },
      {
        title: "Module 2: Income Management",
        content: `
        - Strategic Timing: Using tax planning software to time income recognition for tax benefits.
        - Income Shifting: Methods and tools for income shifting in tax planning software.
        - Tax-Deferred Accounts: Modeling tax-deferred accounts like 401(k)s and IRAs.
        - Tax-Exempt Income: Tracking and reporting tax-exempt income.
        - Practical Exercises: Hands-on practice with tax planning software for income management.
        `,
      },
      {
        title: "Module 3: Deductions and Credits",
        content: `
        - Identifying Deductions: Leveraging tax planning software to claim deductions.
        - Maximizing Credits: Strategies for maximizing tax credits using the software.
        - Record Keeping: Importance of accurate records and how tax planning software aids in management.
        - IRS Guidelines: Understanding IRS guidelines on deductions and credits.
        - Interactive Workshop: Using tax planning software to simulate deduction and credit scenarios.
        `,
      },
      {
        title: "Module 4: Investment Planning",
        content: `
        - Tax-Efficient Investments: Selecting and modeling tax-efficient investments.
        - Retirement Accounts: Benefits and tax implications of different retirement accounts.
        - Capital Gains and Losses: Managing capital gains and losses using tax planning tools.
        - Investment Diversification: Importance of diversification and tools for planning.
        - Practical Exercises: Using tax planning software to plan investment strategies and tax impacts.
        `,
      },
      {
        title: "Module 5: Retirement Planning",
        content: `
        - Retirement Account Contributions: Benefits and modeling contributions.
        - Roth IRA vs. Traditional IRA: Comparing tax advantages using tax planning tools.
        - Required Minimum Distributions (RMDs): Planning for RMDs with tax planning software.
        - Tax-Free Withdrawals: Benefits of Roth IRAs and modeling withdrawals.
        - Long-Term Planning: Strategies for long-term retirement planning.
        `,
      },
      {
        title: "Module 6: Estate Planning",
        content: `
        - Gift and Estate Tax Exclusions: Basics of exclusions and how to model them.
        - Trusts and Estates: Using trusts to minimize estate taxes.
        - Charitable Giving: Strategies for charitable giving.
        - Succession Planning: Planning for family business succession.
        - Interactive Workshop: Estate planning scenarios using tax planning software.
        `,
      },
      {
        title: "Module 7: Compliance",
        content: `
        - Timely Filing: Ensuring timely filing of returns and using tax planning software for compliance.
        - Accurate Reporting: Accurate income and deduction reporting.
        - Record Keeping: Maintaining organized financial records with tax planning software.
        - Responding to Notices: Using tax planning software to respond to IRS notices and audits.
        - Best Practices: Compliance best practices and standards using tax planning software.
        `,
      },
      {
        title: "Module 8: Ethics and Professional Standards",
        content: `
        - AICPA Code of Professional Conduct: Application to tax practice.
        - Tax Ethics: Ethical considerations in tax planning and preparation.
        - Professional Responsibility: Responsibility to clients and public.
        - Confidentiality: Maintaining client confidentiality with secure tools.
        - Best Practices: Best practices for tax professionals using tax planning software and AICPA guidelines.
        `,
      },
      {
        title: "Teaching Methods",
        content: `
        - Lectures: In-depth instruction on each module topic.
        - Workshops: Hands-on practice with tax planning software and Form 1040.
        - Case Studies: Real-world scenarios for practical application.
        - Interactive Activities: Engaging students with quizzes, games, and simulations.
        - Guest Speakers: Tax professionals sharing insights and experiences.
        `,
      },
      {
        title: "Assessment Methods",
        content: `
        - Quizzes: Regular quizzes to test understanding of key concepts.
        - Assignments: Practical exercises involving tax planning software and Form 1040 completion.
        - Final Project: Comprehensive tax return preparation and resolution plan for a hypothetical client.
        - Exams: Written exams covering course material.
        `,
      },
      {
        title: "Resources",
        content: `
        - Textbooks: Recommended textbooks on tax planning and tax planning software user manuals.
        - Online Resources: IRS website, educational videos, tax planning software webinars.
        - Guest Lectures: Inviting tax professionals to provide real-world insights.
        `,
      }
    ]
,    
"Tax Resolution": [
  {
    title: "Course Overview",
    content: `Tax resolution is the process of addressing and resolving issues related to unpaid taxes, tax liens, levies, penalties, audits, and other tax-related problems with tax authorities like the IRS. It involves negotiating with the IRS to find a viable solution that allows taxpayers to become compliant with tax laws while minimizing penalties and interest.`
  },
  {
    title: "Key Components of Tax Resolution",
    content: `
    1. Installment Agreements: Arrangements to pay off tax debts over time through monthly payments.
    2. Offer in Compromise (OIC): A negotiated settlement where the IRS agrees to accept less than the full amount owed if the taxpayer meets certain criteria.
    3. Penalty Abatement: Requests to have penalties reduced or removed based on reasonable cause or other qualifying reasons.
    4. Tax Liens and Levies: Addressing and removing claims against a taxpayer's property or assets due to unpaid tax debts.
    5. Innocent/Injured Spouse Relief: Relief for taxpayers who are not responsible for their spouse's tax liabilities.
    `
  },
  {
    title: "Benefits of Tax Resolution",
    content: `
    - Avoids Severe Penalties: Prevents or reduces penalties and interest.
    - Provides Relief: Offers financial relief and a clear path to compliance.
    - Preserves Assets: Protects personal and business assets from seizure.
    - Improves Credit: Removes tax liens that can damage credit ratings.
    - Ensures Peace of Mind: Resolves tax issues and reduces stress.
    `
  },
  {
    title: "Strategies in Tax Resolution",
    content: `
    - Communicating with the IRS: Effective negotiation and correspondence with IRS agents.
    - Financial Analysis: Preparing and presenting financial statements to demonstrate the taxpayer's ability to pay.
    - Appeals and Hearings: Using Collection Due Process (CDP) and other appeals to contest IRS actions.
    - Taxpayer Advocate Service (TAS): Seeking assistance from TAS for issues not resolved through normal IRS channels.
    - Bankruptcy and Tax Debt: Considering bankruptcy options to discharge certain tax debts.
    `
  },
  {
    title: "Module 1: Introduction to Tax Resolution",
    content: `
    - Overview of tax resolution concepts.
    - Importance of resolving tax issues.
    - Common tax problems faced by taxpayers.
    - Role of a tax resolution specialist.
    - Resources and tools for tax resolution.
    `
  },
  {
    title: "Module 2: Understanding IRS Notices and Correspondence",
    content: `
    - Types of IRS notices and letters.
    - How to read and understand IRS correspondence.
    - Responding to IRS notices effectively.
    - Importance of timely responses.
    - Maintaining records of IRS communications.
    `
  },
  {
    title: "Module 3: Unpaid Taxes: Causes and Consequences",
    content: `
    - Common reasons for unpaid taxes.
    - Consequences of not paying taxes.
    - IRS collection process.
    - Interest and penalties on unpaid taxes.
    - Strategies to prevent unpaid taxes.
    `
  },
  {
    title: "Module 4: Installment Agreements",
    content: `
    - Types of installment agreements.
    - Eligibility criteria for installment agreements.
    - Applying for an installment agreement.
    - Pros and cons of installment agreements.
    - Managing and maintaining installment agreements.
    `
  },
  {
    title: "Module 5: Offer in Compromise (OIC)",
    content: `
    - Overview of OIC.
    - Eligibility requirements for OIC.
    - Preparing an OIC application.
    - Types of OIC: Doubt as to Liability, Doubt as to Collectability, Effective Tax Administration.
    - Negotiating and finalizing an OIC.
    `
  },
  {
    title: "Module 6: Penalty Abatement",
    content: `
    - Types of penalties that can be abated.
    - Reasons for penalty abatement.
    - Applying for penalty abatement.
    - Supporting documentation for abatement requests.
    - Follow-up and appeal processes.
    `
  },
  {
    title: "Module 7: Tax Liens and Levies",
    content: `
    - Difference between tax liens and levies.
    - Process of filing and releasing tax liens.
    - Consequences of tax levies.
    - Preventing and resolving tax liens and levies.
    - Legal rights and protections for taxpayers.
    `
  },
  {
    title: "Module 8: Tax Audits: Preparation and Response",
    content: `
    - Types of tax audits.
    - Preparing for a tax audit.
    - Responding to IRS audit requests.
    - Common audit triggers.
    - Navigating the audit process successfully.
    `
  },
  {
    title: "Module 9: Doubt as to Liability",
    content: `
    - Definition and criteria for Doubt as to Liability.
    - Preparing a Doubt as to Liability claim.
    - Supporting documentation and evidence.
    - IRS evaluation process.
    - Outcomes and resolution strategies.
    `
  },
  {
    title: "Module 10: Doubt as to Collectability",
    content: `
    - Definition and criteria for Doubt as to Collectability.
    - Preparing a Doubt as to Collectability claim.
    - Financial documentation and analysis.
    - IRS evaluation process.
    - Outcomes and resolution strategies.
    `
  },
  {
    title: "Module 11: Innocent Spouse Relief",
    content: `
    - Overview of Innocent Spouse Relief.
    - Eligibility requirements.
    - Types of Innocent Spouse Relief: Innocent Spouse, Separation of Liability, Equitable Relief.
    - Filing for Innocent Spouse Relief.
    - IRS evaluation process and outcomes.
    `
  },
  {
    title: "Module 12: Injured Spouse Relief",
    content: `
    - Definition of Injured Spouse Relief.
    - Eligibility criteria.
    - Filing Form 8379: Injured Spouse Allocation.
    - Supporting documentation.
    - IRS processing and outcomes.
    `
  },
  {
    title: "Module 13: Effective Tax Administration (ETA)",
    content: `
    - Overview of Effective Tax Administration (ETA).
    - Eligibility for ETA OIC.
    - Preparing an ETA claim.
    - Supporting documentation and evidence.
    - IRS evaluation and resolution.
    `
  },
  {
    title: "Module 14: Collection Due Process (CDP)",
    content: `
    - Definition and purpose of CDP.
    - Requesting a CDP hearing.
    - Preparing for a CDP hearing.
    - Presenting your case to the IRS.
    - CDP outcomes and appeals.
    `
  },
  {
    title: "Module 15: Collection Statute Expiration Date (CSED)",
    content: `
    - Definition of CSED.
    - Calculating the CSED.
    - Impact of CSED on tax liabilities.
    - Strategies to leverage CSED.
    - IRS actions beyond the CSED.
    `
  },
  {
    title: "Module 16: Financial Statements and Documentation",
    content: `
    - Importance of accurate financial statements.
    - Types of financial statements (Form 433-A, 433-B, etc.).
    - Gathering and organizing financial documentation.
    - Analyzing financial information for tax resolution.
    - Presenting financial statements to the IRS.
    `
  },
  {
    title: "Module 17: Taxpayer Advocate Service (TAS)",
    content: `
    - Role and function of TAS.
    - When to seek assistance from TAS.
    - How to request TAS assistance.
    - TAS case process and outcomes.
    - Benefits of TAS involvement.
    `
  },
  {
    title: "Module 18: Freedom of Information Act (FOIA)",
    content: `
    - Overview of FOIA.
    - Requesting IRS records under FOIA.
    - Preparing a FOIA request.
    - FOIA processing and response times.
    - Using FOIA information for tax resolution.
    `
  },
  {
    title: "Module 19: Taxpayer Rights and Responsibilities",
    content: `
    - Overview of the Taxpayer Bill of Rights.
    - Understanding taxpayer responsibilities.
    - Legal protections for taxpayers.
    - Navigating disputes with the IRS.
    - Ensuring compliance with tax laws.
    `
  },
  {
    title: "Module 20: Taxpayer Identification Numbers (TIN)",
    content: `
    - Types of TINs (SSN, EIN, ITIN).
    - Applying for a TIN.
    - Importance of accurate TIN reporting.
    - Correcting TIN errors.
    - TIN compliance for businesses and individuals.
    `
  },
  {
    title: "Module 21: Taxpayer Relief Programs",
    content: `
    - Overview of IRS relief programs.
    - Eligibility for relief programs.
    - Applying for tax relief.
    - Supporting documentation.
    - Managing and maintaining relief agreements.
    `
  },
  {
    title: "Module 22: Advanced Tax Resolution Strategies",
    content: `
    - Strategic planning for tax resolution.
    - Creative solutions for complex tax issues.
    - Case studies and real-world examples.
    - Working with tax professionals.
    - Continuous learning and professional development.
    `
  },
  {
    title: "Module 23: IRS Collection Procedures",
    content: `
    - Overview of IRS collection process.
    - Understanding IRS collection tools.
    - Protecting taxpayer rights during collections.
    - Negotiating with IRS collection agents.
    - Resolving collection cases efficiently.
    `
  },
  {
    title: "Module 24: Bankruptcy and Tax Debt",
    content: `
    - Overview of bankruptcy and tax debt.
    - Types of bankruptcy: Chapter 7, 11, 13.
    - Dischargeable vs. non-dischargeable tax debts.
    - Preparing for bankruptcy proceedings.
    - Navigating the bankruptcy process.
    `
  },
  {
    title: "Module 25: Taxpayer Penalties and Interest",
    content: `
    - Common taxpayer penalties.
    - Calculating penalties and interest.
    - Strategies to reduce penalties and interest.
    - Requesting penalty abatement.
    - Managing tax liabilities with accrued penalties.
    `
  },
  {
    title: "Module 26: Collections Appeals Program (CAP)",
    content: `
    - Overview of CAP.
    - Requesting a CAP hearing.
    - Preparing for a CAP hearing.
    - Presenting your case to the IRS.
    - CAP outcomes and appeals.
    `
  },
  {
    title: "Module 27: Negotiating with the IRS",
    content: `
    - Effective negotiation techniques.
    - Building rapport with IRS agents.
    - Presenting a strong case.
    - Understanding IRS negotiation tactics.
    - Achieving favorable outcomes.
    `
  },
  {
    title: "Module 28: Trust Fund Recovery Penalty",
    content: `
    - Definition and scope of the penalty.
    - Responsible person determination.
    - Calculating the penalty.
    - Defense strategies.
    - Resolving trust fund penalty cases.
    `
  },
  {
    title: "Module 29: Statute of Limitations on Collections",
    content: `
    - Understanding the statute of limitations.
    - Impact on tax liabilities.
    - Strategies to leverage the statute of limitations.
    - IRS actions beyond the statute of limitations.
    - Extending the statute of limitations.
    `
  },
  {
    title: "Module 30: Preparing for IRS Appeals",
    content: `
    - Overview of the appeals process.
    - Preparing a strong case for appeals.
    - Presenting evidence and documentation.
    - Understanding appeals officer perspective.
    - Navigating the appeals process to resolution.
    `
  }
],

"Tax Compliance": [
  {
    title: "Overview of Tax Compliance",
    content: `Tax compliance is the process of following tax laws and regulations set by the government. 
    It includes timely filing of tax returns, accurately reporting income and expenses, 
    and paying the correct amount of taxes owed. This covers individuals, businesses, 
    and Not-For-Profits, as well as Estates, Gifts, and Trusts.`,
  },
  {
    title: "Key Aspects of Tax Compliance",
    content: `
    - Timely Filing: Submitting tax returns by the required deadlines (e.g., April 15 for individual income tax returns in the U.S.).
    - Accurate Reporting: Ensuring that all income, deductions, and credits are correctly reported on the tax return.
    - Payment of Taxes: Paying any taxes owed by the due date to avoid penalties and interest.
    - Record Keeping: Maintaining accurate and complete records of income, expenses, and other relevant financial information.
    - Responding to Notices: Addressing any notices or audits from the tax authorities promptly and accurately.
    `,
  },
  {
    title: "Benefits of Tax Compliance",
    content: `
    - Avoids Penalties: Reducing the risk of fines and interest for late filing or underpayment.
    - Builds Credibility: Establishing a trustworthy relationship with tax authorities.
    - Ensures Peace of Mind: Minimizing stress and legal risks by adhering to tax laws.
    - Supports Financial Planning: Providing a clear financial picture for better decision-making.
    `,
  },
  {
    title: "General Layout for IRS Form 1040",
    content: `
    The course follows the IRS Form 1040 structure for individual income tax filing, 
    covering personal information, income sources, adjustments, deductions, taxable income, 
    credits, other taxes, payments, and calculating refunds or amounts owed. Special attention 
    is given to specific forms and schedules such as Schedule A, Schedule C, and others as needed.
    `,
  },
  {
    title: "Filing Form 1040",
    content: `
    - Personal Information: Name, Address, SSN, and filing status.
    - Income: Wages, tips, taxable interest, dividends, and other income.
    - Adjustments: Contributions to retirement accounts, student loan interest.
    - Standard/Itemized Deductions: Choosing the right deduction method.
    - Taxable Income: Calculated by subtracting deductions from total income.
    - Calculating Tax: Understanding tax brackets and marginal rates.
    - Credits: Child Tax Credit, Earned Income Credit, Education Credits.
    - Other Taxes: Self-employment tax, household employment taxes.
    - Payments: Federal income tax withheld, estimated payments.
    - Refund or Amount Owed: Calculating the balance.
    `,
  },
  {
    title: "Business and Not-for-Profit Taxation",
    content: `
    This section provides an overview of both business and not-for-profit tax obligations, 
    returns, and compliance requirements. Participants will learn how to file returns 
    for corporations, partnerships, and tax-exempt entities, and manage their compliance 
    obligations, including unrelated business income (UBI) and public support tests.
    `,
  },
  {
    title: "Additional Topics Covered",
    content: `
    - IRS Audits and Correspondence: Preparing and responding to audits.
    - Penalties Abatement: Methods for requesting relief from tax penalties.
    - Offer in Compromise: Settling taxes for less than the amount owed.
    - Installment Agreements: Payment plans for outstanding tax debt.
    - Understanding the IRS Appeals Process: Handling disputes and negotiations with the IRS.
    `,
  },
  {
    title: "Conclusion and Wrap-Up",
    content: `
    The course concludes with a comprehensive summary of key tax compliance concepts. 
    Participants are provided additional resources and guided through a Q&A session to 
    address any lingering questions on tax compliance, filing requirements, or resolving 
    tax disputes. This prepares them for practical applications in various tax situations.
    `,
  },
]

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("Please log in to register.");
      }
      await addDoc(collection(db, "registrations"), {
        ...formData,
        userId: user.uid,
        timestamp: new Date().toISOString(),
      });
      toast.success("Registration successful!");
      setIsModalOpen(false);
      setFormData({ name: "", email: user.email, phone: "", address: "" });
    } catch (error) {
      toast.error(error.message || "Error registering. Please try again.");
      console.error("Error adding document: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-8 sm:px-10 rounded-xl shadow-lg mb-8">
          <h1 className="text-4xl font-extrabold text-white mb-2">MASTER CLASS</h1>
          <p className="text-2xl font-semibold text-indigo-100">TAX CONSULTANT TRAINING</p>
          <p className="text-lg font-medium text-indigo-200 mt-4">
            150+ Expert Teachers - 120 Expert Cases - Live Instructor
          </p>
        </div>

        {/* Course Selection */}
        <div className="flex justify-around mb-6">
          {courses.map((course) => (
            <button
              key={course}
              onClick={() => setSelectedCourse(course)}
              className={`px-4 py-2 rounded-lg font-semibold text-white transition-colors duration-300 ${
                selectedCourse === course ? "bg-indigo-600" : "bg-gray-400"
              }`}
            >
              {course}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="px-6 py-8 sm:px-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {selectedCourse} Curriculum
            </h2>

            <div>
              {content[selectedCourse].map((section, index) => (
                <div key={index} className="mb-4">
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full bg-gray-200 text-left p-4 rounded-lg font-semibold text-lg text-gray-800 hover:bg-gray-300 focus:outline-none"
                  >
                    {section.title}
                  </button>
                  {expandedSection === index && (
                    <div className="bg-gray-50 rounded-lg p-6 mt-2">
                      <p className="text-md text-gray-700 whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <DollarSign className="h-6 w-6 mr-2 text-indigo-600" />
                  Fees
                </h3>
                <p className="text-3xl font-bold text-indigo-600">$1,000</p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 md:mt-0 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300"
              >
                Register Now
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-indigo-600" />
                Location
              </h3>
              <p className="text-lg text-gray-700">950 E State Hwy 114 Ste 160</p>
              <p className="text-lg text-gray-700">Southlake, TX 76092</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-indigo-800">Register for the Master Class</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-3 py-2"
                  ></textarea>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 disabled:opacity-50"
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default TrainingPage;
