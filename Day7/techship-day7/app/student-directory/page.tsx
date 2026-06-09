import StudentCard from "../../components/studentcard";

export default function StudentDirectory() {
  const students = [
    {
      name: "Georgekutty",
      course: "Bcom",
      college: "KMM College",
      skills: "Accounts, Marketing",
    },
    {
      name: "Rani",
      course: "BSc Computer Science",
      college: "St.Alberts College",
      skills: "Python, HTML",
    },
    {
      name: "Anu",
      course: "BTech CSE",
      college: "BITS Pilani",
      skills: "LLM, Next.js",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center text-black-700 mb-8">
        Student Directory
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <StudentCard
            key={index}
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