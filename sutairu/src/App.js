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

function App() {
  return (
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
  );
}

export default App;
