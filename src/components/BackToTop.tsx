import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/30 bg-slate-900/80 text-violet-400 backdrop-blur-sm transition hover:border-violet-400 hover:text-violet-300"
                    aria-label="Voltar ao topo"
                >
                    <FiArrowUp className="text-base" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
