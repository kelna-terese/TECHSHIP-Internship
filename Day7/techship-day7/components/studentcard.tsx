type StudentProps = {
  name: string;
  course: string;
  college: string;
  skills: string;
};

export default function StudentCard({
  name,
  course,
  college,
  skills,
}: StudentProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="font-bold text-xl">{name}</h2>

      <p>Course: {course}</p>
      <p>College: {college}</p>
      <p>Skills: {skills}</p>
    </div>
  );
}