export default function Dashboard() {
  const totalStudents = 50;
  const totalCourses = 5;
  const activeStudents = 42;

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center text-black-700 mb-8">
        Student Management Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-black">
            Total Students
          </h2>
          <p className="text-4xl text-blue-700 mt-4">
            {totalStudents}
          </p>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-black">
            Total Courses
          </h2>
          <p className="text-4xl text-green-700 mt-4">
            {totalCourses}
          </p>
        </div>

        <div className="bg-green-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-black">
            Active Students
          </h2>
          <p className="text-4xl text-yellow-700 mt-4">
            {activeStudents}
          </p>
        </div>
      </div>
    </div>
  );
}