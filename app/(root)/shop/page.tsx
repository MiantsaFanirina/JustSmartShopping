import {Pagination} from "@/components/shop/pagination";
import {FilterSidebar} from "@/components/shop/filterSidebar";

export default function Home() {
    return (
        <div className="bg-base-100">
            <div className="flex flex-col md:flex-row">
                <FilterSidebar />
                <main className="flex-1 p-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {/* Add your product cards here */}
                        <div className="skeleton h-48 w-full rounded-box"/>
                        <div className="skeleton h-48 w-full rounded-box"/>
                        <div className="skeleton h-48 w-full rounded-box"/>
                        <div className="skeleton h-48 w-full rounded-box"/>
                        <div className="skeleton h-48 w-full rounded-box"/>
                        <div className="skeleton h-48 w-full rounded-box"/>
                        <div className="skeleton h-48 w-full rounded-box"/>
                        <div className="skeleton h-48 w-full rounded-box"/>
                        <div className="skeleton h-48 w-full rounded-box"/>
                        <div className="skeleton h-48 w-full rounded-box"/>
                        <div className="skeleton h-48 w-full rounded-box"/>
                        <div className="skeleton h-48 w-full rounded-box"/>

                    </div>
                    <Pagination/>
                </main>
            </div>
        </div>
    );
}