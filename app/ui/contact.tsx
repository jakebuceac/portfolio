'use client'

import Card from "@/app/ui/card";
import { Button } from "@/app/ui/button";
import { sendEmail, State } from "@/app/lib/actions";
import { useActionState } from "react";

export default function Contact() {
    const initialState: State = {errors: {}}
    const [state, formAction] = useActionState(sendEmail, initialState)
    const isSuccess = state.message && (!state.errors || Object.keys(state.errors).length === 0);
    
    return (
        <Card>
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">Contact Me</h3>
            <form action={formAction}>
                <div className="mt-5 space-y-5">
                    <div>
                        <input
                            id="name"
                            name="name"
                            placeholder="Name"
                            className="block w-full rounded-md border border-gray-300 p-3 text-sm  placeholder:text-gray-500"
                            required
                            aria-describedby="name-error"
                        />
                        <div id="name-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.name && state.errors.name.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <input
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="block w-full rounded-md border border-gray-300 p-3 text-sm  placeholder:text-gray-500"
                            required
                            aria-describedby="email-error"
                        />
                        <div id="email-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.email && state.errors.email.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            className="block w-full rounded-md border border-gray-300 p-3 text-sm  placeholder:text-gray-500"
                            required
                            aria-describedby="email-error"
                        />
                        <div id="message-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.message && state.errors.message.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-6"> 
                    <div className="text-left">
                        {isSuccess && (
                            <p className="mt-4 text-green-600 text-sm font-medium">
                                {state.message}
                            </p>
                        )}
                    </div>
                    <div className="text-right">
                        <Button type="submit" className='bg-black text-white cursor-pointer'>Send</Button>
                    </div>
                </div>
            </form>
        </Card>
    )
}