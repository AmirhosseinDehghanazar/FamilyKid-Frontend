import React, { useState } from "react";
import RegSwitch from "../register/RegSwitch";
import Logpassword from "./Logpassword";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginSchema } from "../../validation/loginSchema";
import { useNavigate } from "react-router-dom";

// The LoginPage component represents a login page that allows users to register in Family Kids.
const LoginPage = () => {
  // useNavigate to use it after login to navigate user to table
  const navigate = useNavigate();
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

  // function to handle submit
  const submitHandler = (values) => {
    try {
      console.log(values);
      navigate("/table");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="font-bold text-2xl">
        <p>Registration in Family Kids</p>
      </div>

      {/* Render the RegSwitch component, passing the switchPerson function and the current person's job as props. */}
      <RegSwitch switchPerson={switchPerson} person={person.job} />
      {/* using formik to validate values + handle submit */}
      <Formik
        initialValues={{
          national_code: "",
          password: "",
          password1: "",
        }}
        onSubmit={(values) => submitHandler(values)}
        validationSchema={loginSchema}
      >
        {/* we gets errors here so depend on if we have error show dif css
        for inputs */}
        {({ errors }) => (
          <Form className="mt-6 w-full">
            {/* national code */}
            <div className="mb-6">
              <label
                htmlFor="national_code"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                National Code
              </label>
              <Field
                type="text"
                id="national_code"
                name="national_code"
                className={`${
                  errors.national_code ? "error" : "valid"
                } bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  active:outline-cyan-00 transition-all block w-full p-2.5 `}
                placeholder="national code"
              />
              <ErrorMessage
                name="national_code"
                render={(msg) => (
                  <div className="text-red-500 font-semibold">{msg}</div>
                )}
              />
            </div>
            {/* national code ends here */}

            <Logpassword errors={errors} />

            {/*button to Submit */}
            <button
              type="submit"
              className="w-full bg-primary py-2 rounded-lg text-white"
            >
              submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
