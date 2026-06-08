import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h2>My Portfolio</h2>

      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/about">About</Link> |{" "}
        <Link href="/projects">Projects</Link> |{" "}
        <Link href="/contact">Contact</Link>
      </nav>

      <hr />
    </header>
  );
}