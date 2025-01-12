
import { motion } from 'framer-motion';
const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
            <motion.h1
                className="text-5xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Welcome to Astrology
            </motion.h1>
            <motion.p
                className="text-lg mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                Discover your future through the stars.
            </motion.p>
        </div>
    );
};

export default Home;
