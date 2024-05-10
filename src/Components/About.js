import React from "react";
import Doctor from "../Assets/doctor-group.jpeg";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to Meal Mate, your personalized nutrition companion powered by AI technology. Our platform offers tailored meal plans and nutritional guidance, prioritizing your health and well-being. Join us in embracing a healthier lifestyle with intelligent eating choices.




        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Personalized Meal Plans"
          description="Discover your ideal meal solutions with Meal Mate's AI-powered nutrition platform. Tailored to your preferences and health goals, our meal plans prioritize sustainability, supporting local farmers and promoting eco-friendly eating habits."
        />

        <SolutionStep
          title="Flexible Scheduling"
          description="Select the most convenient delivery times for your personalized meals. Our platform ensures seamless scheduling, allowing you to enjoy nutritious meals while minimizing food waste and supporting sustainable farming practices."
        />

        <SolutionStep
          title="Empowering Farmers"
          description="By choosing Meal Mate, you contribute to a more sustainable food system. We directly support local farmers, ensuring fair compensation and reducing environmental impact through responsible sourcing practices. Join us in empowering farmers and cultivating a healthier planet, one meal at a time."
        />
      </div>
    </div>
  );
}

export default About;
