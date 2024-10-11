'use client';
import React, { useState } from 'react';
import { auth, db } from "../../components/firebase"; // Import Firestore
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore'; // Firestore methods
import { useRouter } from "next/navigation"; // Using Next.js router for navigation

const S4FinanceServicesSection = (params) => {
  const service = (params.params.Service);
  const [openAccordions, setOpenAccordions] = useState({});
  const router = useRouter(); // Initialize the router

  // Firestore Add to Cart Handler
  const handleAddToCart = async (price, itemTitle) => {
    const user = auth.currentUser; // Assuming you're using Firebase Auth

    if (!user) {
      alert("Please log in to add items to your cart.");
      router.push('/login'); // Redirect to login page if not logged in
      return;
    }

    const cartItem = {
      title: itemTitle,
      price: price,
      addedAt: new Date().toISOString()
    };

    try {
      // Reference the Firestore document for the user’s cart
      const cartRef = doc(db, 'carts', user.uid);
      const cartSnapshot = await getDoc(cartRef);

      if (cartSnapshot.exists()) {
        // If the cart exists, update it by adding new items
        await updateDoc(cartRef, {
          items: arrayUnion(cartItem)
        });
      } else {
        // If no cart exists, create a new cart document
        await setDoc(cartRef, {
          items: [cartItem]
        });
      }

      alert('Item added to cart!');
      window.location.reload();

    } catch (error) {
      console.error("Error adding item to cart: ", error);
      alert("Failed to add item to cart. Please try again.");
    }
  };

  const handleBuyNow = (price, itemTitle) => {
    const user = auth.currentUser; // Assuming you're using Firebase Auth

    if (user) {
      // Pass both price and itemTitle to the payment page
      router.push(`/payment?price=${encodeURIComponent(price)}&service=${encodeURIComponent(itemTitle)}`);
    } else {
      // Redirect to login page if the user is not logged in
      router.push("/login");
    }
  };


  const toggleAccordion = (title) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const serviceData = {
    Implementations: [
      {
        title: "System Implementation and Configuration",
        description: "Implement and configure SAP S/4 HANA Finance modules, such as Financial Accounting (FI) and Controlling (CO), to meet client-specific business requirements.",
        responsibilities: "Implement and configure SAP S/4 HANA Finance modules.",
        impact: "Ensures the system aligns with business processes, enhancing operational efficiency and accuracy.",
        price: "$10,000-$40,000 per project",
        amount: 10000,
        failure: "Failure to implement correctly can lead to system inefficiencies, operational disruptions, and increased costs due to rework."
      },
      {
        title: "Business Process Optimization",
        description: "Analyze and optimize financial business processes using SAP S/4 HANA capabilities.",
        responsibilities: "Analyze and optimize financial business processes.",
        impact: "Streamlines operations, reduces costs, and improves productivity and financial reporting accuracy.",
        price: "$10,000-$40,000 per project",
        amount: 10000,
        failure: "Failure to optimize can result in inefficient processes, higher operational costs, and compliance issues."
      },
      {
        title: "Data Migration and Integration",
        description: "Manage data migration from legacy systems to SAP S/4 HANA, ensuring data integrity and seamless integration.",
        responsibilities: "Ensure accurate data migration and integration.",
        impact: "Facilitates accurate and efficient data transfer, maintaining business continuity.",
        price: "$10,000-$40,000 per project",
        amount: 10000,
        failure: "Data loss or corruption during migration can disrupt operations and result in financial losses."
      },
      {
        title: "System Upgrades and Maintenance",
        description: "Perform regular system upgrades and maintenance to keep the SAP S/4 HANA Finance system up-to-date.",
        responsibilities: "Maintain and upgrade SAP S/4 HANA Finance system.",
        impact: "Ensures system security, efficiency, and compliance with the latest standards.",
        price: "$10,000-$40,000 per project",
        amount: 10000,
        failure: "Failure to maintain the system can result in vulnerabilities and performance issues."
      }
    ],
  
    "CentralFinance(CFIN)": [
      {
        title: "Data Integration",
        description: "Consolidate financial data from multiple systems into a single SAP S/4 HANA system.",
        responsibilities: "Ensure financial data integration across all business units.",
        impact: "Provides an integrated view of financial data for better decision-making.",
        price: "$25,000-$100,000 per project",
        amount: 25000,
        failure: "Failure to integrate data properly can lead to inconsistencies and fragmented reporting."
      },
      {
        title: "Real-time Replication",
        description: "Ensure all financial transactions are up-to-date in the central system, reflecting real-time operations.",
        responsibilities: "Ensure real-time replication of financial transactions.",
        impact: "Provides a real-time view of transactions, enabling faster insights.",
        price: "$25,000-$100,000 per project",
        amount: 25000,
        failure: "Delays in data replication can result in outdated information and inaccurate reports."
      },
      {
        title: "Harmonization of Master Data",
        description: "Synchronize charts of accounts, cost centers, and profit centers across different sources.",
        responsibilities: "Ensure the harmonization of financial master data.",
        impact: "Maintains consistent and reliable financial data, reducing errors.",
        price: "$25,000-$100,000 per project",
        amount: 25000,
        failure: "Inconsistent master data can lead to reporting errors and compliance issues."
      },
      {
        title: "Consolidated Reporting and Centralized Financial Operations",
        description: "Streamline and centralize financial close and reporting procedures.",
        responsibilities: "Ensure accurate and efficient consolidated reporting.",
        impact: "Enhances operational efficiencies and provides a unified financial view.",
        price: "$25,000-$100,000 per project",
        amount: 25000,
        failure: "Failure to consolidate can cause delays, errors, and increased workload during financial close."
      },
      {
        title: "Non-Disruptive Implementation",
        description: "Implement CFIN with minimal disturbance to existing operations while transitioning to SAP S/4 HANA.",
        responsibilities: "Ensure smooth implementation of CFIN.",
        impact: "Facilitates a smooth transition to SAP S/4 HANA, offering scalability and future-proofing.",
        price: "Contact for pricing",
        failure: "Disruptions during implementation can lead to downtime and increased transition costs."
      }
    ],
  
    SupportandTraining: [
      {
        title: "User Support Specialist",
        description: "Provide ongoing support to users post-implementation.",
        responsibilities: "Offer support to ensure smooth system operations.",
        impact: "Ensures that users have the help they need to resolve issues quickly, maintaining productivity.",
        price: "$25,000-$100,000 per project",
        amount: 25000,
        failure: "Lack of user support can lead to prolonged system issues and decreased productivity."
      },
      {
        title: "Training Needs Analyst",
        description: "Assess the training needs of different user groups within the organization.",
        responsibilities: "Identify and address specific training needs.",
        impact: "Ensures effective training tailored to user needs.",
        price: "$15,000-$50,000 per project",
        amount: 15000,
        failure: "Failure to analyze training needs can lead to inadequate or irrelevant training."
      },
      {
        title: "Training Content Developer",
        description: "Develop training materials, including manuals, e-learning modules, and hands-on exercises.",
        responsibilities: "Create comprehensive training content for users.",
        impact: "Provides users with the necessary resources to learn the system effectively.",
        price: "$15,000-$50,000 per project",
        amount: 15000,
        failure: "Poorly developed content can confuse users and reduce training effectiveness."
      },
      {
        title: "Training Instructor",
        description: "Conduct training sessions, workshops, and webinars for users.",
        responsibilities: "Deliver effective training sessions to users.",
        impact: "Enhances user proficiency in using the system.",
        price: "$15,000-$50,000 per project",
        amount: 15000,
        failure: "Ineffective training can lead to operational inefficiencies."
      },
      {
        title: "Feedback Coordinator",
        description: "Collect and analyze feedback from users regarding the training and support they receive.",
        responsibilities: "Gather user feedback to improve training programs.",
        impact: "Helps enhance training programs based on feedback.",
        price: "$5,000-$15,000 per project",
        amount: 5000,
        failure: "Failure to gather feedback can result in missed opportunities for improvement."
      }
    ]
  };
  

  return (
    <main>
      <div className="container mx-auto p-6 max-w-6xl">
        <div className="max-w-6xl">
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
                <div className="pl-4 mt-2 flex justify-between items-center">
                  <div>
                    <p>{item.description}</p>
                  </div>
                  <div className="w-3/4 text-right">
                    <p><strong>Price:</strong> {item.price}</p>
                  </div>
                </div>
              )}
              {openAccordions[item.title] && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => handleBuyNow(item.amount, item.title)} // Pass the item price here
                    className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-500 transition duration-200"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => handleAddToCart(item.amount, item.title)} // Add to cart functionality
                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default S4FinanceServicesSection;
