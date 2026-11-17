"use client";
import React, { useState, useRef, useEffect } from 'react';
import { specialties, locations } from '../data/mockData';
// import { useRouter } from 'next/navigation';
// function Hero({onSearch}) {
function Hero({ onSearch }: { onSearch: (specialty: string, location: string) => void }) {
// const router = useRouter();
    const [specialtyQuery, setSpecialtyQuery] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
    const [showSpecialtyList, setShowSpecialtyList] = useState(false);

    const [locationQuery, setLocationQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState<string>('all');
    const [showLocationList, setShowLocationList] = useState(false);

    const searchContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setShowSpecialtyList(false);
                setShowLocationList(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredSpecialties = specialties.filter(item => 
        item.name.toLowerCase().includes(specialtyQuery.toLowerCase())
    );

    const filteredLocations = locations.filter(item => 
        item.name.toLowerCase().includes(locationQuery.toLowerCase())
    );

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(selectedSpecialty,selectedLocation)
        // router.push('/search');
    };
    return (
        <section className="relative  pt-60 pb-20 px-6">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                
                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 bg-stone-200/60 px-4 py-1.5 rounded-full mb-6 border border-stone-300/50">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="text-xs font-semibold text-stone-700 tracking-wide uppercase">
                        Healthcare Booking Platform in Amman
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-stone-800 leading-tight tracking-tight mb-6">
                    Find Your Best Medical Care <br className="hidden md:inline" />
                    <span className="text-stone-900">in Amman</span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-stone-600 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                    Book appointments with top-rated clinics and specialized doctors easily, instantly, and without hidden fees.
                </p>

                {/* Search Form */}
                <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
                    <div 
                    ref={searchContainerRef} 
                        className="bg-white/95 backdrop-blur-md p-3 rounded-3xl shadow-xl border border-stone-200/80 flex flex-col md:flex-row items-center gap-3 relative transition-all duration-300"
                    >
                        
                        {/* Specialty Search Input */}
                        <div className="w-full md:flex-1 relative">
                            <div className="relative flex items-center">
                                <span className="absolute left-4 text-stone-400 text-base">🩺</span>
                                <input
                                    type="text"
                                    placeholder="Select or type specialty..."
                                    value={specialtyQuery}
                                    onChange={(e) => {
                                        setSpecialtyQuery(e.target.value);
                                        setShowSpecialtyList(true);
                                        setShowLocationList(false);
                                    }}
                                    onFocus={() => {
                                        setShowSpecialtyList(true);
                                        setShowLocationList(false);
                                    }}
                                    className="w-full bg-stone-50/80 border border-stone-200/70 text-stone-800 font-medium text-sm rounded-2xl pl-11 pr-10 py-3.5 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:bg-white transition placeholder:text-stone-400"
                                />
                                <div 
                                    className="absolute right-3.5 cursor-pointer text-stone-400 hover:text-stone-600 transition-colors"
                                    onClick={() => setShowSpecialtyList(!showSpecialtyList)}
                                >
                                    <span className="text-xs">▼</span>
                                </div>
                            </div>

                            {/* Dropdown list */}
                            {showSpecialtyList && (
                                <ul className="absolute z-30 left-0 right-0 mt-2 bg-white border border-stone-200 rounded-2xl shadow-2xl max-h-56 overflow-y-auto text-left py-2">
                                    {filteredSpecialties.length > 0 ? (
                                        filteredSpecialties.map((item) => (
                                            <li
                                                key={item.id}
                                                onClick={() => {
                                                    setSpecialtyQuery(item.name === "All Specialties" ? "" : item.name);
                                                    setSelectedSpecialty(item.id);
                                                    setShowSpecialtyList(false);
                                                }}
                                                className="px-4 py-2.5 text-stone-700 text-sm hover:bg-stone-100 cursor-pointer transition-colors flex items-center justify-between"
                                            >
                                                <span>{item.name}</span>
                                                {selectedSpecialty === item.id && (
                                                    <span className="text-emerald-600 text-xs font-bold">✓</span>
                                                )}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="px-4 py-3 text-stone-400 text-sm text-center">No results found</li>
                                    )}
                                </ul>
                            )}
                        </div>

                        {/* Location Search Input */}
                        <div className="w-full md:flex-1 relative">
                            <div className="relative flex items-center">
                                <span className="absolute left-4 text-stone-400 text-base">📍</span>
                                <input
                                    type="text"
                                    placeholder="Select or type location..."
                                    value={locationQuery}
                                    onChange={(e) => {
                                        setLocationQuery(e.target.value);
                                        setShowLocationList(true);
                                        setShowSpecialtyList(false);
                                    }}
                                    onFocus={() => {
                                        setShowLocationList(true);
                                        setShowSpecialtyList(false);
                                    }}
                                    className="w-full bg-stone-50/80 border border-stone-200/70 text-stone-800 font-medium text-sm rounded-2xl pl-11 pr-10 py-3.5 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:bg-white transition placeholder:text-stone-400"
                                />
                                <div 
                                    className="absolute right-3.5 cursor-pointer text-stone-400 hover:text-stone-600 transition-colors"
                                    onClick={() => setShowLocationList(!showLocationList)}
                                >
                                    <span className="text-xs">▼</span>
                                </div>
                            </div>

                            {/* Dropdown list */}
                            {showLocationList && (
                                <ul className="absolute z-30 left-0 right-0 mt-2 bg-white border border-stone-200 rounded-2xl shadow-2xl max-h-56 overflow-y-auto text-left py-2">
                                    {filteredLocations.length > 0 ? (
                                        filteredLocations.map((loc) => (
                                            <li
                                                key={loc.id}
                                                onClick={() => {
                                                    setLocationQuery(loc.name === "All Locations" ? "" : loc.name);
                                                    setSelectedLocation(loc.id);
                                                    setShowLocationList(false);
                                                }}
                                                className="px-4 py-2.5 text-stone-700 text-sm hover:bg-stone-100 cursor-pointer transition-colors flex items-center justify-between"
                                            >
                                                <span>{loc.name}</span>
                                                {selectedLocation === loc.id && (
                                                    <span className="text-emerald-600 text-xs font-bold">✓</span>
                                                )}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="px-4 py-3 text-stone-400 text-sm text-center">No results found</li>
                                    )}
                                </ul>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit"
                            className="w-full md:w-auto px-8 py-3.5 bg-stone-800 hover:bg-stone-900 text-white font-semibold text-sm rounded-2xl transition-all shadow-md active:scale-[0.98] cursor-pointer whitespace-nowrap"
                            onClick={handleSearch}
                            
                        >
                        Search Clinic 
                        </button>

                    </div>
                </form>

            </div>
        </section>
    );
}

export default Hero;