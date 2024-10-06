"use client";
import { useEffect, useState } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { submitPayment } from "../actions/actions";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const [price, setPrice] = useState(0);

    useEffect(() => {
        // Parse the price from the URL query parameters
        const query = new URLSearchParams(window.location.search);
        const priceFromQuery = query.get('price');
        if (priceFromQuery) {
            // Assuming price is in the format "$100 per Month & Up"
            const amount = parseInt(priceFromQuery.replace(/[^0-9]/g, '')); // Extract numerical value
            setPrice(amount); // Set the price as an integer
        }
    }, []);

    // Replace with your application ID and location ID
    const appId = "sandbox-sq0idb-n7buUwWAV3R0rXWd5TQq5g";
    const locationId = "main";

    return (
        <PaymentForm
            applicationId={appId}
            locationId={locationId}
            cardTokenizeResponseReceived={async (token) => {
                const result = await submitPayment(token.token, price); // Use the dynamic price
                console.log(result);
            }}
        >
            <CreditCard />
        </PaymentForm>
    );
}
