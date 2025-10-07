import clsx from "clsx";
import React from "react";

export default function Card({ children, className, }: { children: React.ReactNode, className?: string;}) {
    return (
        <div
            className={clsx(
                'rounded-lg border border-gray-200 shadow p-10',
                className,
            )}
        >
            {children}
        </div>
    )
}