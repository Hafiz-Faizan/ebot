"use client"; // Ensure it's a Client Component

import { useState } from "react";
import TaxClosingStatement from "../../components/TaxClosingStatement";
import { auth, db } from "../../components/firebase"; // Ensure this path is correct
import { useRouter } from "next/navigation"; // Using Next.js router for navigation
import { doc, updateDoc, getDoc, setDoc, arrayUnion } from "firebase/firestore"; // Firestore methods

const TaxServiceSection = (params) => {
  const service = params.params.Service;
  const [openAccordions, setOpenAccordions] = useState({});
  const router = useRouter(); // Initialize the router

  // Firestore Add to Cart Handler
  const handleAddToCart = async (price, itemTitle) => {
    const user = auth.currentUser;

    if (!user) {
      alert("Please log in to add items to your cart.");
      router.push('/login'); // Redirect to login page if not logged in
      return;
    }

    const cartItem = {
      title: itemTitle,
      price: price,
      addedAt: new Date().toISOString(),
    };

    try {
      // Reference the Firestore document for the user’s cart
      const cartRef = doc(db, 'carts', user.uid);
      const cartSnapshot = await getDoc(cartRef);

      if (cartSnapshot.exists()) {
        // If the cart exists, update it by adding new items using arrayUnion
        await updateDoc(cartRef, {
          items: arrayUnion(cartItem), // Add the new item without overwriting existing ones
        });
      } else {
        // If no cart exists, create a new cart document with the first item
        await setDoc(cartRef, {
          items: [cartItem],
        });
      }

      alert('Item added to cart!');
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
      [title]: !prev[title],
    }));
  };

  const serviceData = {
    TaxPlanning: [
      {
        title: "Clients with Income Less than $100K",
        description: "For individuals and small businesses with simpler financial situations, this tier covers basic tax planning services such as income timing, deductions and retirement planning. The focus is on ensuring compliance and optimizing tax savings.",
        responsibilities: "Analyze financial situations to determine the best times to receive income.",
        impact: "Reduces overall tax burden, increasing disposable income.",
        price: "$500 to $1,000 annually",
        amount: 500
      },
      {
        title: "Clients with Income Less than $200K",
        description: "For mid-sized businesses and individuals with more complex financial situations, this tier includes advanced strategies like investment tax planning, charitable contributions, and business structure optimization.",
        responsibilities: "Analyze financial situations to determine the best strategies for minimizing tax liability.",
        impact: "Reduces tax liabilities and optimizes tax savings.",
        price: "$1,500 to $3,000 annually",
        amount: 1500

      },
      {
        title: "Clients with Income Less than $500K",
        description: "For high-income individuals and larger businesses, this tier offers extensive tax planning services, including estate planning and sophisticated tax deferral strategies.",
        responsibilities: "Comprehensive planning to minimize tax liabilities, optimize deductions, and ensure compliance.",
        impact: "Helps preserve wealth and maximize tax efficiency.",
        price: "$3,500 to $7,000 annually",
        amount: 3500

      },
      {
        title: "Clients with Income greater than $800K",
        description: "This tier focuses on comprehensive tax planning for high-net-worth individuals, incorporating international tax strategies and estate planning.",
        responsibilities: "Provide high-level tax strategy to preserve wealth and manage complex financial situations.",
        impact: "Maximizes tax savings and ensures long-term financial health.",
        price: "$7,000 & Up",
        amount: 7000

      }
    ],

    TaxResolution: [
      {
        title: "IRS Audit Representation less $25K",
        description: "This tier covers representation for a standard IRS audit, typically involving one tax year.",
        responsibilities: "Prepare and present documentation to the IRS, defending clients during audits.",
        impact: "Protects clients from potential penalties and ensures fair treatment.",
        price: "$1,000 - $1,700",
        amount: 1000

      },
      {
        title: "IRS Audit Representation less $100K",
        description: "This tier covers more complex audits that may involve multiple tax years, Schedule C businesses, or other intricate tax issues.",
        responsibilities: "Prepare and present documentation to the IRS for more complex audits.",
        impact: "Minimizes risk of penalties and ensures compliance with tax laws.",
        price: "$2,700 - $5,000",
        amount: 2700

      },
      {
        title: "IRS Audit Representation less $250K",
        description: "This is for corporate audits, which are generally more complex and require extensive documentation and negotiation.",
        responsibilities: "Handle corporate audit documentation and representation.",
        impact: "Protects businesses from significant financial penalties.",
        price: "$5,000 - $10,000",
        amount: 5000

      },
      {
        title: "Tax Debt Settlement less $25K",
        description: "We negotiate with the IRS to settle your tax debt for less than the full amount owed.",
        responsibilities: "Prepare and present documentation to support your case.",
        impact: "Reduces overall tax liability, alleviating financial stress.",
        price: "$1,500",
        amount: 1500

      },
      {
        title: "Tax Debt Settlement less $100K",
        description: "We negotiate with the IRS to settle your tax debt for amounts between $25,000 and $100,000.",
        responsibilities: "Prepare and present documentation for debt settlement.",
        impact: "Significantly reduces tax liability, providing financial relief.",
        price: "$3,000",
        amount: 3000

      },
      {
        title: "Tax Debt Settlement less $250K",
        description: "We negotiate with the IRS to settle your tax debt for amounts between $100,000 and $250,000.",
        responsibilities: "Prepare and present documentation to settle larger tax debts.",
        impact: "Substantially reduces tax liability, easing financial burdens.",
        price: "$5,000",
        amount: 5000

      },
      {
        title: "Penalty Abatement for Penalties Less Than $25,000",
        description: "We file for penalty abatement based on reasonable cause to seek relief from tax penalties.",
        responsibilities: "Prepare and present documentation for penalty abatement.",
        impact: "Reduces or eliminates penalties, lowering overall tax debt.",
        price: "$1,500",
        amount: 1500

      },
      {
        title: "Penalty Abatement for Penalties Less Than $100,000",
        description: "We file for penalty abatement for penalties between $25,000 and $100,000.",
        responsibilities: "Prepare and present documentation for penalty abatement.",
        impact: "Significantly reduces penalties, providing financial relief.",
        price: "$3,000",
        amount: 3000

      },
      {
        title: "Penalty Abatement for Penalties Less Than $250,000",
        description: "We file for penalty abatement for penalties between $100,000 and $250,000.",
        responsibilities: "Prepare and present documentation for penalty abatement.",
        impact: "Substantially reduces penalties, easing financial burdens.",
        price: "$5,000",
        amount: 5000

      }
    ],

    TaxCompliance: [
      {
        title: "Accurate Tax Filing - 1040",
        description: "Regular tax return preparation services, including filing 1040 forms.",
        responsibilities: "Prepare and file federal, state, and local tax returns.",
        impact: "Ensures compliance and avoids penalties.",
        price: "$300 & Up",
        amount: 300

      },
      {
        title: "Accurate Tax Filing - 1040X",
        description: "Filing amended tax returns for individuals who need to correct previously filed returns.",
        responsibilities: "Prepare and file amended tax returns.",
        impact: "Corrects errors and minimizes risk of penalties or additional tax liability.",
        price: "$750",
        amount: 750

      },
      {
        title: "Accurate Tax Filing - Company Taxes",
        description: "S-Corp, Partnership, and C-Corp tax return filings.",
        responsibilities: "Prepare and file accurate company tax returns.",
        impact: "Ensures compliance and avoids penalties.",
        price: "$1,000 - $3,600",
        amount: 1000

      },
      {
        title: "Accurate Tax Filing - Not For Profit",
        description: "Tax returns for churches, charitable organizations, and other 501(c)(3) entities.",
        responsibilities: "Prepare and file tax returns for not-for-profit organizations.",
        impact: "Ensures compliance with tax regulations for nonprofits.",
        price: "$1,000 - $3,600",
        amount: 1000

      },
      {
        title: "Accurate Tax Filing - Trust Fund 941, 940",
        description: "Quarterly tax filings for payroll taxes, including Social Security, Medicare, and federal income taxes.",
        responsibilities: "Prepare and file payroll tax returns.",
        impact: "Ensures compliance with payroll tax regulations.",
        price: "$500 - $2,500 per Qtr.",
        amount: 500

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
                    <p><strong>Responsibilities:</strong> {item.responsibilities}</p>
                    <p><strong>Impact:</strong> {item.impact}</p>
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

      <TaxClosingStatement />
    </main>
  );
};

export default TaxServiceSection;
