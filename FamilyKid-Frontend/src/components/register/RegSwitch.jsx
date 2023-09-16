import React from "react";
import "./RegSwitch.css"; // Import a separate CSS file for animations

// The RegSwitch component allows users to switch between "Supervisor" and "Teacher" options.
// It receives two props: `switchPerson` (a function to handle the person switch) and `person` (current selected person).
const RegSwitch = ({ switchPerson, person }) => {
  return (
    // A container div that wraps the two buttons and provides a border and rounded corners.
    <div className="border mt-8 border-primary rounded-2xl overflow-hidden flex">
      {/* Button for selecting "Supervisor" */}
      <div>
        <button
          onClick={() => switchPerson("supervisor")}
          // Use conditional classes to style the button based on the selected person.
          className={`${
            person === "supervisor" ? "active-button" : "inactive-button"
          } custom-button`}
        >
          Supervisor
        </button>
      </div>
      {/* Button for selecting "Teacher" */}
      <div>
        <button
          onClick={() => switchPerson("teacher")}
          // Use conditional classes to style the button based on the selected person.
          className={`${
            person === "teacher" ? "active-button" : "inactive-button"
          } custom-button`}
        >
          Teacher
        </button>
      </div>
      <div>
        <button
          onClick={() => switchPerson("consultant")}
          // Use conditional classes to style the button based on the selected person.
          className={`${
            person === "consultant" ? "active-button" : "inactive-button"
          } custom-button`}
        >
          consultant
        </button>
      </div>
    </div>
  );
};

export default RegSwitch;
