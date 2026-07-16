import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>LAZ Parking</h1>
      <p className="subtitle">Front-end code review challenge.</p>
      <p>
        See <Link href="/reservations">/reservations</Link> for the component
        under review. Check the README for the task.
      </p>
    </main>
  );
}
