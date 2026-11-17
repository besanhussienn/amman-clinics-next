'use client';
import { useSearchParams } from "next/navigation";
import SearchResults from "@/components/SearchResults";

export default function SearchPage(){
    const searchParams=useSearchParams();
    const selectedSpecialty=searchParams.get("specialty")||"";
    const selectedLocation = searchParams.get("location") || "";

    return(
        <div className="min-h-screen bg-cream-50 pt-10">
        <SearchResults
        specialty={selectedSpecialty}
        location={selectedLocation}
    />
        </div>
    )
}