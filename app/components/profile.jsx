import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation"; // Import Next.js router for navigation

function Profile() {
    const [userDetails, setUserDetails] = useState(null);
    const router = useRouter(); // Initialize the router

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) { // Check if user is authenticated
                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                } else {
                    console.log("User document does not exist");
                }
            } else {
                console.log("User is not logged in");
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    async function handleLogout() {
        try {
            await auth.signOut();
            window.location.href = "/login";
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    }

    // Navigate to the dashboard page
    const goToDashboard = () => {
        router.push("/dashboard");
    };

    return (
        <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow-md max-w-xs mx-auto">
            {userDetails ? (
                <>
                    <div className="text-left">
                        <h3 className="text-gray-800 text-md font-semibold">{userDetails.firstName}</h3>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                        <button
                            className="bg-blue-600 text-white text-sm font-semibold py-1 px-2 rounded hover:bg-blue-500 transition duration-200 w-full"
                            onClick={goToDashboard} // Redirect to dashboard
                        >
                            Dashboard
                        </button>
                        <button
                            className="bg-red-500 text-white text-sm font-semibold py-1 px-2 rounded hover:bg-red-400 transition duration-200 w-full"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </>
            ) : (
                <p>Loading user details...</p>
            )}
        </div>
    );
}

export default Profile;
