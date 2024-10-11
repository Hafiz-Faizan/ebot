"use client"; // Ensure it's a Client Component

import { useState } from "react";
import { auth, db } from "../../components/firebase"; // Ensure this path is correct
import ClosingStatement from "../../components/ClosingStatement";
import { useRouter } from "next/navigation"; // Using Next.js router for navigation
import { doc, updateDoc, getDoc, setDoc, arrayUnion } from "firebase/firestore"; // Import Firestore methods

const PricingFinancialServicesSection = (params) => {
  const service = params.params.Service;
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
      // You can update the state if needed to reflect changes in the cart without reloading
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
    bookkeeping: [
      {
        title: "Small Business Bookkeeping",
        description:
          "For small businesses with simpler bookkeeping needs, our monthly fee of $250 to $300 ensures that your financial records are accurate and up-to-date. This includes tracking income and expenses, reconciling bank statements, and preparing basic financial reports.",
        responsibilities:
          "Generate financial reports, such as profit and loss statements and balance sheets, for management review.",
        impact: "Provides insights into the financial health of the business.",
        price: "$100 per Month & Up",
        amount: 100,
      },
    ],
    Accounting: [
      {
        title: "Mid-Sized Business Accounting",
        description:
          "For mid-sized businesses, our monthly fee of $400 to $500 covers more detailed bookkeeping services. This includes managing higher transaction volumes, more complex financial reporting, and ensuring all financial data is meticulously recorded and analyzed. Our expertise helps you make informed business decisions, optimize cash flow, and stay ahead of tax obligations. Investing in our services means you can concentrate on strategic growth while we ensure your financial health.",
        responsibilities:
          "Identify, assess, and manage financial risks, including credit risk, market risk, and operational risk. Develop strategies to mitigate these risks.",
        impact: "Protects the business from potential financial losses and ensures long-term stability.",
        price: "$300 per Month & Up",
        amount: 300,
      },
    ],
    fractionalCFO: [
      {
        title: "Large Business Fractional CFO",
        description:
          "For larger businesses, our comprehensive bookkeeping services are priced at $650 to $1,000 per month. This includes handling extensive transaction volumes, detailed financial analysis, and comprehensive reporting. We provide insights that help you manage your finances efficiently, identify cost-saving opportunities, and ensure regulatory compliance. By partnering with us, you gain a trusted advisor who helps you navigate financial complexities, allowing you to focus on scaling your business.",
        responsibilities:
          "Preparing for tax season and audits, ensuring compliance with tax laws and regulations. Coordinating with external auditors and tax professionals.",
        impact:
          "Minimizes tax liabilities and ensures compliance, reducing the risk of penalties and audits.",
        price: "$1,000 per Month & Up",
        amount: 1000,
      },
    ],
  };

  return (
    <>
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
                  <div className="w-3/4">
                    <p>{item.description}</p>
                    <div className="mt-2">
                      <p>
                        <strong>Responsibilities:</strong> {item.responsibilities}
                      </p>
                      <p>
                        <strong>Impact:</strong> {item.impact}
                      </p>
                    </div>
                  </div>
                  <div className="w-1/4 text-right">
                    <p>
                      <strong>Price:</strong> {item.price}
                    </p>
                  </div>
                </div>
              )}
              {openAccordions[item.title] && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => handleBuyNow(item.amount, item.title)}  // Pass the item price here
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

      <ClosingStatement />
    </>
  );
};

export default PricingFinancialServicesSection;
