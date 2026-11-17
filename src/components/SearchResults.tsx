"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { doctors } from '../data/mockData'; // استيراد الدكاترة من ملف البيانات

interface SearchResultsProps {
specialty: string;
location: string;

}

const SearchResults: React.FC<SearchResultsProps> = ({ specialty,location}) => {
const router = useRouter();

  // عملية الفلترة بناءً على الـ Props المرسلة من الهيرو
    const filteredDoctors = doctors.filter((doctor) => {
    const matchSpecialty = specialty === '' || specialty.toLowerCase() === 'all' ||
    doctor.specialtyId.toLowerCase() === specialty.toLowerCase() ||
        doctor.specialtyName.toLowerCase().includes(specialty.toLowerCase())


    const matchLocation = location === '' || location.toLowerCase() === 'all' ||
    doctor.locationId.toLowerCase() === location.toLowerCase() ||
        doctor.locationName.toLowerCase().includes(location.toLowerCase())
    

    return matchSpecialty && matchLocation;
});

// const filteredDoctors = doctors.filter((doc) => {
//   // هل التخصص مطابق؟ (سواء اختار المستخدم تخصص معين أو اختار "الكل")
//     const matchesSpecialty = 
//     selectedSpecialty === "All" || doc.specialtyName === selectedSpecialty;

//   // هل المنطقة مطابقة؟ (سواء اختار المستخدم منطقة معينة أو اختار "الكل")
//     const matchesLocation = 
//     selectedLocation === "All" || doc.locationName === selectedLocation;

//   // لازم الشرطين يتحققوا مع بعض (AND)
// return matchesSpecialty && matchesLocation;
// });

return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* عنوان بسيط ومرتب */}
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-stone-800">Available Clinics</h1>
        <button
                onClick={() => router.push('/')}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 underline cursor-pointer"
        >
        ← Back to Home
        </button>
    </div>

      {/* عرض النتائج أو رسالة عدم توفر دكتور */}
        {filteredDoctors.length === 0 ? (
        <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-stone-200">
        <p className="text-stone-600 mb-4">No doctors found matching your selection.</p>
        <button
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-stone-900 text-white rounded-lg text-sm font-medium"
        >
            Change Search
        </button>
        </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
        <div key={doctor.id} className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between">
    {/* الصورة الصغيرة + الاسم والتخصص جنب بعض */}
    <div className="flex items-center gap-3.5">
        <img
        src={doctor.image}
        alt={doctor.name}
        className="w-14 h-14 rounded-full object-cover border border-stone-200 shrink-0"
        />
        <div>
        <h3 className="text-lg font-bold text-stone-900 leading-tight">{doctor.name}</h3>
        <p className="text-sm text-stone-500 mt-0.5">{doctor.specialtyName} • {doctor.locationName}</p>
    </div>
    </div>

    {/* السعر + زر الحجز */}
    <div className="mt-4 pt-3 border-t border-stone-100 flex justify-between items-center">
    <span className="text-sm font-semibold text-stone-900">{doctor.price} JOD</span>
    <button
        onClick={() => alert(`Booking with ${doctor.name}`)}
        className="px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800 transition cursor-pointer"
    >
        Book Now
    </button>
    </div>
</div>
))}
        </div>
    )}
    </div>
);
};

export default SearchResults;