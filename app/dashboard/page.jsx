"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../components/firebase"; // Import Firebase
import { doc, getDoc } from "firebase/firestore"; // Firestore functions
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [purchases, setPurchases] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPurchases = async () => {
      const user = auth.currentUser;

      if (user) {
        try {
          const userRef = doc(db, "purchases", user.uid);
          const userSnapshot = await getDoc(userRef);

          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            setPurchases(userData.items || []); // Set the user's purchases
          } else {
            setPurchases([]); // No purchases found
          }
        } catch (error) {
          console.error("Error fetching purchases: ", error);
        }
      } else {
        router.push("/login"); // Redirect to login if not logged in
      }
      setLoading(false);
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
      if (user) {
        fetchPurchases(); // Fetch purchases once user is authenticated
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Your Purchases</h1>
      {purchases.length === 0 ? (
        <p>You havent purchased any services yet.</p>
      ) : (
        <ul className="space-y-4">
          {purchases.map((purchase, index) => (
            <li key={index} className="border rounded-lg p-4 shadow">
              <h2 className="text-lg font-bold">{purchase.service}</h2>
              <p className="text-sm text-gray-500">Price: ${purchase.price}</p>
              <p className="text-xs text-gray-400">
                Purchased at: {new Date(purchase.purchasedAt).toLocaleString()}
              </p>
              <p className="text-xs text-gray-400">
                Payment Token: {purchase.paymentToken}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
