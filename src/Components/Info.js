import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        "We bring healthy eating to your doorstep, offering a diverse array of tailored meal solutions designed to meet your nutritional goals. Our platform enables you to connect with nutrition experts who provide personalized dietary advice, create custom meal plans, and offer convenient meal deliveries whenever you need them."
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Personalized Nutrition Plans"
          description="Unlock your optimal health with custom nutrition plans tailored to your unique needs and goals. Utilizing advanced technology, our experts craft personalized plans based on your preferences and lifestyle, ensuring sustainable results."
          //icon={faTruckMedical}
        />

        <InformationCard
          title="Sustainable Meal Delivery"
          description="Enjoy delicious, locally-sourced meals delivered to your doorstep, guilt-free. Our sustainable practices support local farmers and reduce waste, providing you with convenient, eco-friendly dining options."
          //icon={faHeartPulse}
        />

        <InformationCard
          title="AI-Powered Nutritional Support"
          description="Harness the power of AI for personalized nutritional guidance. Our cutting-edge technology analyzes your dietary preferences and health data to create tailored plans that adapt to your needs. Say hello to intelligent eating choices and a healthier you, guided by the latest in AI technology."
          //icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
