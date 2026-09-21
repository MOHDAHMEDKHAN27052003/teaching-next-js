export default function Ternary() {
    const x = 5;

    return (
        <>
            <div>
                <main className="flex items-center justify-center h-screen">
                    <h1>{x < 5 ? "Banana" : "Apple"}</h1>
                </main>
            </div>
        </>
    );
}