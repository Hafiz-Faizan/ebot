"use client";
import { useEffect, useState } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { submitPayment } from "../actions/actions";
import { useRouter } from "next/navigation";
import { auth, db } from "../components/firebase";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

export default function PaymentPage() {
    const router = useRouter();
    const [price, setPrice] = useState(0);
    const [service, setService] = useState("");
    const appId = "sandbox-sq0idb-g7eu3BHJ_ZDq-PynONKeXg";
    const locationId = "LYYY791MFQZBZ";

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const priceFromQuery = query.get('price');
        const serviceFromQuery = query.get('service');
        if (priceFromQuery) {
            const amount = parseFloat(priceFromQuery.replace(/[^0-9.]/g, ''));
            setPrice(amount);
        }
        if (serviceFromQuery) {
            setService(decodeURIComponent(serviceFromQuery));
        }
    }, []);

    const handlePaymentSuccess = async (token, paymentResult) => {
        const user = auth.currentUser;

        if (user) {
            try {
                const userRef = doc(db, 'purchases', user.uid);
                const purchaseData = {
                    service: service,
                    price: price,
                    paymentToken: token,
                    paymentResult,
                    purchasedAt: new Date().toISOString(),
                };

                const userSnapshot = await getDoc(userRef);
                if (userSnapshot.exists()) {
                    await updateDoc(userRef, {
                        items: arrayUnion(purchaseData),
                    });
                } else {
                    await setDoc(userRef, {
                        items: [purchaseData],
                    });
                }
                alert("Payment successful and saved to Firestore!");
                const cartRef = doc(db, "carts", user.uid);
                await updateDoc(cartRef, { items: [] });
                router.push("/dashboard");
            } catch (error) {
                console.error("Error saving purchase to Firestore: ", error);
                alert("Failed to save the purchase. Please try again.");
            }
        } else {
            alert("User not logged in");
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-6xl">
            <h1 className="text-2xl font-bold mb-6">Complete Your Payment</h1>
            
            {/* Order Summary Section */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
                <p className="mb-2"><strong>Service:</strong> {service}</p>
                <p className="text-lg font-bold">Total Price: ${price.toFixed(2)}</p>
            </div>

            <div style={{ maxWidth: "400px", margin: "0 auto" }}>
                <PaymentForm
                    applicationId={appId}
                    locationId={locationId}
                    cardTokenizeResponseReceived={async (token) => {
                        const result = await submitPayment(token.token, price * 100); // Convert price to cents for Square
                        console.log("Payment Result:", result);

                        if (result.payment.status === "COMPLETED") {
                            handlePaymentSuccess(token.token, result);
                        } else if (result.delayAction) {
                            alert("Payment is delayed and will be reviewed. You will be notified upon completion.");
                        } else {
                            alert("Payment failed. Status: " + result.status);
                        }
                    }}
                >
                    <div style={{ marginBottom: "20px" }}>
                        <h2 className="text-lg mb-2">Pay with Credit Card</h2>
                        <CreditCard />
                    </div>
                </PaymentForm>
            </div>
        </div>
    );
}