"use client";

import React from "react";

const industryData = [
  {
    industry: "Healthcare",
    challenges: "Regulatory compliance, revenue cycle management, and financial sustainability.",
    value: [
      "Expertise in healthcare accounting and compliance.",
      "Financial planning and budgeting for growth.",
      "Optimization of revenue cycle processes."
    ],
    example: "ebotCPA helped a medical practice reduce accounts receivable days by 30% through efficient billing and collection processes."
  },
  {
    industry: "Technology and Software",
    challenges: "Rapid growth, intellectual property protection, and R&D funding.",
    value: [
      "Strategic financial planning for scaling businesses.",
      "Tax credits and incentives for R&D.",
      "Financial reporting and compliance."
    ],
    example: "ebotCPA assisted a software startup in securing $500,000 in R&D tax credits."
  },
  {
    industry: "Manufacturing",
    challenges: "Supply chain management, inventory control, and cost reduction.",
    value: [
      "Financial analysis and benchmarking.",
      "Inventory management and optimization.",
      "Tax planning for manufacturing incentives."
    ],
    example: "ebotCPA helped a manufacturer reduce inventory costs by 25% through lean accounting practices."
  },
  {
    industry: "Non-Profit",
    challenges: "Funding, grant management, and financial transparency.",
    value: [
      "Financial reporting and compliance.",
      "Grant management and auditing.",
      "Strategic financial planning."
    ],
    example: "ebotCPA assisted a non-profit organization in securing $1 million in grants through expert financial reporting."
  },
  {
    industry: "Real Estate",
    challenges: "Property valuation, tax planning, and cash flow management.",
    value: [
      "Property valuation and tax planning.",
      "Cash flow management and forecasting.",
      "Financial reporting for investors."
    ],
    example: "ebotCPA helped a real estate developer save $200,000 in taxes through strategic property valuation."
  },
  {
    industry: "Retail",
    challenges: "Inventory management, sales tax compliance, and customer experience.",
    value: [
      "Financial analysis and benchmarking.",
      "Inventory management and optimization.",
      "Sales tax compliance."
    ],
    example: "ebotCPA assisted a retailer in reducing inventory costs by 15% through efficient supply chain management."
  },
  {
    industry: "Construction",
    challenges: "Project management, cost control, and cash flow management.",
    value: [
      "Project accounting and cost control.",
      "Cash flow management and forecasting.",
      "Tax planning for construction incentives."
    ],
    example: "ebotCPA helped a contractor reduce project costs by 10% through expert cost control measures."
  },
  {
    industry: "Professional Services",
    challenges: "Billing and collections, financial planning, and talent management.",
    value: [
      "Financial planning and budgeting.",
      "Billing and collections optimization.",
      "Talent management and compensation planning."
    ],
    example: "ebotCPA assisted a law firm in increasing revenue by 20% through efficient billing and collection processes."
  },
  {
    industry: "E-commerce",
    challenges: "Sales tax compliance, inventory management, and financial scaling.",
    value: [
      "Sales tax compliance.",
      "Inventory management and optimization.",
      "Financial planning for growth."
    ],
    example: "ebotCPA helped an e-commerce business reduce sales tax liabilities by $50,000 through expert compliance."
  },
  {
    industry: "Food and Beverage",
    challenges: "Inventory management, supply chain disruptions, and food safety compliance.",
    value: [
      "Inventory management and optimization.",
      "Supply chain risk management.",
      "Financial planning for growth."
    ],
    example: "ebotCPA assisted a restaurant in reducing food costs by 12% through efficient inventory management."
  },
  {
    industry: "HVAC",
    challenges: "Inventory management, technician utilization, and customer acquisition.",
    value: [
      "Financial analysis and benchmarking.",
      "Inventory management and optimization.",
      "Tax planning for equipment purchases."
    ],
    example: "ebotCPA assisted an HVAC company in reducing inventory costs by 15% through efficient supply chain management."
  },
  {
    industry: "Plumbing",
    challenges: "Inventory management, technician utilization, and emergency service pricing.",
    value: [
      "Financial planning and budgeting.",
      "Inventory management and optimization.",
      "Pricing strategy development."
    ],
    example: "ebotCPA helped a plumbing company increase revenue by 20% through optimized pricing."
  },
  {
    industry: "Mechanics Shops",
    challenges: "Inventory management, labor efficiency, and customer retention.",
    value: [
      "Financial analysis and benchmarking.",
      "Inventory management and optimization.",
      "Labor efficiency optimization."
    ],
    example: "ebotCPA assisted a mechanics shop in reducing inventory costs by 12% through efficient supply chain management."
  },
  {
    industry: "Transportation",
    challenges: "Fuel cost management, vehicle maintenance, and regulatory compliance.",
    value: [
      "Financial planning and budgeting.",
      "Fuel cost management and optimization.",
      "Regulatory compliance."
    ],
    example: "ebotCPA helped a transportation company reduce fuel costs by 10% through expert fuel management."
  },
  {
    industry: "Education, Trade, and Skills Development Schools",
    challenges: "Funding, accreditation, and financial sustainability.",
    value: [
      "Financial planning and budgeting.",
      "Grant management and auditing.",
      "Accreditation compliance."
    ],
    example: "ebotCPA assisted a vocational school in securing $500,000 in grants."
  },
  {
    industry: "Gas Stations",
    challenges: "Fuel cost management, inventory control, and regulatory compliance.",
    value: [
      "Financial analysis and benchmarking.",
      "Fuel cost management and optimization.",
      "Regulatory compliance."
    ],
    example: "ebotCPA helped a gas station reduce fuel costs by 8% through expert fuel management."
  },
  {
    industry: "Landscaping",
    challenges: "Seasonal cash flow management, equipment maintenance, and customer acquisition.",
    value: [
      "Financial planning and budgeting.",
      "Seasonal cash flow management.",
      "Equipment maintenance planning."
    ],
    example: "ebotCPA assisted a landscaping company in increasing revenue by 15% through optimized pricing."
  },
  {
    industry: "Electrical",
    challenges: "Inventory management, technician utilization, and safety compliance.",
    value: [
      "Financial analysis and benchmarking.",
      "Inventory management and optimization.",
      "Safety compliance."
    ],
    example: "ebotCPA helped an electrical contractor reduce inventory costs by 10%."
  },
  {
    industry: "Roofers",
    challenges: "Project management, cost control, and warranty management.",
    value: [
      "Project accounting and cost control.",
      "Warranty management.",
      "Tax planning for construction incentives."
    ],
    example: "ebotCPA assisted a roofing company in reducing project costs by 12%."
  }
];

const IndustryInsights = () => {
  return (
    <div className="container mx-auto p-6 w-full bg-gray-100">
        <div className="container mx-auto p-6 max-w-6xl bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-10">Industry Insights</h1>

      {industryData.map((industryItem, idx) => (
        <div key={idx} className="mb-8 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">{industryItem.industry}</h2>
          <p className="text-gray-800 font-bold mb-2">Challenges:</p>
          <p className="text-gray-600 mb-4">{industryItem.challenges}</p>

          <p className="text-gray-800 font-bold mb-2">How ebotCPA Provides Value:</p>
          <ul className="list-disc ml-5 mb-4 text-gray-600">
            {industryItem.value.map((val, i) => (
              <li key={i}>{val}</li>
            ))}
          </ul>

          <p className="text-gray-800 font-bold mb-2">Example:</p>
          <p className="text-gray-600 italic">{industryItem.example}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default IndustryInsights;
