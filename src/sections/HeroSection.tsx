import { motion, type Easing } from "framer-motion";

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as Easing },
});

export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 text-center">
            {/* Glow de fundo */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
            </div>

            {/* Badge */}
            <motion.div {...fadeUp(0.1)}>
                <span className="mb-6 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
                    Disponível para novas oportunidades
                </span>
            </motion.div>

            {/* Nome */}
            <motion.h1
                {...fadeUp(0.25)}
                className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl"
            >
                Pedro{" "}
                <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                    Henryke
                </span>{" "}
                Gado
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
                {...fadeUp(0.4)}
                className="mt-4 text-xl font-medium text-slate-400 sm:text-2xl"
            >
                Desenvolvedor Full-Stack
            </motion.p>

            {/* Frase de efeito */}
            <motion.p
                {...fadeUp(0.55)}
                className="mt-4 max-w-md text-base text-slate-500"
            >
                Código limpo. Arquitetura escalável. Soluções reais.
            </motion.p>

            {/* Botões */}
            <motion.div {...fadeUp(0.7)} className="mt-10 flex gap-4">
                <a
                    href="#projetos"
                    className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
                >
                    Ver Projetos
                </a>
                <a
                    href="#contato"
                    className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-violet-500 hover:text-violet-300"
                >
                    Entrar em Contato
                </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-600"
            >
                <span className="text-xs tracking-widest uppercase">scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="h-4 w-0.5 rounded-full bg-slate-600"
                />
            </motion.div>
        </section>
    );
}
