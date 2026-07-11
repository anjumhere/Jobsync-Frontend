const Hero = () => {
  return (
    <>
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
    </>
  );
};

export default Hero;
