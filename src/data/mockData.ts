// src/data/mockData.ts

export const specialties = [
    { id: "all", name: "All Specialties" },
    { id: "dentistry", name: "Dentistry" },
    { id: "dermatology", name: "Dermatology" },
    { id: "cardiology", name: "Cardiology" },
];

export const locations = [
    { id: "all", name: "All Locations" },
    { id: "jabal-amman", name: "Jabal Amman" },
    { id: "abdoun", name: "Abdoun" },
    { id: "sweifieh", name: "Sweifieh" },
];

export const doctors = [
{
    id: "doc-1",
    name: "Dr. Ahmed Al-Mansi",
    specialtyId: "dentistry",
    specialtyName: "Dentistry",
    locationId: "jabal-amman",
    locationName: "Jabal Amman",
    rating: 4.9,
    reviewsCount: 124,
    price: 25,
    experienceYears:"12+ Years",
    clinicAddress:",Jabal AmmanAmman",
    workingHours:"9 AM – 6 PM",
    WorkingDays: "Saturday –Thursday",
    bio:"Dr. Ahmed Al-Mansi is an experienced dentist specializing in general dentistry, cosmetic dentistry, dental implants, and preventive care. He is dedicated to providing high-quality dental treatments in a comfortable and friendly environment.",
    image:  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
},
{
    id: "doc-2",
    name: "Dr. Sarah Farhat",
    specialtyId: "dermatology",
    specialtyName: "Dermatology",
    locationId: "abdoun",
    locationName: "Abdoun",
    rating: 4.8,
    reviewsCount: 98,
    status: "Available Today",
    price: 30,
    experienceYears:"8+ Years",
    clinicAddress:"Abdoun Amman",
    workingHours:"10 AM – 6 PM",
    bio:"Dr. Sarah Ahmad is a highly skilled dermatologist specializing in skin health, acne treatment, cosmetic dermatology, and anti-aging procedures. She is dedicated to providing personalized treatment plans using modern medical techniques to help patients achieve healthy, glowing skin.",
    image: "https://images.unsplash.com/photo-1594824813573-9785b0628291?w=500",
}, {
    id: "doc-3",
    name: "Dr. Ashraf",
    specialtyId: "Dermatology",
    specialtyName: "Dermatology",
    locationId: "Sweifieh",
    locationName: "Sweifieh",
    rating: 5.0,
    reviewsCount: 156,
    experienceYears:"4+ Years",
    clinicAddress:"Sweifieh Amman",
    workingHours:"12PM - 8PM",
    price: 35,
    bio:"",
    status: "Available Today",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
},
{
    id: "doc-4",
    name: "Dr. Ahmad Farhat",
    specialtyId: "cardiology",
    specialtyName: "Cardiology",
    locationId: "Sweifieh",
    locationName: "Sweifieh",
    rating: 4,
    reviewsCount: 105,
    status: "Not Available Today",
    price: 45,
    experienceYears:"9+ Years",
    clinicAddress:"Amman Sweifieh",
    workingHours:"10AM- 10PM",
    bio: "Dr. Ahmad Farhat is a dedicated cardiologist specializing in heart diseases, cardiovascular health, hypertension, and preventive cardiac care. He focuses on accurate diagnosis and personalized treatment plans to help patients maintain a healthy heart and improve their quality of life.",
    image: "",
},

];

