"use client"

import { ChangeEvent, SubmitEvent, useState } from "react"

export default function Form() {
    const [name, setName] = useState("");

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        alert(name);
    }

    return (
        <>
            <div>
                <main className="flex items-center justify-center min-h-screen">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <label htmlFor="name">Enter your name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-2.5"
                        />

                        <button
                            className="w-full rounded-lg border px-4 py-2.5 bg-green-400 text-white"
                        >
                            Submit
                        </button>
                    </form>
                </main>
            </div>
        </>
    )
}