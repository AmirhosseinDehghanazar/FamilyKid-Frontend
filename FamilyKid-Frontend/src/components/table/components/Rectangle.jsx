import React from "react";
import {
  useGetDataByIdQuery,
  useUpdateDataMutation,
} from "../../../app/apiSlice";
import { toast } from "react-toastify";

const Rectangle = ({ data, job, name, refetch }) => {
  const [updateData, {}] = useUpdateDataMutation(undefined);
  console.log(data);

  // handle function for teachers
  const teacherHandler = () => {
    // cant have more than 3 teacher in a rectengle
    if (data.teachers.length < 3 && !data.teachers.find((t) => (t = name)))
      try {
        updateData({
          ...data,
          teachers: [...data.teachers, name],
        });
        refetch();
        toast.success("successfully assigned");
      } catch (e) {
        alert(e.message);
      }
    else if (data.teachers.find((t) => t == name)) {
      toast.warn("you are already asigned!");
    } else if (data.teachers.length >= 3) {
      toast.warn("sorry, can't have more than 3 teachers😣");
    }
  };

  const rectangle = {
    /* Rectangle */
    height: "50px",
    backgroundColor: data.teachers.length >= 3 ? "#f4e5e9" : "#D7EDDE",
  };

  const underline = {
    // underLine
    height: "4px",
    backgroundColor: data.teachers.length >= 3 ? "#DB2725" : "#26A026",
  };
  return (
    <div
      onClick={job === "teacher" && teacherHandler}
      className="flex flex-col max rectangle-parent rounded-2xl cursor-pointer overflow-hidden"
    >
      <div style={rectangle}></div>
      <div style={underline}></div>
    </div>
  );
};

export default Rectangle;
