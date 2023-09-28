import { useEffect, useState } from "react";
import { useUpdateDataMutation } from "../../../../app/apiSlice";
import { toast } from "react-toastify";
import AddTeacher from "./forms/AddTeacher";
import AddStudent from "./forms/AddStudent";
import TimeDetail from "./TimeDetail";

const Rectangle = ({ data, job, name, setLoading }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [students, setStudents] = useState(data.students ?? []);
  const [add, setAdd] = useState({
    students: {
      show: false,
      name: "",
    },
    teachers: {
      show: false,
      name: "",
    },
  });

  const [updateData, {}] = useUpdateDataMutation(undefined);
  console.log(data);

  // handle function for teachers
  const recHandler = () => {
    // teacher handler
    try {
      if (job === "teacher") {
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
      }
    } catch (e) {
      alert(e.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  // checking user job then show detail if user is supervisor
  useEffect(() => {
    job === "supervisor" && setShowDetail(true);

    return () => setShowDetail(false);
  }, []);

  // handles add teacher or student
  const addHandler = (event, name, job) => {
    event.preventDefault();
    updateData({ ...data, [job]: [...data[job], name] });
    setAdd((prev) => ({ ...prev, [job]: { ...prev[job], show: false } }));
    if (job === "students") {
      setStudents((prev) => [...prev, name]);
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
    <>
      <div
        className={`${
          job === "supervisor" && "relative rectangle"
        } min-h-[63px]`}
      >
        <div
          onClick={recHandler}
          className="flex flex-col rectangle-parent cursor-pointer overflow-hidden rounded-2xl"
        >
          {/* if supervisor show all teacher inside */}
          <div
            style={rectangle}
            className="flex items-center gap-2 justify-center"
          >
            {job === "supervisor" &&
              data.teachers.map((t) => (
                <div key={t}>{t.toString().slice(0, 2)}</div>
              ))}
          </div>
          <div style={underline}></div>
        </div>
        {/* show teachers in that time */}
        {showDetail && (
          <TimeDetail
            data={data}
            setAdd={setAdd}
            updateData={updateData}
            students={students}
            setStudents={setStudents}
          />
        )}

        {/* form to add student in specific time */}
        {add.students.show && (
          <AddStudent
            data={data}
            addHandler={addHandler}
            add={add}
            setAdd={setAdd}
          />
        )}
        {/* form to add another teacher */}
        {add.teachers.show && (
          <AddTeacher
            data={data}
            addHandler={addHandler}
            add={add}
            setAdd={setAdd}
          />
        )}
      </div>
    </>
  );
};

export default Rectangle;
