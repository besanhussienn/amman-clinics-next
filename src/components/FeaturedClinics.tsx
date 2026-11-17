import { doctors } from "../data/mockData";
// const clinics = [
//   {
//     id: 1,
//     name: "Dr. Majdi",
//     specialty: "Dentist",
//     location: "Abdoun",
//     rating: 4.9,
//     reviews: 124,
//     status: "Available Today",
//     image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600"
//   },
//   {
//     id: 2,
//     name: "Dr. Asmaa",
//     specialty: "Dermatology",
//     location: "Shmeisani",
//     rating: 4.8,
//     reviews: 98,
//     status: "Available Tomorrow",
//     image: "https://images.unsplash.com/photo-1594824813572-887e5b1573c2?auto=format&fit=crop&q=80&w=600"
//   },
//   {
//     id: 3,
//     name: "Dr. Ashraf",
//     specialty: "Cardiology",
//     location: "Sweifieh",
//     rating: 5.0,
//     reviews: 156,
//     status: "Available Today",
//     image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
//   },
// ];

function FeaturedClinics() {
  return (
    <section className="max-w-7xl mx-auto px-6 my-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 bg-stone-200/60 px-3 py-1 rounded-full">
            Top Doctors
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-3 tracking-tight">
            Featured Clinics & Doctors
          </h2>
        </div>
        <p className="text-stone-500 text-sm md:text-base max-w-md mt-2 md:mt-0">
          Handpicked top-rated specialists in Amman ready to accept your appointment.
        </p>
      </div>

      {/* Grid for 3 Spaced & Elegant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctors.slice(0,3).map((clinic) => (
          <div
            key={clinic.id}
            className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Upper Section: Image Container */}
            <div className="relative h-56 overflow-hidden bg-stone-100">
              <img
                src={clinic.image}
                alt={clinic.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-80" />
              
              {/* Availability Badge */}
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-medium px-3 py-1.5 rounded-full shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {clinic.status}
              </span>

              {/* Rating Badge */}
              <span className="absolute bottom-4 right-4 bg-stone-900/80 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1">
                ★ {clinic.rating} <span className="text-stone-400 font-normal">({clinic.reviewsCount})</span>
              </span>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-stone-800 group-hover:text-stone-900 transition-colors">
                  {clinic.name}
                </h3>

                {/* Subtitle Details */}
                <div className="flex items-center gap-3 mt-3 text-sm text-stone-600">
                    <span className="bg-stone-100 px-3 py-1 rounded-md font-medium text-stone-700">
                    {clinic.specialtyId}
                    </span>
                    <span className="flex items-center gap-1 text-stone-500">
                    📍 {clinic.locationId}
                    </span>
                </div>
                </div>

              {/* Action Button */}
                <button className="w-full mt-6 py-3.5 bg-stone-800 hover:bg-stone-900 text-white rounded-2xl text-sm font-semibold transition-all shadow-md active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                Book Appointment
                </button>
            </div>
        </div>
        ))}
    </div>
    </section>
);
}

export default FeaturedClinics;