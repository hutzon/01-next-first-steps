export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span className="text-5xl">Hola Mundo</span>
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-2xl">Welcome to Next.js 14</span>
        <span className="text-lg">
          This is a simple example of a Next.js app.
        </span>
        <span className="text-lg">
          You can start building your app from here.
        </span>
        <span className="text-lg">Enjoy coding!</span>
      </div>
    </div>
  );
}
