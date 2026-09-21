export default function Fruit() {
    const x = 5;
    let y = "Apple";

    if (x == 5) {
        y = "Banana";
    }

    return (
        <>
            <div>
                <main className="flex items-center justify-center h-screen">
                    <p>{y}</p>
                </main>
            </div>
        </>
    );
}