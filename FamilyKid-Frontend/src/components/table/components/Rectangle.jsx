import React from "react";
import {
  useGetDataByIdQuery,
  useUpdateDataMutation,
} from "../../../app/apiSlice";
import { toast } from "react-toastify";

const Rectangle = (props) => {
  const [updateData, {}] = useUpdateDataMutation(undefined);

  // handle function for teachers
  const teacherHandler = () => {
    // cant have more than 3 teacher in a rectengle
    if (
      props.teachers.length < 3 &&
      !props.teachers.find((t) => (t = props.name))
    )
      try {
        updateData({
          id: props.id,
          teachers: [...props.teachers, props.name],
        });
        props.refetch();
        toast.success("successfully assigned");
      } catch (e) {
        alert(e.message);
      }
    else if (props.teachers.find((t) => (t = props.name))) {
      toast.warn("you are already asigned!");
    } else if (props.teachers.length >= 3) {
      toast.warn("sorry, can't have more than 3 teachers😣");
    }
  };

  const rectangle = {
    /* Rectangle */
    height: "50px",
    backgroundColor: props.teachers.length >= 3 ? "#f4e5e9" : "#D7EDDE",
  };

  const underline = {
    // underLine
    height: "4px",
    backgroundColor: props.teachers.length >= 3 ? "#DB2725" : "#26A026",
  };
  return (
    <div
      onClick={props.job === "teacher" && teacherHandler}
      className="flex flex-col max rectangle-parent rounded-2xl cursor-pointer overflow-hidden"
    >
      <div style={rectangle}></div>
      <div style={underline}></div>
    </div>
  );
};

export default Rectangle;
