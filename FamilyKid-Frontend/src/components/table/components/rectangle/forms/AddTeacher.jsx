const AddTeacher = ({ data, add, setAdd, addHandler }) => {
  return (
    <div className="fixed flex items-center justify-center z-50 top-0 left-0 bottom-0 h-[100vh] w-[100vw] bg-loading">
      <div className="relative p-4 gap-10 h-72 flex-col bg-white rounded-2xl flex items-center justify-center">
        <p className="max-w-[250px] text-[15px]">
          you are adding a <span className="font-bold">Teacher</span> in{" "}
          <span className="font-semibold">{data.day}</span> on{" "}
          <span className="font-semibold">{data.time}</span>
        </p>
        <form
          onSubmit={(event) => addHandler(event, add.teachers.name, "teachers")}
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
              minLength={2}
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
          className="absolute bg-red-500 top-0 right-0 rounded-se-2xl  pb-1 px-2 font-bold text-2xl text-[#fff]"
        >
          &#9587;
        </button>
      </div>
    </div>
  );
};

export default AddTeacher;
