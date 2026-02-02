import clsx from "clsx";
import React from "react";

export default function Card({ children, className, }: { children: React.ReactNode, className?: string;}) {
    return (
        <div
            className={clsx(
                'rounded-2xl border border-orange-200 dark:border-orange-900/30 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-900 p-8',
                className,
            )}
        >
            {children}
        </div>
    )
}