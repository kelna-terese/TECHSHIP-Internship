import StudentCard from "../../components/studentcard";

export default function StudentsPage() {
  const students = [
    {
      id: 101,
      name: "John",
      course: "BCA",
      college: "ABC College",
      skills: "Java, React",
    },
    {
      id: 102,
      name: "Mary",
      course: "BSc CS",
      college: "XYZ College",
      skills: "Python, HTML",
    },
    {
      id: 103,
      name: "David",
      course: "BTech CSE",
      college: "Tech University",
      skills: "Next.js, TypeScript",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Student Listing
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            college={student.college}
            skills={student.skills}
          />
        ))}
      </div>
    </div>
  );
}