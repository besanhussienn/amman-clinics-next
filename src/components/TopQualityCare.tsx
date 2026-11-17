function TopQualityCare() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 pb-16">
      {/* Section Header & Title */}
      <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 bg-stone-200/60 px-3 py-1 rounded-full">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight mt-3 mb-3">
          Why Choose Amman Clinics
        </h2>
        <p className="text-stone-500 text-base md:text-lg max-w-2xl mx-auto">
          We connect you with the highest standards of healthcare across Amman, ensuring a smooth and trusted booking experience.
        </p>
      </div>

      {/* Grid Layout (3 Columns with Expanded Dimensions) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* 1. Large Card: Takes 2 columns */}
        <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer md:col-span-2 h-[350px] md:h-[460px]">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
            alt="Verified Medical Quality" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Elegant Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
            <span className="text-xs font-medium uppercase tracking-wider text-emerald-400 mb-1">High Quality</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Verified Medical Quality</h3>
            <p className="text-stone-300 text-sm md:text-base max-w-lg leading-relaxed">
              Connecting you with highly qualified and trusted doctors and clinics across Amman.
            </p>
          </div>
        </div>

        {/* Column 3: Stacked 2 Cards */}
        <div className="flex flex-col gap-6 md:h-[460px] justify-between">
          
          {/* 2. Small Card 1 */}
          <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer h-[218px]">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
              alt="Instant Booking"  
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-bold mb-1">Instant & Free Booking</h3>
              <p className="text-stone-300 text-xs md:text-sm">
                Book your appointment in seconds with zero hidden fees.
              </p>
            </div>
          </div>

          {/* 3. Small Card 2 */}
          <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer h-[218px]">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
              alt="All Amman Coverage" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-bold mb-1">All-Amman Coverage</h3>
              <p className="text-stone-300 text-xs md:text-sm">
                Easily find top medical care near your area in Amman.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TopQualityCare;