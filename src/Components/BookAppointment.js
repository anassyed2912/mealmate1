import React from "react";
import Doctor from "../Assets/doctor-book-appointment.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
       <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose MealMate</span>
        </h3>
        <p className="ba-description">
        "Meal Mate revolutionizes nutrition with AI-driven personalization, crafting bespoke meal plans for your unique health goals. We stand out with our commitment to sustainability, supporting local farmers and eco-friendly practices. Our platform benefits health-conscious individuals seeking tailored solutions, busy professionals craving convenience, and environmentally-conscious consumers making a positive impact with every bite. Experience the difference with Meal Mate: personalized, sustainable, and delicious."
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Personalized Nutrition
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Sustainable Sourcing
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Convenient Delivery
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> AI-Powered Precision
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Lets get in touch!
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
