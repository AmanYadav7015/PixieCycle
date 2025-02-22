import React, { useState, useEffect } from "react";
import { auth,actionCodeSettings } from "./firebase";
import { getAuth, signOut } from "firebase/auth";
import SignIn from "./components/SignIn";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";
import Calendar from "./components/Calendar/CalendarPage";
import AddPeriod from "./components/AddPeriod/AddPeriod";
import AnalysisPage from "./components/AnalysisPage/AnalysisPage";
import Eco from "./components/Eco/Eco";
import SelfCare from "./components/SelfCare/SelfCare";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";

const LandingPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  //   return () => unsubscribe();
  // }, []);

  return (
    
    <section className="flex flex-col items-center justify-center h-screen text-center">
      <div className="App">
      {user ? (
        <h1 className="font-bold text-[#FF949B]" style={{fontSize: "30px"}}>Welcome, {user.displayName}!</h1>
      ) : (
        <SignIn />
      )}
    </div>

      <h2
        className="font-semibold"
        style={{
          fontFamily: "'Irish Grover'",
          fontSize: "145px",
          color: "#FFAFCC",
          WebkitTextStroke: "2px #80102C",
        }}
      >
        PixieCycle
      </h2>

      <p
        className="mt-2"
        style={{
          fontFamily: "'Itim', cursive",
          fontSize: "50px",
          color: "#FF949B",
        }}
      >
        tracks your period cycle and helps<br></br> you make eco-friendly choices.
      </p>

      <button
        className="mt-4 px-6 py-2 text-white transition hover:bg-blue-700 font-bold"
        style={{
          backgroundColor: "#FFAFCC",
          width: "350px",
          fontSize: "25px",
          borderRadius: "25px",
        }}
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </button>

      <button
        className="mt-4 px-6 py-2 text-white transition hover:bg-blue-700 font-bold"
        style={{
          backgroundColor: "#FFAFCC",
          width: "350px",
          fontSize: "25px",
          borderRadius: "25px",
        }}
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </section>
  );
};


const LoginPage = () => {
  const navigate = useNavigate();
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

 

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#FFF7EC]">
      <h2
          className="font-semibold"
          style={{
            fontFamily: "'Irish Grover'",
            fontSize: "100px",
            color: "#FFAFCC",
            WebkitTextStroke: "1px #80102C",
          }}
        >
          PixieCycle
        </h2>

      <div className="bg-[#FFCAD4] p-8 mt-6 rounded-2xl shadow-lg w-[400px] text-center">
        <h2
          className="text-5xl font-semibold mb-4"
          style={{
            fontFamily: "'Cute Font', sans-serif",
            color: "#D47A91",
            letterSpacing: "2px",
            fontSize: "130px",
            textShadow: "2px 2px 0px rgba(128, 16, 44, 1)"
          }}
        >
          <span style={{ color: "#DEF3CF" }}>L</span>
          <span style={{ color: "#FF949B" }}>o</span>
          <span style={{ color: "#B3E2F1" }}>g</span>
          <span style={{ color: "#FEF9C5" }}>i</span>
          <span style={{ color: "#F9DB9D" }}>n</span>
        </h2>


        <input
          type="email"
          placeholder="youremail@gmail.com"
          className="w-full p-3 mb-3 rounded-lg border border-gray-300 font-semibold text-center bg-[#FFE5EC]"
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          
        />

        <input
          type="password"
          placeholder="**********"
          className="w-full p-3 mb-3 rounded-lg border border-gray-300 text-center bg-[#FFE5EC]"
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        />

        <button 
          className="w-12 h-12 bg-[#FFAFCC] text-black flex items-center justify-center mx-auto text-2xl"
          style={{ borderRadius: "20px",
            width: "70px"
          }}
          onClick={() =>{ 
            const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    navigate("/home-page")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
          }}
      >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>


        <div className="mt-4 text-sm text-gray-700">
          <input type="checkbox" className="mr-2" onClick={()=>{
            const auth = getAuth();
            sendSignInLinkToEmail(auth, email, actionCodeSettings)
              .then(() => {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                alert("email sent");
                window.localStorage.setItem('emailForSignIn', email);
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // alert(email)
                // ...
              });
          }} />
          <span className="font-semibold">Forgot your password?</span>
        </div>

        <p className="mt-4 text-gray-700">
          Don’t have an account?{" "}
          <a href="#" className="text-pink-600 font-semibold" onClick={() => navigate("/signup")}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");


  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#FFF7EC]">
      <h2
          className="font-semibold"
          style={{
            fontFamily: "'Irish Grover'",
            fontSize: "100px",
            color: "#FFAFCC",
            WebkitTextStroke: "1px #80102C",
          }}
        >
          PixieCycle
        </h2>

      <div className="bg-[#FFCAD4] p-8 mt-6 rounded-2xl shadow-lg w-[400px] text-center">
        <h2
          className="text-5xl font-semibold mb-4"
          style={{
            fontFamily: "'Cute Font', sans-serif",
            color: "#D47A91",
            letterSpacing: "2px",
            fontSize: "130px",
            textShadow: "2px 2px 0px rgba(128, 16, 44, 1)"
          }}
        >
          <span style={{ color: "#DEF3CF" }}>S</span>
          <span style={{ color: "#FF949B" }}>i</span>
          <span style={{ color: "#B3E2F1" }}>g</span>
          <span style={{ color: "#DEF3CF" }}>n</span>
          <span style={{ color: "#FEF9C5" }}>U</span>
          <span style={{ color: "#F9DB9D" }}>p</span>
        </h2>


        <input
          type="email"
          id="email"
          placeholder="youremail@gmail.com"
          className="w-full p-3 mb-3 rounded-lg border border-gray-300 font-semibold text-center bg-[#FFE5EC]"
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
        />

        <input
          type="password"
          id="pass"
          placeholder="**********"
          className="w-full p-3 mb-3 rounded-lg border border-gray-300 text-center bg-[#FFE5EC]"
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        />
        {/* let email={document.getElementById("email").value}; 
        let password={document.getElementById("pass").value};
        console.log(email); */}

        <button 
          className="w-12 h-12 bg-[#FFAFCC] text-black flex items-center justify-center mx-auto text-2xl"
          style={{ borderRadius: "20px",
            width: "70px"
          }}
          // navigate("/login")
          onClick={() => {

            const auth = getAuth();
            console.log(email);
            console.log(password);
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed up 
                navigate("/login")
                const user = userCredential.user;
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
              } )
            ;}}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  )
}

const HomePage = () => {
  const navigate = useNavigate();
  return (
    // <div className="min-h-screen p-4">
      <div className="mt-30 p-4 rounded-xl shadow-md text-center relative">
        <h2 className="text-lg font-bold text-[#3C096C]" style={{fontSize: "25px"}}>Period</h2><br></br>
        <h1 className="text-4xl font-bold text-[#3C096C] mt-2"  style={{fontSize: "70px"}}>4 DAYS LEFT</h1>
        <p className="text-sm text-[#3C096C]"  style={{fontSize: "20px"}}>Feb 19 - Next Period</p><br></br>
        <button className="mt-2 mb-6 px-4 py-2 bg-[#FF5A83] text-white font-bold rounded-full" 
        style={{fontSize: "20px", width: "200px"}}
        onClick={() => navigate("/add-period")}>
          Edit Period
        </button>
      {/* </div> */}

      <div className="mt-4 p-4 shadow-md" style={{ backgroundColor: "rgba(224, 195, 252, 0.5)", height: "250px", borderRadius: "57px" }}>
      <div className="ml-7 flex items-start"><h3 className="text-lg font-semibold" style={{fontFamily: "'Akshar', sans-serif", fontSize: "25px"}}>Cycle Phase</h3></div>
      <div className="grid grid-cols-4 gap-8 mt-3">
        <div className="bg-[#FFB3C6] ml-7 p-4 pl-8 text-black text-start" style={{height: "170px", borderRadius: "57px"}}>
          <p className="font-bold" style={{fontFamily:"'Akshar', sans-serif", fontSize: "35px"}}>Feb 19</p>
          <p style={{fontFamily:"'Alef', sans-serif", fontSize: "20px"}}>Next Period</p>
          </div>
        <div className="bg-[#FFE6A7] p-4 pl-8 text-start" style={{height: "170px", borderRadius: "57px"}}>
          <p className="font-bold" style={{fontFamily:"'Akshar', sans-serif", fontSize: "35px"}}>Mar 1</p>
          <p style={{fontFamily:"'Alef', sans-serif", fontSize: "20px"}}>Next Fertile</p></div>
        <div className="bg-[#FFB3C6] p-4 pl-8 text-start" style={{height: "170px", borderRadius: "57px"}}>
        <p className="font-bold" style={{fontFamily:"'Akshar', sans-serif", fontSize: "35px"}}>Mar 6</p>
        <p style={{fontFamily:"'Alef', sans-serif", fontSize: "20px"}}>Ovulation</p></div>
        <div className="bg-[#FFE6A7] mr-7 p-4 pl-8 text-start" style={{height: "170px", borderRadius: "57px"}}>
        <p className="font-bold" style={{fontFamily:"'Akshar', sans-serif", fontSize: "35px"}}>Feb 19</p>
        <p style={{fontFamily:"'Alef', sans-serif", fontSize: "20px"}}>Next Period</p></div>
      </div>
    </div>

    <div className="mt-4 p-8 bg-[#F4EFFA] shadow-md flex flex-col items-start" style={{ height: "250px", borderRadius: "57px", fontFamily: "'Akshar', sans-serif" }}>
        <h3 className="text-lg font-bold" style={{fontSize: "35px"}}>How is your mood today?</h3>
        <p className="text-sm" style={{fontSize: "19px"}}>Tell us more about your mood to get analysis</p><br></br><br></br>
        <button className="mt-2 px-4 py-2 bg-[#745A8D] text-white rounded-full font-semibold" 
        style={{fontSize: "19px", width: "160px"}}
        onClick={() => navigate("/self-care")}>
          Add Mood
        </button>
      </div>

      <div className="mt-4 p-4 bg-[#EAE2F8] shadow-md p-8" style={{ backgroundColor: "rgba(224, 195, 252, 0.5)", height: "700px", borderRadius: "57px" }}>
        <h3 className="text-lg font-bold text-start" style={{fontFamily: "'Akshar', sans-serif", fontSize: "25px"}}>My Cycles</h3>
        <p className="text-sm text-start" style={{fontFamily: "'Albert Sans', sans-serif", fontSize: "15px"}}>3 Cycles Logged</p>
        <div className="grid grid-cols-2 gap-10 mt-2 justify-evenly">

        <div className="bg-[#FFB3C6] ml-60 p-6 pl-8 text-black flex flex-col justify-end items-start" style={{width: "350px", height: "250px", borderRadius: "57px"}}>
          <p className="font-bold" style={{fontFamily:"'Akshar', sans-serif", fontSize: "35px"}}>5 Days</p>
          <p style={{fontFamily:"'Alef', sans-serif", fontSize: "20px"}}>Average Period</p>
        </div>

        <div className="bg-[#FFE6A7] mr-60 p-2 p-6 pl-8 text-black flex flex-col justify-end items-start" style={{width: "350px", height: "250px", borderRadius: "57px"}}>
          <p className="font-bold" style={{fontFamily:"'Akshar', sans-serif", fontSize: "35px"}}>29 Days</p>
          <p style={{fontFamily:"'Alef', sans-serif", fontSize: "20px"}}>Average Cycle</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-start" style={{fontFamily: "'Akshar', sans-serif", fontSize: "25px"}}>History</h3>
          <p className="text-sm text-start" style={{fontFamily: "'Albert Sans', sans-serif", fontSize: "15px"}}>Last 3 Months</p>
        </div>
        </div>
      </div>

      <div className="mt-4 mb-15 p-8 bg-[#F4EFFA] shadow-md flex flex-col items-start" style={{ height: "250px", borderRadius: "57px", fontFamily: "'Akshar', sans-serif" }}>
        <h3 className="text-lg font-bold" style={{fontSize: "35px"}}>How are you feeling today?</h3>
        <p className="text-sm" style={{fontSize: "19px"}}>Tell us more about your body to get analysis</p><br></br><br></br>
        <button className="mt-2 px-4 py-2 bg-[#745A8D] text-white rounded-full font-semibold" 
        style={{fontSize: "19px", width: "240px"}}
        onClick={() => navigate("/self-care")}>
          Add Symptom
        </button>
      </div>

    </div>
  );
};


const App = () => {
  const auth = getAuth();

  useEffect(() => {
    signOut(auth);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpeg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
        >
          <div className="absolute inset-0 bg-white opacity-80"></div>
        </div>

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/" element={<SignIn />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home-page" element={<><Navbar /><HomePage /><Footer /></>} />
            <Route path="/calendar" element={<><Calendar/><Footer/></>} />
            <Route path="/add-period" element={<><AddPeriod/><Footer/></>} />
            <Route path="/self-care" element={<><SelfCare/><Footer/></>} />
            <Route path="/analysis-page" element={<><AnalysisPage/><Footer/></>} />
            <Route path="/eco" element={<><Eco/><Footer/></>} />
            <Route path="/profile" element={<><Profile/><Footer/></>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
