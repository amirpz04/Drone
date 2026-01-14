import { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={clsx(
                    'inline-flex items-center justify-center rounded-full transition-all duration-300 font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed',
                    {
                        'bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 hover:scale-[1.02]': variant === 'primary',
                        'bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[#eaeaec]': variant === 'secondary',
                        'border border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]': variant === 'outline',
                        'text-[var(--text-primary)] hover:text-[var(--accent)] hover:bg-[var(--bg-secondary)]': variant === 'ghost',

                        'px-4 py-2 text-sm': size === 'sm',
                        'px-6 py-3 text-base': size === 'md',
                        'px-8 py-4 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
