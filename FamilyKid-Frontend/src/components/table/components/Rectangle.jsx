import { useEffect, useRef, useState } from "react";
import { useUpdateDataMutation } from "../../../app/apiSlice";
import { toast } from "react-toastify";
import Loading from "../../LoadingScreen/LoadingScreen";

const Rectangle = ({ data, job, name, setLoading }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [students, setStudents] = useState(data.students ?? []);
  const input = useRef(null);
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
    console.log(input.current);

    return () => setShowDetail(false);
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
              <button className="p-1 text-sm font-semibold bg-[#bd93f9] rounded-md">
                add teacher
              </button>
              <button className="p-1 text-sm font-semibold bg-[#bd93f9] rounded-md">
                add student
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Rectangle;
