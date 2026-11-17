function Betwen() {
  return (
    <div className="max-w-5xl mx-auto my-16 px-6 flex items-center justify-center">
      <div className="w-full relative flex items-center justify-center">
        {/* Line Gradient */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-stone-200"></div>
        </div>
        {/* Center Dot or Accent */}
        <div className="relative bg-cream-50 px-4 flex items-center justify-center">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-600 shadow-sm"></span>
        </div>
      </div>
    </div>
  );
}

export default Betwen;