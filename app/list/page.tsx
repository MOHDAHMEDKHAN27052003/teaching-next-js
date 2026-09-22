export default function List() {
    const cars = [
        { id: 1001, brand: 'Ford' },
        { id: 1002, brand: 'BMW' },
        { id: 1003, brand: 'Audi' }
    ];

    return (
        <>
            <div>
                <main className="flex items-center justify-center h-screen">
                    <div>
                        <h1>My Cars:</h1>
                        <ul>
                            {cars.map((car) => <li key={car.id}>I am a {car.brand} car</li>)}
                        </ul>
                    </div>
                </main>
            </div>
        </>
    )
}