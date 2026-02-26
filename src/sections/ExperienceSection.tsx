import { motion, type Easing } from "framer-motion";

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: "easeOut" as Easing },
});

const experiences = [
    {
        company: "Auto Pratense",
        role: "Desenvolvedor",
        period: "2023 — Presente",
        description:
            "Responsável pela manutenção e evolução de sistemas legados em Java 7 e Oracle, garantindo a estabilidade das operações centrais da empresa. Atuei como um dos desenvolvedores principais na iniciativa de modernização tecnológica, liderando a arquitetura de uma nova plataforma Web. Utilizei um ecossistema moderno baseado em React e TypeScript para substituir processos antigos, otimizando a performance e a experiência do usuário final.",
        techs: ["Java", "React", "TypeScript", "Vite", "Oracle", "Git"],
    },
    {
        company: "Medabil",
        role: "Desenvolvedor",
        period: "2022 — 2023",
        description:
            "Atuação no ciclo completo de desenvolvimento de aplicações web, desde a concepção de interfaces com React até a integração com bancos de dados MySQL. Responsável pela criação de sistemas de gestão (CRUD) e dashboards para monitoramento de obras, garantindo a eficiência dos processos internos. Além do desenvolvimento, realizei o suporte técnico especializado, auxiliando na resolução de problemas e na melhoria da experiência do usuário.",
        techs: ["React", "JavaScript", "MySQL", "Git"],
    },
    {
        company: "Projetos Pessoais",
        description:
            "Além da minha atuação profissional diária, encaro a tecnologia como um campo de pesquisa e aprimoramento contínuo. Desenvolvo e testo aplicações web e ferramentas para otimização de rotinas utilizando React e Vanilla JavaScript, além da criação de automações e bots para Telegram com Python. Minha base prática inclui diversos projetos estruturados em Java, com código-fonte aberto no meu GitHub. Paralelamente, sou um grande entusiasta da área de Segurança da Informação, estudo Testes de Intrusão (Pentest) e Engenharia Reversa. Como parte do meu aprendizado prático, realizo exercícios iniciais de análise de vulnerabilidade e debugging de software em ambientes controlados. Essas experimentações educacionais incluem a customização de hardwares — como a instalação do Kali NetHunter Pro em dispositivos móveis e cracking de alguns programas — para compreender na prática os fundamentos de segurança e intrusão. Também atuo na produção de materiais técnicos, sendo autor de um eBook que detalha a arquitetura e configuração de Cold Wallets para Bitcoin operando sob o sistema operacional Tails.",
        techs: ["React", "JavaScript", "Java", "Python", "Assembly (x86/x64)", "x64dbg", "Ghidra", "Kali NetHunter", "Tails OS", "Git"],
    },
];

export default function ExperienceSection() {
    return (
        <section id="experiencia" className="relative bg-slate-950 px-6 py-32">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-sky-600/10 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-5xl">
                <motion.p {...fadeUp(0)} className="mb-3 text-sm font-medium tracking-widest text-violet-400 uppercase">
                    Experiência
                </motion.p>

                <motion.h2 {...fadeUp(0.1)} className="mb-16 text-4xl font-extrabold text-white sm:text-5xl">
                    Onde já{" "}
                    <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                        atuei
                    </span>
                </motion.h2>

                <div className="flex flex-col gap-6">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            {...fadeUp(0.1 + i * 0.1)}
                            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm"
                        >
                            <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                                <div>
                                    <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                                    <p className="text-sm text-violet-400">{exp.role}</p>
                                </div>
                                {exp.period && (
                                    <span className="rounded-md border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-400">
                                        {exp.period}
                                    </span>
                                )}
                            </div>

                            <p className="mb-5 text-sm leading-relaxed text-slate-400">{exp.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {exp.techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-md border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
