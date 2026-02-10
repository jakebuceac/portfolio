import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  download?: boolean | string;
}

export function Button({ children, className, type = 'button', href, download, ...rest }: ButtonProps) {
  const classes = clsx(
    'px-5 py-2.5 rounded-lg font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500',
    'hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
    className || 'bg-orange-600 text-white hover:bg-orange-700 shadow-sm hover:shadow-md',
  );

  if (href) {
    return (
      <a href={href} download={download as any} className={classes} {...(rest as any)}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      {...(rest as any)}
      className={classes}
    >
      {children}
    </button>
  );
}