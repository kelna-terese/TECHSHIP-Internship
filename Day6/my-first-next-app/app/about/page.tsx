import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div>
      <Header />

      <h1>About Me</h1>

      <h3>Education</h3>
      <p>BTech Computer Science and Engineering</p>

      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Flutter</li>
      </ul>

      <h3>Interests</h3>
      <p>Web Development, Mobile App Development, UI/UX Design</p>

      <Footer />
    </div>
  );
}