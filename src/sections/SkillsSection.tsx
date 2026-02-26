import { motion, useInView, type Easing } from "framer-motion";
import { useRef } from "react";
import {
    SiReact, SiTypescript, SiJavascript, SiTailwindcss,
    SiSpring, SiMysql, SiOracle, SiGit,
    SiNodedotjs, SiCss3, SiHtml5, SiPostgresql, SiVite, SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiOpenai, SiGooglegemini } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: "easeOut" as Easing },
});

const techTags = [
    { icon: SiReact, label: "React", color: "text-sky-400" },
    { icon: SiTypescript, label: "TypeScript", color: "text-blue-400" },
    { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
    { icon: SiTailwindcss, label: "Tailwind", color: "text-cyan-400" },
    { icon: SiHtml5, label: "HTML", color: "text-orange-500" },
    { icon: SiCss3, label: "CSS", color: "text-blue-500" },
    { icon: FaJava, label: "Java", color: "text-orange-400" },
    { icon: SiSpring, label: "Spring Boot", color: "text-green-400" },
    { icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
    { icon: SiOracle, label: "Oracle", color: "text-red-400" },
    { icon: SiMysql, label: "MySQL", color: "text-blue-300" },
    { icon: SiPostgresql, label: "PostgreSQL", color: "text-sky-500" },
    { icon: SiGit, label: "Git", color: "text-orange-500" },
    { icon: SiVite, label: "Vite", color: "text-purple-400" },
    { icon: SiPython, label: "Python", color: "text-yellow-300" },
    { icon: TbApi, label: "APIs", color: "text-emerald-400" },
];

const skillBars = [
    { label: "Front-end", level: 90 },
    { label: "Back-end", level: 80 },
    { label: "DevOps / Infra", level: 70 },
    { label: "Banco de Dados", level: 60 },
];

function SkillBar({ label, level, delay }: { label: string; level: number; delay: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div ref={ref} className="space-y-2">
            <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-300">{label}</span>
                <span className="text-violet-400">{level}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1, delay, ease: "easeOut" as Easing }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-sky-400"
                />
            </div>
        </div>
    );
}

export default function SkillsSection() {
    return (
        <section id="habilidades" className="relative bg-slate-950 px-6 py-32">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-5xl">
                <motion.p {...fadeUp(0)} className="mb-3 text-sm font-medium tracking-widest text-violet-400 uppercase">
                    Habilidades
                </motion.p>

                <motion.h2 {...fadeUp(0.1)} className="mb-16 text-4xl font-extrabold text-white sm:text-5xl">
                    O meu{" "}
                    <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                        arsenal
                    </span>
                </motion.h2>

                {/* --- DESTAQUE SOBRE INTELIGÊNCIA ARTIFICIAL ATUALIZADO --- */}
                <motion.div
                    {...fadeUp(0.15)}
                    className="mb-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-2xl border border-violet-500/20 bg-slate-900/50 p-6 md:p-8 relative overflow-hidden"
                >
                    {/* Ícone de fundo (OpenAI) bem apagado para dar textura */}
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                        <SiOpenai className="text-9xl text-violet-400" />
                    </div>

                    {/* Ícone principal (Gemini) em destaque */}
                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-violet-500/20 text-violet-400 relative z-10">
                        <SiGooglegemini className="text-3xl" />
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-2">Desenvolvimento Apoiado por IA</h3>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                            Acho importante destacar o fato de que sou um grande adepto ao uso de IAs no meu dia a dia. O mercado evolui rápido, e quem não aprender a usar a inteligência artificial a seu favor acabará ficando defasado. Utilizo essas ferramentas como apoio para acelerar o desenvolvimento, debugar problemas complexos e explorar lógicas. Porém, tenho como regra inegociável: todo código gerado precisa ser rigorosamente revisado, entendido e validado pelo meu próprio senso crítico e domínio técnico da base.
                        </p>
                    </div>
                </motion.div>
                {/* --- FIM DO DESTAQUE --- */}

                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Tags de tecnologia */}
                    <div>
                        <motion.p {...fadeUp(0.15)} className="mb-6 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                            Tecnologias
                        </motion.p>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.07 } },
                            }}
                            className="flex flex-wrap gap-3"
                        >
                            {techTags.map(({ icon: Icon, label, color }) => (
                                <motion.div
                                    key={label}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8 },
                                        visible: { opacity: 1, scale: 1 },
                                    }}
                                    className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-violet-500/40 hover:text-white"
                                >
                                    <Icon className={`text-base ${color}`} />
                                    {label}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Barras de progresso */}
                    <div>
                        <motion.p {...fadeUp(0.15)} className="mb-6 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                            Nível por área
                        </motion.p>
                        <div className="space-y-6">
                            {skillBars.map(({ label, level }, i) => (
                                <SkillBar key={label} label={label} level={level} delay={0.2 + i * 0.1} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
