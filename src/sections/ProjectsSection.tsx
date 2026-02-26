import { useState } from "react";
import { motion, type Easing } from "framer-motion";
import { FiGithub, FiExternalLink, FiPlay } from "react-icons/fi";
import { projects, type Project } from "../data/projects";

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: "easeOut" as Easing },
});

function VideoDialog({ videoId, onClose }: { videoId: string; onClose: () => void }) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-3xl px-4"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-8 right-4 text-slate-400 hover:text-white transition text-sm"
                >
                    ✕ Fechar
                </button>
                <div className="aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                    />
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
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

                    {/* Botão de play */}
                    {project.videoUrl && (
                        <button
                            onClick={() => setShowVideo(true)}
                            className="absolute inset-0 flex items-center justify-center cursor-pointer"
                            aria-label="Ver demonstração em vídeo"
                        >
                            <div className="flex items-center justify-center rounded-full bg-black/40 p-4 text-white/70 backdrop-blur-sm transition duration-300 hover:bg-violet-600/70 hover:text-white hover:scale-110">
                                <FiPlay className="text-2xl translate-x-0.5" />
                            </div>
                        </button>
                    )}
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
                        {project.github2 && (
                            <a
                                href={project.github2}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-sm text-slate-400 transition hover:text-violet-400"
                            >
                                <FiGithub className="text-base" />
                                Repositório 2
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

            {showVideo && project.videoUrl && (
                <VideoDialog videoId={project.videoUrl} onClose={() => setShowVideo(false)} />
            )}
        </>
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

                <div className="grid gap-6 sm:grid-cols-3">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>

                {/* Outros projetos */}
                <motion.div
                    {...fadeUp(0.3)}
                    className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 px-8 py-10 text-center"
                >
                    <FiGithub className="text-3xl text-slate-500" />
                    <p className="text-slate-400 max-w-lg text-sm leading-relaxed">
                        Além dos projetos acima, tenho diversos outros projetos menores no meu GitHub — estudos, experimentos e ferramentas que não cabem aqui, mas o código está disponível.
                    </p>
                    <a
                        href="https://github.com/opedrogado"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-violet-500/50 hover:text-violet-400"
                    >
                        <FiGithub className="text-base" />
                        Ver no GitHub
                    </a>
                </motion.div>
            </div>


        </section>
    );
}
