import { useEffect, useState } from "react";
import { useUpdateDataMutation } from "../../../app/apiSlice";
import { toast } from "react-toastify";

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

  // handleSearch for students
  const searchHandler = (e) => {
    setStudents(data.students.filter((s) => s.includes(e.target.value)));
  };

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

  // supervisor handler: removes teacher
  const removeTeacher = (teacherName) => {
    updateData({
      ...data,
      teachers: data.teachers.filter((t) => t !== teacherName),
    });
  };
  // supervisor handler: removes student
  const removeStudent = (studentName) => {
    updateData({
      ...data,
      students: data.students.filter((s) => s !== studentName),
    });
    setStudents((prev) => [...prev.filter((s) => s !== studentName)]);
  };

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
      <div className={job === "supervisor" && "relative rectangle"}>
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
          <div className="absolute teachers min-w-[80px] top-10 rounded-lg bg-[#f8f8f2] shadow-2xl ">
            {/* is there any teacher show it */}
            {data.teachers?.length > 0 && (
              <div>
                <p className="text-lg font-semibold">teachers</p>
                {/* divider */}
                <div className="h-[1px] bg-black divider text-center" />
                <div className="grid grid-cols-2 max-w-[133px] gap-2 py-1 mx-auto text-white/90">
                  {data.teachers?.map((t) => (
                    <div key={t} className="mx-auto">
                      <div className="bg-[#44475a] w-9 rounded-sm relative cube">
                        {t}
                        <button
                          onClick={() => removeTeacher(t)}
                          className="remove-element"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* teachers end here */}

            {/* seach students */}
            {data.students?.length >= 1 && (
              <input
                className="bg-gray-300 focus:outline-none "
                placeholder="search student"
                onChange={(e) => searchHandler(e)}
              />
            )}

            {/* showing all students */}
            {data.students?.length > 0 && (
              <div className="min-h-[150px]">
                <p className="text-lg font-semibold">students</p>
                {/* divider */}
                <div className="h-[1px] bg-black divider text-center" />{" "}
                <div className="grid grid-cols-2 max-w-[133px] gap-2 py-1 mx-auto text-white/90">
                  {students.map((s) => (
                    <div
                      key={s}
                      className="bg-[#44475a] w-9 rounded-sm relative cube mx-auto"
                    >
                      {s.toString().slice(0, 3)}
                      <button
                        onClick={() => removeStudent(s)}
                        className="remove-element"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* students end herer */}
            <div className="flex items-center gap-2 m-1">
              <button
                onClick={() =>
                  setAdd((prev) => ({
                    ...prev,
                    teachers: { ...prev.teachers, show: true },
                  }))
                }
                className="p-1 text-sm font-semibold bg-[#bd93f9] rounded-md"
              >
                add teacher
              </button>
              <button
                onClick={() =>
                  setAdd((prev) => ({
                    ...prev,
                    students: { ...prev.students, show: true },
                  }))
                }
                className="p-1 text-sm font-semibold bg-[#bd93f9] rounded-md"
              >
                add student
              </button>
            </div>
          </div>
        )}
        {add.students.show && (
          <div className="fixed flex items-center justify-center z-50 top-0 left-0 bottom-0 h-[100vh] w-[100vw] bg-loading">
            <div className="relative p-4 gap-10 h-72 flex-col bg-white rounded-2xl flex items-center justify-center">
              <p className="max-w-[250px] text-[15px]">
                you are adding a <span className="font-bold">Student</span> in{" "}
                <span className="font-semibold">{data.day}</span> on{" "}
                <span className="font-semibold">{data.time}</span>
              </p>
              <form
                onSubmit={(event) =>
                  addHandler(event, add.students.name, "students")
                }
                className="flex flex-col gap-10"
              >
                <div>
                  <label
                    htmlFor="add-teacher"
                    className="block mb-2 text-start text-sm font-medium text-gray-900"
                  >
                    Name:
                  </label>
                  <input
                    required
                    minLength={3}
                    type="text"
                    onChange={(e) =>
                      setAdd((prev) => ({
                        ...prev,
                        students: { ...prev.students, name: e.target.value },
                      }))
                    }
                    id="add-teacher"
                    className="border border-gray-500 rounded-md focus:outline-blue-600"
                  />
                </div>

                <button className="px-14 py-1 rounded-full text-white/80 font-semibold bg-[#6272a4] ">
                  ADD
                </button>
              </form>

              <button
                onClick={() => setAdd((prev) => ({ ...prev, students: false }))}
                className="absolute bg-red-200 top-0 right-0 rounded-xl pb-1 px-2 font-bold text-2xl text-[#ff5555]"
              >
                &#9587;
              </button>
            </div>
          </div>
        )}
        {/* form to add another teacher */}
        {add.teachers.show && (
          <div className="fixed flex items-center justify-center z-50 top-0 left-0 bottom-0 h-[100vh] w-[100vw] bg-loading">
            <div className="relative p-4 gap-10 h-72 flex-col bg-white rounded-2xl flex items-center justify-center">
              <p className="max-w-[250px] text-[15px]">
                you are adding a <span className="font-bold">Teacher</span> in{" "}
                <span className="font-semibold">{data.day}</span> on{" "}
                <span className="font-semibold">{data.time}</span>
              </p>
              <form
                onSubmit={(event) =>
                  addHandler(event, add.teachers.name, "teachers")
                }
                className="flex flex-col gap-10"
              >
                <div>
                  <label
                    htmlFor="add-teacher"
                    className="block mb-2 text-start text-sm font-medium text-gray-900"
                  >
                    Name:
                  </label>
                  <input
                    required
                    minLength={3}
                    onChange={(e) =>
                      setAdd((prev) => ({
                        ...prev,
                        teachers: { ...prev.teachers, name: e.target.value },
                      }))
                    }
                    type="text"
                    id="add-teacher"
                    className="border border-gray-500 rounded-md focus:outline-blue-600"
                  />
                </div>

                <button className="px-14 py-1 rounded-full text-white/80 font-semibold bg-[#6272a4] ">
                  ADD
                </button>
              </form>

              <button
                onClick={() => setAdd((prev) => ({ ...prev, teachers: false }))}
                className="absolute bg-red-200 top-0 right-0 rounded-xl pb-1 px-2 font-bold text-2xl text-[#ff5555]"
              >
                &#9587;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Rectangle;
