import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="py-12 bg-[var(--bg-secondary)]">
            <div className="container flex flex-col items-center justify-center text-center gap-6">
                <h3 className="text-xl font-medium font-[family-name:var(--font-outfit)]">
                    Drone Perspectives
                </h3>

                <div className="flex gap-6 text-sm text-[var(--text-secondary)]">
                    <Link href="#work" className="hover:text-[var(--text-primary)] transition-colors">Work</Link>
                    <Link href="#services" className="hover:text-[var(--text-primary)] transition-colors">Services</Link>
                    <Link href="#about" className="hover:text-[var(--text-primary)] transition-colors">About</Link>
                </div>

                <p className="text-xs text-[var(--text-secondary)] mt-4">
                    © {new Date().getFullYear()} Drone Perspectives. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
