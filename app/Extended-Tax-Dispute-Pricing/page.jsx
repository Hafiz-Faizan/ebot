'use client';
import React from 'react';

const TaxServicePricingTable = () => {
  const pricingData = [
    { service: "Offer in Compromise", tier1: "$2,500 - $3,000", tier2: "$4,000 - $5,000", tier3: "$6,000 - $7,500" },
    { service: "Installment Agreement", tier1: "$1,500 - $2,000", tier2: "$2,500 - $3,000", tier3: "$4,000 - $5,000" },
    { service: "Penalty Abatement", tier1: "$500 - $750", tier2: "$1,000 - $1,500", tier3: "$2,000 - $2,500" },
    { service: "Innocent Spouse Relief", tier1: "$1,000 - $1,500", tier2: "$2,000 - $2,500", tier3: "$3,500 - $4,500" },
    { service: "Tax Lien Removal", tier1: "$1,200 - $1,800", tier2: "$2,500 - $3,500", tier3: "$4,000 - $5,500" },
    { service: "Tax Levy Release", tier1: "0", tier2: "$3,000 - $4,000", tier3: "$5,000 - $6,500" },
    { service: "Wage Garnishment Release", tier1: "$1,500 - $2,000", tier2: "$3,000 - $4,000", tier3: "$5,000 - $6,500" },
    { service: "Audit Representation", tier1: "$2,000 - $3,000", tier2: "$4,000 - $5,500", tier3: "$6,500 - $8,000" },
    { service: "Currently Not Collectible Status", tier1: "$1,000 - $1,500", tier2: "$2,000 - $2,500", tier3: "$3,500 - $4,500" },
    { service: "Tax Preparation for Unfiled Returns", tier1: "$500 - $1,000", tier2: "$1,500 - $2,000", tier3: "$3,000 - $4,000" },
    { service: "Trust Fund Recovery Penalty", tier1: "$3,000 - $4,000", tier2: "$5,000 - $6,500", tier3: "$7,500 - $9,000" },
    { service: "State Tax Resolution", tier1: "$1,500 - $2,000", tier2: "$3,000 - $4,000", tier3: "$5,000 - $6,500" },
    { service: "Payroll Tax Resolution", tier1: "$2,000 - $3,000", tier2: "$4,000 - $5,500", tier3: "$6,500 - $8,000" },
    { service: "Business Tax Resolution", tier1: "$2,500 - $3,500", tier2: "$5,000 - $6,500", tier3: "$8,000 - $10,000" },
    { service: "IRS Appeals", tier1: "$2,000 - $3,000", tier2: "$4,000 - $5,500", tier3: "$6,500 - $8,000" },
    { service: "Tax Account Monitoring", tier1: "$500 - $750", tier2: "$1,000 - $1,500", tier3: "$2,000 - $2,500" },
    { service: "Bankruptcy Assistance", tier1: "$2,500 - $3,500", tier2: "$4,500 - $6,000", tier3: "$7,000 - $9,000" },
    { service: "Tax Debt Settlement", tier1: "$2,000 - $3,000", tier2: "$4,000 - $5,500", tier3: "$6,500 - $8,000" },
    { service: "Tax Consultation", tier1: "$300 - $500", tier2: "$600 - $800", tier3: "$1,000 - $1,500" },
    { service: "Financial Analysis and Planning", tier1: "$1,000 - $1,500", tier2: "$2,000 - $2,500", tier3: "$3,500 - $4,500" },
    { service: "CNC (Currently Not Collectible)", tier1: "$1,000 - $1,500", tier2: "$2,000 - $2,500", tier3: "$3,500 - $4,500" },
    { service: "DTL (Doubt as to Liability)", tier1: "$2,000 - $3,000", tier2: "$4,000 - $5,500", tier3: "$6,500 - $8,000" },
    { service: "DTC (Doubt as to Collectibility)", tier1: "$2,500 - $3,500", tier2: "$5,000 - $6,500", tier3: "$8,000 - $10,000" },
    { service: "ETA (Effective Tax Administration)", tier1: "$3,000 - $4,000", tier2: "$5,000 - $6,500", tier3: "$7,500 - $9,000" },
    { service: "CDP (Collection Due Process)", tier1: "$1,500 - $2,000", tier2: "$3,000 - $4,000", tier3: "$5,000 - $6,500" },
    { service: "RCP (Reasonable Cause Penalty Relief)", tier1: "$500 - $750", tier2: "$1,000 - $1,500", tier3: "$2,000 - $2,500" },
    { service: "Audit Reconsideration", tier1: "$2,000 - $3,000", tier2: "$4,000 - $5,500", tier3: "$6,500 - $8,000" },
    { service: "General Notice Review", tier1: "$300 - $500", tier2: "$600 - $800", tier3: "$1,000 - $1,500" },
    { service: "Form 8821 (Tax Information Authorization)", tier1: "$300 - $500", tier2: "$600 - $800", tier3: "$1,000 - $1,500" },
    { service: "Form 2848 (Power of Attorney)", tier1: "$300 - $500", tier2: "$600 - $800", tier3: "$1,000 - $1,500" },
    { service: "Average Reasonable Amount", tier1: "$1,500 - $2,500", tier2: "$3,000 - $4,500", tier3: "$5,000 - $7,500" },
    { service: "Form 433-A (Collection Information Statement for Wage Earners and Self-Employed Individuals)", tier1: "$1,000 - $1,500", tier2: "$2,000 - $2,500", tier3: "$3,500 - $4,500" },
    { service: "Form 433-B (Collection Information Statement for Businesses)", tier1: "$1,500 - $2,000", tier2: "$3,000 - $4,000", tier3: "$5,000 - $6,500" },
    { service: "Form 433-F (Collection Information Statement)", tier1: "$500 - $750", tier2: "$1,000 - $1,500", tier3: "$2,000 - $2,500" },
    { service: "Form 433-A (OIC) (Collection Information Statement for Wage Earners and Self-Employed Individuals for Offer in Compromise)", tier1: "$1,500 - $2,000", tier2: "$3,000 - $4,000", tier3: "$5,000 - $6,500" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Tax Service Pricing</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Service</th>
              <th className="border border-gray-300 px-4 py-2">Tier 1 (Income {'<'} $100K)</th>
              <th className="border border-gray-300 px-4 py-2">Tier 2 (Income {'<'} $250K)</th>
              <th className="border border-gray-300 px-4 py-2">Tier 3 (Income {'<'} $500K)</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="border border-gray-300 px-4 py-2">{item.service}</td>
                <td className="border border-gray-300 px-4 py-2">{item.tier1}</td>
                <td className="border border-gray-300 px-4 py-2">{item.tier2}</td>
                <td className="border border-gray-300 px-4 py-2">{item.tier3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxServicePricingTable;
