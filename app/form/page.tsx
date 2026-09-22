"use client"

import { ChangeEvent, useState } from "react"

export default function Form() {
    const [name, setName] = useState("");

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    return (
        <>
            <div>
                <main className="flex items-center justify-center h-screen">
                    <form>
                        <label>
                            Enter your name:
                            <input type="text" value={name} onChange={handleChange} />
                        </label>
                        <p>{name}</p>
                    </form>
                </main>
            </div>
        </>
    )
}