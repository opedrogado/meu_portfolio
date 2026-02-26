import { motion, type Easing } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: "easeOut" as Easing },
});

type Project = {
    title: string;
    description: string;
    image: string;
    techs: string[];
    github?: string;
    live?: string;
};

const projects: Project[] = [
    {
        title: "Sistema de Gestão Interna",
        description:
            "Plataforma web para controle de processos internos de uma empresa, reduzindo retrabalho manual e centralizando informações em tempo real.",
        image: "",
        techs: ["Java", "Spring Boot", "React", "Oracle"],
        github: "#",
        live: "#",
    },
    {
        title: "E-commerce Full-Stack",
        description:
            "Loja virtual com carrinho, autenticação JWT, painel administrativo e integração com gateway de pagamento.",
        image: "",
        techs: ["React", "TypeScript", "Spring Boot", "MySQL"],
        github: "#",
    },
    {
        title: "API REST de Agendamentos",
        description:
            "Serviço de agendamento com regras de negócio complexas, notificações por e-mail e documentação Swagger.",
        image: "",
        techs: ["Java", "Spring Boot", "MySQL", "Docker"],
        github: "#",
        live: "#",
    },
    {
        title: "Dashboard Analítico",
        description:
            "Painel de visualização de dados com gráficos interativos, filtros dinâmicos e exportação de relatórios.",
        image: "",
        techs: ["React", "TypeScript", "Tailwind"],
        github: "#",
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" as Easing }}
            whileHover={{ y: -6 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm transition-colors hover:border-violet-500/30"
        >
            {/* Imagem */}
            <div className="relative h-48 overflow-hidden bg-slate-800">
                {project.image ? (
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <span className="text-sm text-slate-600">[ Imagem do projeto ]</span>
                    </div>
                )}
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

                {/* Techs */}
                <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-md border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-400"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 border-t border-slate-800 pt-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-slate-400 transition hover:text-violet-400"
                        >
                            <FiGithub className="text-base" />
                            Repositório
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-slate-400 transition hover:text-sky-400"
                        >
                            <FiExternalLink className="text-base" />
                            Ver ao vivo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    return (
        <section id="projetos" className="relative bg-slate-950 px-6 py-32">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-5xl">
                <motion.p {...fadeUp(0)} className="mb-3 text-sm font-medium tracking-widest text-violet-400 uppercase">
                    Projetos
                </motion.p>

                <motion.h2 {...fadeUp(0.1)} className="mb-16 text-4xl font-extrabold text-white sm:text-5xl">
                    A prova{" "}
                    <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                        real
                    </span>
                </motion.h2>

                <div className="grid gap-6 sm:grid-cols-2">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
