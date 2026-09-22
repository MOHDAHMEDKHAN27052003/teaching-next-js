"use client";

import { ChangeEvent, useState } from "react";

export default function SelectInput() {
    const [myCar, setMyCar] = useState("");

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        setMyCar(e.target.value);
    }

    return (
        <>
            <div>
                <main className="flex items-center justify-center min-h-screen">
                    <form>
                        <select value={myCar} onChange={handleChange}>
                            <option value="">Select car</option>
                            <option value="Ford">Ford</option>
                            <option value="Volvo">Volvo</option>
                            <option value="Fiat">Fiat</option>
                        </select>
                    </form>
                </main>
            </div>
        </>
    )
}