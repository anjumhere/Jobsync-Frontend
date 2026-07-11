import Hero from "./Hero";

export default function LandingPage() {
  return (
    // 1. w-full: Full width
    // 2. min-h-[calc(100vh-80px)]: Full screen height minus your Navbar height (change 80px to match your actual navbar height)
    // 3. relative: Crucial for absolute positioning those floating tags later
    // 4. overflow-hidden: Prevents the floating tags from causing scrollbars if they drift off-screen
    // 5. flex items-center justify-center: Centers the main "Find what's next" text
    <main className="relative border-b-3 border-red-500  w-full min-h-[calc(100vh-80px)] overflow-hidden  flex items-start pt-40 justify-center">
      <Hero />
    </main>
  );
}
