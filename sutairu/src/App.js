import React from "react";
import { Routes, Route } from "react-router-dom";
//BrowserRouter as Router,
import HomePage from "./pages/Home";
import Header from "./Header";
import Inscription from "./pages/Inscription";
import Connection from "./pages/Connection";
import CreateDesign from "./pages/CreateDesign";
import MesDesigns from "./pages/MesDesign";
import MyProfile from "./pages/MyProfile";
import MonColis from "./pages/MonColis";
import MonPanier from "./pages/MonPanier";
import MesCommandes from "./pages/MesCommandes";
import "./app.css";

function App() {
  return (
    <div>
      <Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/creerdesign" element={<CreateDesign />} />
          <Route path="/mesdesigns" element={<MesDesigns />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/moncolis" element={<MonColis />} />
          <Route path="/monpanier" element={<MonPanier />} />
          <Route path="/mescommandes" element={<MesCommandes />} />
        </Routes>
      </Header>
    </div>
  );
}

export default App;


// import { useState } from 'react'

// function App() {

//   const [name, setName] = useState("");

//   const [email, setEmail] = useState("");

//   const handleOnSubmit = async (e) => {

//     e.preventDefault();

//     let result = await fetch(

//       'http://localhost:5000/register', {

//       method: "post",

//       body: JSON.stringify({ name, email }),

//       headers: {

//         'Content-Type': 'application/json'

//       }

//     })

//     result = await result.json();

//     console.warn(result);

//     if (result) {

//       alert("Data saved succesfully");

//       setEmail("");

//       setName("");

//     }

//   }

//   return (

//     <>

//       <h1>This is React WebApp </h1>

//       <form action="">

//         <input type="text" placeholder="name"

//           value={name} onChange={(e) => setName(e.target.value)} />

//         <input type="email" placeholder="email"

//           value={email} onChange={(e) => setEmail(e.target.value)} />

//         <button type="submit"

//           onClick={handleOnSubmit}>submit</button>

//       </form>


//     </>

//   );
// }


// export default App;