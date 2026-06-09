import StudentCard from "../components/studentcard";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">TECHSHIP Day 7</h1>

        <div className="space-x-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Heading */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold">
          Tailwind CSS Practice Page
        </h1>

        <p className="mt-2 text-gray-600">
          Activity 1 - Day 7
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">
            Card 1
          </h2>

          <p className="text-gray-600">
            This is the first card.
          </p>

          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
            View
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">
            Card 2
          </h2>

          <p className="text-gray-600">
            This is the second card.
          </p>

          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            View
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">
            Card 3
          </h2>

          <p className="text-gray-600">
            This is the third card.
          </p>

          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            View
          </button>
        </div>
      </div>

<div className="p-8">
  <h2 className="text-3xl font-bold mb-4">
    Student Profile
  </h2>

  <StudentCard
    name="Kelna"
    course="Btech"
    college="AISAT College"
    skills="Java, React"
  />
</div>
    </div>
  );
}