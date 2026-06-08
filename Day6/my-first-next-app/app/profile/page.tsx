import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Profile() {
  return (
    <div>
      <Header />

      <h1>Student Profile</h1>

      <p><strong>Name:</strong> Kelna Sebastian</p>
      <p><strong>College:</strong> AISAT</p>
      <p><strong>Course:</strong> BTech CSE</p>

      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Flutter</li>
      </ul>

      <Footer />
    </div>
  );
}