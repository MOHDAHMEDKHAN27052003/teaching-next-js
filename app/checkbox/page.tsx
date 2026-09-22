'use client';

import { useState, ChangeEvent } from 'react';

export default function SingleCheckbox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    return (
        <>
            <div>
                <main className="flex items-center justify-center h-screen">
                    <form className="w-full max-w-sm rounded-lg border p-6">
                        <label className="flex cursor-pointer items-center gap-3">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleChange}
                                className="h-5 w-5 cursor-pointer rounded border"
                            />
                            <span>Subscribe to newsletter</span>
                        </label>

                        <p className="mt-4 border-t pt-4">
                            Status:
                            <span>{isChecked ? 'Subscribed' : 'Not subscribed'}</span>
                        </p>
                    </form>
                </main>
            </div>
        </>
    );
}