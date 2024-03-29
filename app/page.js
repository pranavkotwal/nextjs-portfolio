import Image from "next/image";

export default function Home() {
  console.log('I run on server')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p><a href="/about">About me </a></p>
    </main>
  );
}
