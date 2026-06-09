export default async function StudentDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const students: Record<
    string,
    {
      name: string;
      course: string;
      email: string;
      skills: string;
    }
  > = {
    "101": {
      name: "John",
      course: "BCA",
      email: "john@gmail.com",
      skills: "Java, React",
    },
    "102": {
      name: "Mary",
      course: "BSc CS",
      email: "mary@gmail.com",
      skills: "Python, HTML",
    },
    "103": {
      name: "David",
      course: "BTech CSE",
      email: "david@gmail.com",
      skills: "Next.js, TypeScript",
    },
  };

  const student = students[id];

  if (!student) {
    return <h1>Student Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-md mx-auto bg-blue-100 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-black-700 mb-4">
          Student Details
        </h1>

        <p className="text-black">
          <strong>Name:</strong> {student.name}
        </p>

        <p className="text-black">
          <strong>Course:</strong> {student.course}
        </p>

        <p className="text-black">
          <strong>Email:</strong> {student.email}
        </p>

        <p className="text-black">
          <strong>Skills:</strong> {student.skills}
        </p>
      </div>
    </div>
  );
}