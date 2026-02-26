import { motion, type Easing } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: "easeOut" as Easing },
});

const socials = [
    {
        icon: FiGithub,
        label: "GitHub",
        href: "https://github.com/opedrogado",
        color: "hover:text-white hover:border-slate-500",
    },
    {
        icon: FiLinkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/pedro-henryke-gado-9b1395265",
        color: "hover:text-sky-400 hover:border-sky-500/40",
    },
    {
        icon: FiMail,
        label: "E-mail",
        href: "mailto:contato.pedrogado@gmail.com",
        color: "hover:text-violet-400 hover:border-violet-500/40",
    },
];

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const res = await fetch("https://formspree.io/f/maqdvbkn", {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" },
        });

        if (res.ok) {
            setStatus("sent");
            form.reset();
        } else {
            setStatus("error");
        }
    }

    return (
        <section id="contato" className="relative bg-slate-950 px-6 py-32">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-5xl">
                <motion.p {...fadeUp(0)} className="mb-3 text-sm font-medium tracking-widest text-violet-400 uppercase">
                    Contato
                </motion.p>

                <motion.h2 {...fadeUp(0.1)} className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
                    Vamos{" "}
                    <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                        conversar
                    </span>
                </motion.h2>

                <motion.p {...fadeUp(0.2)} className="mb-16 max-w-md text-base text-slate-400">
                    Aberto a oportunidades, freelas e projetos interessantes. Me manda uma mensagem!
                </motion.p>

                <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                    {/* Formulário */}
                    <motion.form
                        {...fadeUp(0.3)}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            <input
                                name="name"
                                type="text"
                                placeholder="Seu nome"
                                required
                                className="rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-300 placeholder-slate-600 outline-none transition focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30"
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Seu e-mail"
                                required
                                className="rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-300 placeholder-slate-600 outline-none transition focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30"
                            />
                        </div>

                        <input
                            name="subject"
                            type="text"
                            placeholder="Assunto"
                            required
                            className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-300 placeholder-slate-600 outline-none transition focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30"
                        />

                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Sua mensagem..."
                            required
                            className="w-full resize-none rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-300 placeholder-slate-600 outline-none transition focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30"
                        />

                        <button
                            type="submit"
                            disabled={status === "sending" || status === "sent"}
                            className="flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:opacity-60"
                        >
                            <FiSend className="text-base" />
                            {status === "sending" ? "Enviando..." : status === "sent" ? "Mensagem enviada!" : "Enviar mensagem"}
                        </button>

                        {status === "error" && (
                            <p className="text-sm text-red-400">Algo deu errado. Tente novamente ou me contate diretamente.</p>
                        )}
                    </motion.form>

                    {/* Links sociais */}
                    <motion.div {...fadeUp(0.4)} className="space-y-6">
                        <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                            Ou me encontre em
                        </p>

                        <div className="flex flex-col gap-3">
                            {socials.map(({ icon: Icon, label, href, color }) => (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={href.startsWith("mailto:") ? (e) => { e.preventDefault(); window.location.href = href; } : undefined}
                                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 text-slate-400 transition ${color}`}
                                >
                                    <Icon className="text-xl" />
                                    <span className="text-sm font-medium">{label}</span>
                                </a>
                            ))}
                        </div>

                        {/* Rodapé */}
                        <p className="pt-8 text-xs text-slate-600">
                            © {new Date().getFullYear()} Pedro Henryke Gado.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
