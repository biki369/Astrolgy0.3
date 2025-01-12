
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-indigo-900 text-white">
            <div className="text-2xl font-bold">Astrology</div>
            <ul className="hidden md:flex space-x-6">
                <li className="hover:text-indigo-300 cursor-pointer">Home</li>
                <li className="hover:text-indigo-300 cursor-pointer">About</li>
                <li className="hover:text-indigo-300 cursor-pointer">Services</li>
                <li className="hover:text-indigo-300 cursor-pointer">Contact</li>
            </ul>
            <div className="md:hidden">☰</div>
        </nav>
    );
};

export default Navbar;
