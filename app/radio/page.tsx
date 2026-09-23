"use client";

import { ChangeEvent, SubmitEvent, useState } from "react";

export default function Radio() {
    const [selectedFruit, setSelectedFruit] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedFruit(e.target.value);
    };

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        alert(`Your favorite fruit is: ${selectedFruit}`);
        e.preventDefault();
    };

    return (
        <>
            <div>
                <main className="flex items-center justify-center min-h-screen">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 rounded-lg">
                        <p>Select your favorite fruit:</p>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="fruit"
                                    value="apple"
                                    onChange={handleChange}
                                    className="w-4 h-4 cursor-pointer"
                                />
                                Apple
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="fruit"
                                    value="banana"
                                    onChange={handleChange}
                                    className="w-4 h-4 cursor-pointer"
                                />
                                Banana
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="fruit"
                                    value="cherry"
                                    onChange={handleChange}
                                    className="w-4 h-4 cursor-pointer"
                                />
                                Cherry
                            </label>
                        </div>
                        <button
                            className="px-4 py-2 rounded-md border"
                        >
                            Submit
                        </button>
                    </form>
                </main>
            </div>
        </>
    )
}