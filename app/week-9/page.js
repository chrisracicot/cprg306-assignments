"use client";

console.log("page.js file is loaded");

// week-9/page.js
import React from "react";
import Layout from "./layout";
import { useUserAuth } from "./_utils/auth-context";

console.log("useUserAuth:", useUserAuth); // Debugging step to check if useUserAuth is a function

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const goToShoppingList = () => {
    window.location.href = "./week-9/shopping-list";
  };

  return (
    <Layout>
      <div>
        {!user ? (
          <button onClick={handleLogin}>Login with GitHub</button>
        ) : (
          <div>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={goToShoppingList}>Go to Shopping List</button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Page;
