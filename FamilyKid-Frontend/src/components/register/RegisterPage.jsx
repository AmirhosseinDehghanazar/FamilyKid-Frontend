import React, { useState } from "react";
import RegSwitch from "./RegSwitch";

const RegisterPage = () => {
  const [person, setPerson] = useState({
    job: "supervisor",
  });

  const switchPerson = (job) => {
    setPerson((prev) => ({
      job: job,
    }));

    console.log(person);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="font-bold text-2xl">
        <p>Registration in Family Kids</p>
      </div>

      {/* person switch component */}
      <RegSwitch switchPerson={switchPerson} person={person.job} />

      <form className="mt-10">
        {/* checks if supervisor then render supervisor inputs */}
        {person.job === "supervisor" && (
          <div className="grid  gap-x-3 gap-y-0 mb-6 md:grid-cols-2">
            {/* First Name */}
            <div className="mb-6">
              <label
                htmlFor="FirstName"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                id="FirstName"
                className="bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  focus:outline-cyan-500 active:outline-cyan-00 transition-all block w-full p-2.5 "
                placeholder="your pretty name"
                required
              />
            </div>

            {/* Last Name */}
            <div className="mb-6">
              <label
                htmlFor="lastName"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  focus:outline-cyan-500 transition-all block w-full p-2.5 "
                placeholder="you'r beatifull last name"
                required
              />
            </div>
          </div>
        )}

        {/* email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  focus:outline-cyan-500 transition-all block w-full p-2.5 "
            placeholder="example@gmail.com"
            required
          />
        </div>

        {/* phone number */}
        <div className="grid gap-x-3 gap-y-0 mb-6 md:grid-cols-2">
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              className="bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  focus:outline-cyan-500 transition-all block w-full p-2.5 "
              placeholder="phone number"
              required
            />
          </div>

          {/* Landline Phone */}
          <div className="mb-6">
            <label
              htmlFor="Landline"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Landline Phone
            </label>
            <input
              type="number"
              id="Landline"
              className="bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  focus:outline-cyan-500 transition-all block w-full p-2.5 "
              placeholder="landline"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label
              htmlFor="gender"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Gender
            </label>
            <input
              type="text"
              id="gender"
              className="bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  focus:outline-cyan-500 transition-all block w-full p-2.5 "
              placeholder="male female ?"
              required
            />
          </div>

          {/* Date of birth */}
          <div>
            <label
              htmlFor="birthDate"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Date of Birth
            </label>
            <input
              type="datetime-local"
              id="birthDate"
              className="bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  focus:outline-cyan-500 transition-all block w-full p-2.5 "
              placeholder="example@gmail.com"
              required
            />
          </div>
        </div>

        {/* submit button */}
        <button
          type="submit"
          className="w-full bg-primary py-2 rounded-lg text-white"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
