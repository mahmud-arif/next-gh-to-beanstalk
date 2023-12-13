import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
        <h3>hi ci/cd is ready for test</h3>
        <h2>text comment pr workflow</h2>
      </div>
      <Link href="/about">About</Link>
    </main>
  );
}
