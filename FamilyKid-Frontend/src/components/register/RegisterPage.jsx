import React, { useState } from "react";
import RegSwitch from "./RegSwitch";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { registerSchema } from "../../validation/registerSchema";

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
      <Formik
        initialValues={{
          email: "",
          phone: "",
          landline_phone: "",
          national_code: "",
          first_name: "",
          last_name: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={registerSchema}
      >
        {({ errors }) => (
          <Form className="mt-10">
            {/* checks if supervisor then render supervisor inputs */}
            {person.job === "supervisor" && (
              <div className="grid  gap-x-3 gap-y-0 mb-6 md:grid-cols-2">
                {/* First Name */}
                <div className="mb-6">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <Field
                    id="first_name"
                    type="text"
                    name="first_name"
                    className={`${
                      errors.first_name ? "error" : "valid"
                    } bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  active:outline-cyan-00 transition-all block w-full p-2.5 `}
                    placeholder="your pretty name"
                  />
                  <ErrorMessage
                    name="first_name"
                    render={(msg) => (
                      <div className="text-red-500 font-semibold">{msg}</div>
                    )}
                  />
                </div>

                {/* Last Name */}
                <div className="mb-6">
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <Field
                    id="last_name"
                    type="text"
                    name="last_name"
                    className={`${
                      errors.last_name ? "error" : "valid"
                    } bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  active:outline-cyan-00 transition-all block w-full p-2.5 `}
                    placeholder="you'r beatifull last name"
                  />
                  <ErrorMessage
                    name="last_name"
                    render={(msg) => (
                      <div className="text-red-500 font-semibold">{msg}</div>
                    )}
                  />
                </div>
              </div>
            )}

            {/* Nationality Code */}
            <div className="mb-6">
              <label
                htmlFor="national_code"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Nationality Code
              </label>
              <Field
                type="string"
                name="national_code"
                id="national_code"
                className={`${
                  errors.national_code ? "error" : "valid"
                } bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  active:outline-cyan-00 transition-all block w-full p-2.5 `}
                placeholder="2475512577457"
              />
              <ErrorMessage
                name="national_code"
                render={(msg) => (
                  <div className="text-red-500 font-semibold">{msg}</div>
                )}
              />
            </div>
            {/* email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Email address
              </label>
              <Field
                id="email"
                type="email"
                name="email"
                className={`${
                  errors.email ? "error" : "valid"
                } bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  active:outline-cyan-00 transition-all block w-full p-2.5 `}
                placeholder="example@gmail.com"
              />
              <ErrorMessage
                name="email"
                render={(msg) => (
                  <div className="text-red-500 font-semibold">{msg}</div>
                )}
              />
              {/* email end here */}
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
                <Field
                  name="phone"
                  type="number"
                  id="phone"
                  className={`${
                    errors.phone ? "error" : "valid"
                  } bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  active:outline-cyan-00 transition-all block w-full p-2.5 `}
                  placeholder="phone number"
                />
                <ErrorMessage
                  name="phone"
                  render={(msg) => (
                    <div className="text-red-500 font-semibold">{msg}</div>
                  )}
                />
              </div>

              {/* Landline Phone */}
              <div className="mb-6">
                <label
                  htmlFor="landline_phone"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  Landline Phone
                </label>
                <Field
                  name="landline_phone"
                  type="number"
                  id="landline_phone"
                  className={`${
                    errors.landline_phone ? "error" : "valid"
                  } bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  active:outline-cyan-00 transition-all block w-full p-2.5 `}
                  placeholder="landline"
                />
                <ErrorMessage
                  name="landline_phone"
                  render={(msg) => (
                    <div className="text-red-500 font-semibold">{msg}</div>
                  )}
                />
              </div>

              {/* Gender with "select" input selected 
          value is false so they have to choose one */}
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  Gender
                </label>
                <select
                  required
                  id="gender"
                  className="bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  focus:outline-cyan-500 transition-all block w-full p-2.5 "
                >
                  <option selected value={false} r>
                    __Select_Gender__
                  </option>
                  <option value={"male"}>male</option>
                  <option value={"female"}>female</option>
                  <option value={"unknown"}>prefer not to say</option>
                </select>
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterPage;
