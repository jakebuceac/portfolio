import Card from "@/app/ui/card";
import { Button } from "@/app/ui/button";

export default function Contact() {
    return (
        <Card>
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">Contact Me</h3>
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
                </div>
                <div className="text-right">
                    <Button className='bg-black text-white'>Send</Button>
                </div>
            </div>
        </Card>
    )
}