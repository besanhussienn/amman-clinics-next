const steps = [
    {
        id: 1,
        number: "01",
        title: "Search Doctor or Specialty",
        description: "Find the right doctor or medical specialty you need easily."
    },
    {
        id: 2,
        number: "02",
        title: "Select Location in Amman",
        description: "Choose the clinic location nearest and most convenient for you."
    },
    {
        id: 3,
        number: "03",
        title: "Book & Confirm",
        description: "Pick a suitable time slot and confirm your appointment instantly."
    }
];

function Howwork() {
    return (
        <section className="max-w-7xl mx-auto px-6 my-24">
            {/* Section Header */}
            <div className="text-center mb-16">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 bg-stone-200/60 px-3 py-1 rounded-full">
                    Easy Steps
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight mt-3 mb-3"> 
                    How It Works
                </h2>
                <p className="text-stone-500 text-base md:text-lg max-w-xl mx-auto">
                    Simple steps to get your appointment booked seamlessly.
                </p>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step) => (
                    <div 
                        key={step.id}
                        className="group bg-white p-8 rounded-3xl shadow-sm border border-stone-200/80 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
                    >
                        {/* Step Content */}
                        <div>
                            {/* Step Number Badge */}
                            <span className="inline-flex items-center justify-center w-12 h-12 bg-stone-100 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300 text-stone-800 font-bold text-lg rounded-2xl mb-6 shadow-xs">
                                {step.number}
                            </span>

                            {/* Step Title */} 
                            <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-stone-900 transition-colors">
                                {step.title}
                            </h3>

                            {/* Step Description */}
                            <p className="text-sm text-stone-500 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Howwork;