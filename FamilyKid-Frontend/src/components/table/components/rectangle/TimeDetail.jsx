import { toast } from "react-toastify";

const TimeDetail = ({ data, setAdd, updateData, students, setStudents }) => {
  // handleSearch for students
  const searchHandler = (e) => {
    setStudents(data.students.filter((s) => s.includes(e.target.value)));
  };
  //function to remove a teacher works only for supervisor
  const removeTeacher = (teacherName) => {
    updateData({
      ...data,
      teachers: data.teachers.filter((t) => t !== teacherName),
    });
    toast(`Teacher ${teacherName} has been removed`);
  };
  //function to remove a student works only for supervisor
  const removeStudent = (studentName) => {
    updateData({
      ...data,
      students: data.students.filter((s) => s !== studentName),
    });
    toast(`Student ${studentName} has been removed`);
    setStudents((prev) => [...prev.filter((s) => s !== studentName)]);
  };

  return (
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
  );
};

export default TimeDetail;
