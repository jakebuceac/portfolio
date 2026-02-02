import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, type = 'button', ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      {...rest}
      className={clsx(
        'px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500',
        'hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        className || 'bg-orange-600 text-white hover:bg-orange-700 shadow-sm hover:shadow-md',
      )}
    >
      {children}
    </button>
  );
}