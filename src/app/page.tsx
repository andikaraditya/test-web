import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl mb-5">Hello World</h1>
      <div className="flex  gap-7">
      <Image 
      src={"./the-golden-compass.jpeg"}
      width="500"
      height="500"
      alt="The golden compass book cover"
      />
      <Image 
      src={"./the-subtle-knife.png"}
      width="500"
      height="500"
      alt="The subtle knife book cover"
      />
      <Image 
      src={"./the-amber-spyglass.jpeg"}
      width="500"
      height="500"
      alt="The amber spyglass book cover"
      />
      </div>
    </main>
  );
}
