import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!fullName.trim()) {
      errors.fullName = "Your name is required";
    } else if (fullName.trim().length < 3) {
      errors.fullName = "Your name must be at least 3 characters";
    }

    if (!contactNumber.trim()) {
      errors.contactNumber = "Your contact number is required";
    } else if (contactNumber.trim().length !== 10) {
      errors.contactNumber = "Your contact number must be 10 digits";
    }

    if (gender === "default") {
      errors.gender = "Please select your gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select your preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setFullName("");
    setContactNumber("");
    setGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          MealMate <span className="legal-siteSign"></span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Reserve a meeting with us!</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Your Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            {formErrors.fullName && <p className="error-message">{formErrors.fullName}</p>}
          </label>

          <br />
          <label>
            Your Contact Number:
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
            {formErrors.contactNumber && <p className="error-message">{formErrors.contactNumber}</p>}
          </label>

          <br />
          <label>
            Your Gender:
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {formErrors.gender && <p className="error-message">{formErrors.gender}</p>}
          </label>

          <br />
          <label>
            Preferred Meeting Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <br />
          <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="voice">Voice Call</option>
              <option value="video">Video Call</option>
            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Meeting
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Your Meeting details have been sent. We'll contact you soon!</p>
        </form>
      </div>

    {/*  <div className="legal-footer">
       <p>© 2023 MealMate. All rights reserved.</p>
      </div>
  */}
     {/* <ToastContainer autoClose={5000} limit={1} closeButton={false} />*/}
    </div>
  );
}

export default AppointmentForm;
