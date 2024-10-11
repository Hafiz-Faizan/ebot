"use client"; // Ensure it's a Client Component

import { useState, useEffect } from "react";
import { auth, db } from "../components/firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
      if (user) {
        const cartRef = doc(db, "carts", user.uid);

        // Listen for real-time updates for the cart
        onSnapshot(cartRef, (snapshot) => {
          if (snapshot.exists()) {
            setCartItems(snapshot.data().items || []);
          } else {
            setCartItems([]);
          }
        });
      } else {
        router.push("/login"); // Redirect to login if not logged in
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Handle checkout functionality
  const handleCheckout = () => {
    // Prepare price and service names for passing to the payment page
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
    const serviceNames = cartItems.map(item => item.title).join(", ");

    // Redirect to payment page with total amount and service names
    router.push(`/payment?price=${totalAmount}&service=${encodeURIComponent(serviceNames)}`);
  };

  // Handle removing an item from the cart
  const handleRemoveItem = async (indexToRemove) => {
    const user = auth.currentUser;

    if (!user) {
      alert("You must be logged in to remove items.");
      return;
    }

    try {
      const cartRef = doc(db, "carts", user.uid);
      const newCartItems = cartItems.filter((_, index) => index !== indexToRemove); // Remove the item at the specified index

      // Update the Firestore cart document with the updated list of items
      await updateDoc(cartRef, { items: newCartItems });
      setCartItems(newCartItems); // Update the local state
    } catch (error) {
      console.error("Error removing item from cart: ", error);
      alert("Failed to remove the item. Please try again.");
    }
  };

  if (!isLoggedIn) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b py-4">
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  <p className="text-xs text-gray-400">Added at: {new Date(item.addedAt).toLocaleString()}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleRemoveItem(index)} // Call remove function
                    className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition duration-200"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
