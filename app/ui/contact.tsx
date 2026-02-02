'use client'

import Card from "@/app/ui/card";
import { Button } from "@/app/ui/button";
import { sendEmail, State } from "@/app/lib/actions";
import { useActionState } from "react";

export default function Contact() {
    const initialState: State = {errors: {}}
    const [state, formAction, isPending] = useActionState(sendEmail, initialState)
    const isSuccess = state.message && (!state.errors || Object.keys(state.errors).length === 0);
    
    return (
        <Card className="h-full flex flex-col">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Contact Me</h3>
            <form action={formAction} className="flex-1 flex flex-col">
                <div className="mt-5 space-y-5">
                    <div>
                        <input
                            id="name"
                            name="name"
                            placeholder="Name"
                            className="block w-full rounded-lg border-2 border-orange-200 dark:border-orange-900/30 bg-white dark:bg-slate-800 p-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
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
                            className="block w-full rounded-lg border-2 border-orange-200 dark:border-orange-900/30 bg-white dark:bg-slate-800 p-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
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
                            className="block w-full rounded-lg border-2 border-orange-200 dark:border-orange-900/30 bg-white dark:bg-slate-800 p-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
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
                <div className="flex items-center justify-between mt-auto pt-6"> 
                    <div className="text-left">
                        {isSuccess && (
                            <p className="mt-4 text-green-600 text-sm font-medium">
                                {state.message}
                            </p>
                        )}
                    </div>
                    <div className="text-right">
                        <Button type="submit" disabled={isPending}>
                            <div className="flex items-center gap-2">
                                <span>{isPending ? 'Sending...' : 'Send'}</span>
                                {isPending && (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                )}
                            </div>
                        </Button>
                    </div>
                </div>
            </form>
        </Card>
    )
}