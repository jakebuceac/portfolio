import clsx from "clsx";
import React from "react";

export default function Card({ children, className, }: { children: React.ReactNode, className?: string;}) {
    return (
        <div
            className={clsx(
                'rounded-2xl border border-orange-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm p-8',
                className,
            )}
        >
            {children}
        </div>
    )
}