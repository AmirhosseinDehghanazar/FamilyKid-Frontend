import React, { useState } from "react";
import RegSwitch from "../register/RegSwitch";

// The LoginPage component represents a login page that allows users to register in Family Kids.
const LoginPage = () => {
  // Define state to keep track of the selected person's job (initially set as "supervisor").
  const [person, setPerson] = useState({
    job: "supervisor",
  });

  // Function to switch the selected person's job and update the state.
  const switchPerson = (job) => {
    setPerson((prev) => ({
      job: job,
    }));

    // Log the updated person's job to the console.
    console.log(person);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="font-bold text-2xl">
        <p>Registration in Family Kids</p>
      </div>

      {/* Render the RegSwitch component, passing the switchPerson function and the current person's job as props. */}
      <RegSwitch switchPerson={switchPerson} person={person.job} />

      <form className="mt-6 w-full">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border py-3 border-gray-300 text-gray-900 rounded-lg focus:outline-cyan-500 transition-all block w-full p-2.5"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary py-2 rounded-lg text-white"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
