'use client'

export default function Attribute() {
    const myfunc = () => {
        alert('Hello World');
    };

    return (
        <div>
            <main className="flex items-center justify-center h-screen">
                <button onClick={myfunc}>Click me</button>
            </main>
        </div>
    );
}