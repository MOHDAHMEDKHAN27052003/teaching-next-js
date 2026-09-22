"use client";

import { ChangeEvent, useState } from "react";

export type FormFields = {
    firstname: string;
    lastname: string;
};

export default function MultipleInputs() {
    const [inputs, setInputs] = useState<FormFields>({
        firstname: "",
        lastname: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    return (
        <>
            <div>
                <main className="flex h-screen items-center justify-center">
                    <form className="flex w-full max-w-sm flex-col gap-5 rounded-lg border border-current p-8 shadow-sm">
                        <label className="flex flex-col gap-2 text-sm font-medium tracking-wide">
                            First name
                            <input
                                type="text"
                                name="firstname"
                                value={inputs.firstname}
                                onChange={handleChange}
                                className="rounded-md border border-current bg-transparent px-3 py-2 text-base font-normal outline-none focus:ring-2 focus:ring-current"
                            />
                        </label>

                        <label className="flex flex-col gap-2 text-sm font-medium tracking-wide">
                            Last name
                            <input
                                type="text"
                                name="lastname"
                                value={inputs.lastname}
                                onChange={handleChange}
                                className="rounded-md border border-current bg-transparent px-3 py-2 text-base font-normal outline-none focus:ring-2 focus:ring-current"
                            />
                        </label>

                        <p className="mt-2 text-sm italic opacity-80">
                            Current values: {inputs.firstname} {inputs.lastname}
                        </p>
                    </form>
                </main>
            </div>
        </>
    );
}