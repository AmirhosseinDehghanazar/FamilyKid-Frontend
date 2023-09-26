import { useEffect, useState } from "react";
import { useUpdateDataMutation } from "../../../app/apiSlice";
import { toast } from "react-toastify";
import { handlers } from "browser-router/html5-history/adapter";

const Rectangle = ({ data, job, name, setLoading }) => {
  const [showTeachers, setShowTeachers] = useState(false);
  const [updateData, {}] = useUpdateDataMutation(undefined);
  console.log(data);

  // handle function for teachers
  const recHandler = (teacherName) => {
    // teacher handler
    if (job === "teacher") {
      try {
        setLoading(true);
        // cant have more than 3 teacher in a rectengle
        if (data.teachers.length < 3 && !data.teachers.find((t) => t == name)) {
          updateData({
            ...data,
            teachers: [...data.teachers, name],
          });
          toast.success("successfully assigned");
        } //if name already exist return below
        else if (data.teachers.find((t) => t == name)) {
          toast.warn("you are already asigned!");
        } //if teachers are full
        else if (data.teachers.length >= 3) {
          toast.warn("sorry, can't have more than 3 teachers😣");
        }
      } catch (e) {
        alert(e.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } else {
      // supervisor handler: removes teacher
      updateData({
        ...data,
        teachers: data.teachers.filter((t) => t !== teacherName),
      });
    }
  };

  useEffect(() => {
    job === "supervisor" && setShowTeachers(true);

    return () => setShowTeachers(false);
  }, []);

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
    <>
      <div className={job === "supervisor" && "relative rectangle"}>
        <div
          onClick={recHandler}
          className="flex flex-col max rectangle-parent cursor-pointer overflow-hidden rounded-2xl"
        >
          {/* if supervisor show all teacher inside */}
          <div
            style={rectangle}
            className="flex items-center gap-2 justify-center"
          >
            {job === "supervisor" &&
              data.teachers.map((t) => <div>{t.toString().slice(0, 2)}</div>)}
          </div>
          <div style={underline}></div>
        </div>

        {/* show teachers in that time */}
        {showTeachers && (
          <div className="absolute teachers min-w-[100px] top-10 rounded-lg shadow-2xl bg-cyan-100">
            {data.teachers.map((t) => (
              <div key={t} className="flex flex-col justify-between w-full">
                <div className="flex justify-between">
                  <div>{t}</div>
                  <button onClick={() => recHandler(t)}>&#10060;</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Rectangle;
