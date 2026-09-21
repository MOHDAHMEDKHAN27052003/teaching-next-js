import Car from "@/components/car";

export type CarProps = {
    brand: string,
    model: number
}

export default function CarPage() {
    return (
        <>
            <div>
                <main className="flex items-center justify-center h-screen">
                    <Car brand="Ford" model={2026} />
                </main>
            </div>
        </>
    );
}