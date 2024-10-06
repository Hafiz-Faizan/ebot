import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) { // Check if user is authenticated
                console.log(user);

                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                    console.log(docSnap.data());
                } else {
                    console.log("User document does not exist");
                }
            } else {
                console.log("User is not logged in");
                // Optionally, redirect to the login page or show a message
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
            console.log("User logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    }

    return (
        <div>
            {userDetails ? (
                <>
                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-gray-800 text-lg font-bold">{userDetails.firstName}</h3>
                        <button
                            className="bg-blue-800 text-white rounded-lg ml-4 px-2 hover:bg-blue-700 transition duration-200"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>

                </>
            ) : (
                <p>.</p>
            )}
        </div>
    );
}

export default Profile;
