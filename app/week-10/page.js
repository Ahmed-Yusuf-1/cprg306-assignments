"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-800">
      <div>
        <h1 className="text-3xl text-white font-bold mb-4">
          Shopping List App
        </h1>
        {user ? (
          <div>
            <p className="text-white mb-4">
              Welcome, {user.displayName} ({user.email})
            </p>
            <div className="flex flex-col space-y-2">
              <Link
                href="/week-10/shopping-list" // Corrected Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
              >
                Go to Shopping List
              </Link>
              <button
                onClick={handleSignOut}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login with GitHub
          </button>
        )}
      </div>
    </main>
  );
}