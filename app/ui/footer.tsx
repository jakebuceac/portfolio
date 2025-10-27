export function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 bg-white text-center py-6 mt-10">
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Jake Buceac. All rights reserved.
            </p>
        </footer>
    );
}