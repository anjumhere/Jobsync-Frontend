export default function LandingPage() {
  return (
    // 1. w-full: Full width
    // 2. min-h-[calc(100vh-80px)]: Full screen height minus your Navbar height (change 80px to match your actual navbar height)
    // 3. relative: Crucial for absolute positioning those floating tags later
    // 4. overflow-hidden: Prevents the floating tags from causing scrollbars if they drift off-screen
    // 5. flex items-center justify-center: Centers the main "Find what's next" text

    <main className="relative border-b-3 border-red-500  w-full min-h-[calc(100vh-80px)] overflow-hidden  flex items-start pt-40 justify-center">
      {/* Your Hero text will go here */}

      <div className="flex flex-row gap-5">
        <div className="flex justify-center items-start gap-5 ">
          <h1 className="text-8xl font-bold tracking-tight flex justify-center items-center text-slate-900 z-10">
            JS
          </h1>
          <span className="text-8xl text-red-500 ">:</span>
        </div>
        <div className="border-5 border-dotted px-5 py-3 rounded-xl border-red-400">
          <h1 className="text-8xl font-bold tracking-tight text-slate-900 z-10">
            Find what's next
          </h1>
        </div>
      </div>
      {/* Your floating tags will be positioned absolutely around this container later */}
    </main>
  );
}
