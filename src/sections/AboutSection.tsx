import { motion, useInView, type Easing } from "framer-motion";
import { useRef } from "react";

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: "easeOut" as Easing },
});

const stats = [
    { value: "3+", label: "Anos de experiência" },
    { value: "End-to-End", label: "Visão de Produto" },
    { value: "100%", label: "Movido a desafios" },
];

export default function AboutSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="sobre" ref={ref} className="relative bg-slate-950 px-6 py-32">
            {/* Glow lateral */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-5xl">
                {/* Label da seção */}
                <motion.p {...fadeUp(0)} className="mb-3 text-sm font-medium tracking-widest text-violet-400 uppercase">
                    Sobre mim
                </motion.p>

                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    {/* Texto */}
                    <div className="space-y-6">
                        <motion.h2 {...fadeUp(0.1)} className="text-4xl font-extrabold text-white sm:text-5xl">
                            De Nova Prata{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                                para qualquer tela
                            </span>
                        </motion.h2>

                        <motion.p {...fadeUp(0.2)} className="text-base leading-relaxed text-slate-400">
                            Com mais de três anos de experiência transformando lógica em soluções reais, o que mais me fascina na programação é o poder de criar algo do zero para automatizar tarefas e facilitar a vida das pessoas. Minha principal força está no front-end, onde busco sempre o equilíbrio perfeito entre um visual impactante e uma usabilidade impecável. No entanto, minha bagagem sólida no back-end me permite entender e construir a aplicação de ponta a ponta. Hoje, meu principal objetivo é expandir meus horizontes além de Nova Prata, buscando desafios remotos em empresas de grande porte onde eu possa entregar valor em escala.
                        </motion.p>

                        <motion.p {...fadeUp(0.3)} className="text-base leading-relaxed text-slate-400">
                            Fora do VS Code, sou o tipo de pessoa que detesta a zona de conforto. Sou um entusiasta da tecnologia e minha mente está sempre em movimento, explorando algo novo: seja mergulhando no universo automotivo, jogando, acompanhando bons animes ou desenhando. Seja desenvolvendo um projeto paralelo nas horas vagas ou criando ideias de conteúdo, essa mesma curiosidade que me faz testar novos hobbies é o combustível que me mantém afiado e criativo para resolver problemas complexos na engenharia de software.
                        </motion.p>

                        <motion.a
                            {...fadeUp(0.4)}
                            href="#contato"
                            className="inline-block rounded-lg border border-violet-500/40 px-6 py-3 text-sm font-semibold text-violet-300 transition hover:border-violet-400 hover:text-violet-200"
                        >
                            Vamos conversar →
                        </motion.a>
                    </div>

                    {/* Card com stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as Easing }}
                        className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm"
                    >
                        {/* Placeholder foto */}
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQH_yuifbo83oQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1676634917557?e=1773878400&v=beta&t=lZmEUZBvh8O5aZYxgr93GXCPvBC_pcqp-IIXnUS7ogw"
                            alt="Pedro Gado"
                            className="mb-8 h-100 w-full rounded-xl object-cover object-top"
                        />

                        {/* Stats */}
                        <div className="grid grid-cols-3 divide-x divide-slate-800">
                            {stats.map(({ value, label }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1, ease: "easeOut" as Easing }}
                                    className="flex flex-col items-center gap-1 px-4 text-center"
                                >
                                    <span className="text-2xl font-extrabold text-violet-400">{value}</span>
                                    <span className="text-xs text-slate-500">{label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
