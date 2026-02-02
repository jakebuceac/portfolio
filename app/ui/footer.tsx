export function Footer() {
    return (
        <footer className="w-full border-t border-orange-200 dark:border-orange-900/30 bg-white dark:bg-slate-900 text-center py-6 mt-10">
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                &copy; {new Date().getFullYear()} Jake Buceac. All rights reserved.
            </p>
        </footer>
    );
}