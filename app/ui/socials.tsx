import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Card from "@/app/ui/card";

export default function Socials() {
    const socials = [
        { name: "Linkedin", url: "https://www.linkedin.com/in/jake-buceac-1275ba172", icon: FaLinkedin },
        { name: "Email", url: "mailto:buceacjake@gmail.com", icon: MdEmail },
        { name: "Whatsapp", url: "https://wa.me/+447460367119", icon: FaWhatsapp },
        { name: "GitHub", url: "https://github.com/jakebuceac", icon: FaGithub },
    ]

    return (
         <Card className="h-full flex flex-col">
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">Socials</h3>
            <div className="flex-1 flex items-center">
                <div className="flex flex-row lg:flex-col gap-8 mt-5 mx-auto lg:mx-0">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded transition-colors"
                            aria-label={social.name}
                        >
                            <social.icon size={40} />
                            <span className="hidden sm:inline">{social.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </Card>
    )
}