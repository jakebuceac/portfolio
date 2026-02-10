export function Footer() {
    return (
        <footer className="w-full border-t border-orange-200 bg-white text-center py-6 mt-10">
            <p className="text-sm text-slate-600 font-medium">
                &copy; {new Date().getFullYear()} Jake Buceac. All rights reserved.
            </p>
        </footer>
    );
}