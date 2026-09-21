import Car from "@/components/car";

export default function CarPage() {
    return (
        <>
            <div>
                <main className="flex items-center justify-center h-screen">
                    <Car />
                    <Car />
                </main>
            </div>
        </>
    );
}