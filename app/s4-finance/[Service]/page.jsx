'use client'
import React, {  useState } from 'react';


const S4FinanceServicesSection = (params) => {
    const service = (params.params.Service);
  const [openAccordions, setOpenAccordions] = useState({});
  

  const serviceData = {
    "Implementations": [
      {
        title: "System Implementation and Configuration",
        responsibilities: "Implement and configure SAP S/4 HANA Finance modules, such as Financial Accounting (FI) and Controlling (CO), to meet client-specific business requirements. This includes setting up modules, customizing functionalities, and ensuring seamless integration with other systems.",
        impact: "Ensures the system aligns with business processes, enhancing operational efficiency and accuracy. Failure to Implement Correctly: Can lead to system inefficiencies, operational disruptions, and increased costs due to rework."
      },
      {
        title: "Business Process Optimization",
        responsibilities: "Analyze and optimize financial business processes using SAP S/4 HANA capabilities. This involves identifying areas for improvement, implementing best practices, and ensuring compliance with financial regulations.",
        impact: "Streamlines operations, reduces costs, and improves productivity and financial reporting accuracy. Failure to Optimize: Inefficient processes can persist, leading to higher operational costs, reduced competitiveness, and potential compliance issues."
      },
      {
        title: "Data Migration and Integration",
        responsibilities: "Manage data migration from legacy systems to SAP S/4 HANA, ensuring data integrity and seamless integration with other enterprise systems. This includes planning, executing, and validating data migration activities.",
        impact: "Facilitates accurate and efficient data transfer, maintaining business continuity and data accuracy. Failure to Migrate Properly: Data loss or corruption can occur, disrupting business operations, decision-making, and leading to potential financial losses."
      },
      {
        title: "System Upgrades and Maintenance",
        responsibilities: "Perform regular system upgrades and maintenance to keep the SAP S/4 HANA Finance system up-to-date and running smoothly. This includes applying patches, updates, and ensuring the system's security and performance.",
        impact: "Ensures the system remains secure, efficient, and compliant with the latest standards. Failure to Maintain: Can result in system vulnerabilities, performance issues, and non-compliance with regulatory requirements."
      }
    ],
    "CentralFinance(CFIN)": [
      {
        title: "Data Integration",
        responsibilities: "Consolidate financial data from multiple systems into a single SAP S/4 HANA system.",
        impact: "Provides an integrated view of financial data across all business units, enabling more accurate and strategic decision-making. Failure to Integrate: Can lead to data inconsistencies, fragmented reporting, and poor decision-making."
      },
      {
        title: "Real-time Replication",
        responsibilities: "Ensure all financial transactions are up-to-date in the central system, reflecting real-time operations at the source systems.",
        impact: "Offers a real-time view of all financial transactions, facilitating faster insights and agile decision-making. Failure to Replicate: Delays in data updates can result in outdated information, impacting the accuracy of financial reports and decisions."
      },
      {
        title: "Harmonization of Master Data",
        responsibilities: "Synchronize charts of accounts, cost centers, and profit centers across different sources.",
        impact: "Maintains consistent and reliable financial data, reducing errors and improving reporting accuracy. Failure to Harmonize: Inconsistent master data can lead to reporting errors, compliance issues, and operational inefficiencies."
      },
      {
        title: "Consolidated Reporting and Centralized Financial Operations",
        responsibilities: "Streamline and centralize processes such as financial close and reporting procedures.",
        impact: "Enhances operational efficiencies and provides a unified financial view. Failure to Consolidate: Disjointed reporting processes can cause delays, errors, and increased workload during financial close periods."
      },
      {
        title: "Non-Disruptive Implementation",
        responsibilities: "Implement CFIN with minimal disturbance to existing operations, allowing continued use of current systems while transitioning to SAP S/4 HANA.",
        impact: "Facilitates a smooth transition to SAP S/4 HANA, offering scalability and future-proofing financial systems. Failure to Implement Smoothly: Disruptions during implementation can lead to operational downtime, user resistance, and increased transition costs."
      }
    ],
    "SupportandTraining": [
      {
        title: "User Support Specialist",
        responsibilities: "Provide ongoing support to users post-implementation. This includes answering questions, troubleshooting issues, tickets and offering guidance on best practices.",
        impact: "Ensures users have the help they need to resolve issues quickly, maintaining productivity. Failure to Support: Can result in prolonged system issues, user frustration, and decreased productivity."
      },
      {
        title: "Training Needs Analyst",
        responsibilities: "Assess the training needs of different user groups within the organization. This involves identifying skill gaps and determining the appropriate training content and methods.",
        impact: "Ensures that training programs are tailored to meet the specific needs of users, enhancing their ability to effectively use the system. Failure to Analyze Needs: Can result in irrelevant or inadequate training, leading to poor user adoption and increased errors."
      },
      {
        title: "Training Content Developer",
        responsibilities: "Develop training materials, including manuals, e-learning modules, and hands-on exercises. This includes creating content that is easy to understand and relevant to the users' roles.",
        impact: "Provides users with comprehensive and accessible resources to learn the system. Failure to Develop Quality Content: Can lead to confusion and frustration among users, reducing the effectiveness of the training."
      },
      {
        title: "Training Instructor",
        responsibilities: "Conduct training sessions, workshops, and webinars for users. This involves delivering training in an engaging and interactive manner to ensure users understand and retain the information.",
        impact: "Enhances user proficiency and confidence in using the system. Failure to Instruct Effectively: Users may not fully grasp how to use the system, leading to operational inefficiencies and increased support requests."
      },
      {
        title: "Feedback Coordinator",
        responsibilities: "Collect and analyze feedback from users regarding the training and support they receive. This involves conducting surveys, interviews, and focus groups to gather insights.",
        impact: "Helps improve training programs and support services based on user feedback. Failure to Gather Feedback: Missed opportunities to enhance training and support, leading to persistent issues and user dissatisfaction."
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
      {/* Service Details */}
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
                <p><strong>Responsibilities:</strong> {item.responsibilities}</p>
                <p><strong>Impact:</strong> {item.impact}</p>
                <p><strong>Failure to:</strong> {item.failure}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default S4FinanceServicesSection;
