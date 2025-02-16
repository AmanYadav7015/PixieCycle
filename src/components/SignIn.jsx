import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../firebase";

const SignIn = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User:", result.user);
      navigate("/home-page");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={handleGoogleSignIn}
        className="px-8 py-4 bg-[#FFAFCC] text-white font-bold rounded-full shadow-md hover:bg-[#ea9ab2] text-sm"
        style={{fontSize: "18px"}}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
