import { ErrorMessage, Field } from "formik";
import React from "react";

const Logpassword = ({ index, errors }) => {
  return (
    <div className="mb-6">
      {/* password */}
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-lg font-medium text-gray-900"
        >
          Password
        </label>
        <Field
          name="password"
          type="password"
          id="password"
          className={`${
            errors.password ? "error" : "valid"
          } bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  active:outline-cyan-00 transition-all block w-full p-2.5 `}
          placeholder="password"
        />
        <ErrorMessage
          name="password"
          render={(msg) => (
            <div className="text-red-500 font-semibold">{msg}</div>
          )}
        />
      </div>
      {/* confirm password */}
      <div className="mb-6">
        <label
          htmlFor="password1"
          className="block mb-2 text-lg font-medium text-gray-900"
        >
          Confirm Password
        </label>
        <Field
          id="password1"
          type="password"
          name="password1"
          className={`${
            errors.password ? "error" : "valid"
          } bg-gray-50 border py-3 border-gray-300 text-gray-900  rounded-lg  active:outline-cyan-00 transition-all block w-full p-2.5 `}
          placeholder="confirm password"
        />
        <ErrorMessage
          name="password1"
          render={(msg) => (
            <div className="text-red-500 font-semibold">{msg}</div>
          )}
        />
      </div>
    </div>
  );
};

export default Logpassword;
