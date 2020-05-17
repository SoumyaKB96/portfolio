import React from "react";
import "./styles.css";
import LandingPage from "./components/LandingPage";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <LandingPage />
      <SocialLinks />
      <Contact />

      <img src="dpImage.jpg" alt="" className="Image" />
    </div>
  );
}
