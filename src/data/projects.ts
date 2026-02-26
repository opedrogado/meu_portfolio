import siteInstitucional from "../assets/projects/site_institucional.png";
import lojaDoHardware from "../assets/projects/loja_do_hardware.png";
import sistemaAP from "../assets/projects/sistemaAP.png";
import portfolio from "../assets/projects/portfolio.png";
import coldWallet from "../assets/projects/coldWallet.webp";
import botsPython from "../assets/projects/botsPython.png";

export type Project = {
    title: string;
    description: string;
    image: string;
    techs: string[];
    github?: string;
    github2?: string;
    live?: string;
    videoUrl?: string;
};

export const projects: Project[] = [
    {
        title: "Sistema gestão comercial (em desenvolvimento)",
        description: "Sistema web de gestão comercial desenvolvido para a empresa Auto Pratense. A aplicação centraliza operações de atendimento, vendas e pós-venda em uma interface moderna e responsiva. Foi desenvolvido para substituir um sistema legado em Java 7. Atuei como um dos responsáveis pela definição da stack, arquitetura de componentes, design system da interface e posteriormente, desenvolvimento das rotinas. Por motivos óbvios de direitos reservados da empresa, disponibilizarei apenas um vídeo do funcionamento.",
        image: sistemaAP,
        techs: ["React", "Vite", "Tailwind", "shadcn/ui + Radix UI", "Zustand", "Axios", "PWA", "SPA"],
        live: "https://www.youtube.com/watch?v=yHcRSbPtPsc",
        videoUrl: "yHcRSbPtPsc",
    },
    {
        title: "Site Institucional",
        description: "Site Institucional para ser usado como modelo, principalmente para estúdios de design. O site apresenta os serviços, portfólio e informações de contato da empresa.",
        image: siteInstitucional,
        techs: ["React", "Vite", "Tailwind", "Framer Motion"],
        github: "https://github.com/opedrogado/projeto_site_institucional",
        live: "https://issastudiocriativo.vercel.app/",
    },
    {
        title: "Loja do Hardware",
        description: "É uma aplicação web de e-commerce voltada para a venda de componentes de hardware para computadores, possuí catálogo de produtos (via DB), Carrinho de compras e fluxo de pagamento, cadastro e login de usuários com perfil editável, painel adm, rotas protegidas para usuários autenticados e entre outros detalhes. Desenvolvida como projeto pessoal/estudo. Para este projeto gerei o apk via TWA, para testa-lo no android também. Atualmente o DB está off.",
        image: lojaDoHardware,
        techs: ["React", "Node.js", "MySQL", "SPA"],
        github: "https://github.com/opedrogado/projeto_site_institucional",
        live: "https://loja-do-hardware.vercel.app/",
    },
    {
        title: "Este Portfólio",
        description: "Não tem muito o que dizer, é o que você já está vendo.",
        image: portfolio,
        techs: ["React", "TypeScript", "Vite", "Tailwind", "Framer Motion"],
        github: "https://github.com/opedrogado/meu_portfolio",
    },
    {
        title: "Carteira Bitcoin (Ebook)",
        description: "Guia técnico detalhado focado na implementação de uma infraestrutura de segurança robusta para Bitcoin. O projeto aborda a criação de uma cold wallet em ambiente isolado (Tails OS) via Electrum, integrada a uma estratégia de monitoramento watch-only em dispositivos móveis. Uma solução voltada para soberania financeira, mitigação de riscos de terceiros e privacidade absoluta.",
        image: coldWallet,
        techs: ["Tails OS", "Electrum"],
        live: "https://hotmart.com/pt-br/marketplace/produtos/bitcoin-como-criar-sua-cold-wallet-montar-uma-hot-wallet-no-celular-e-comprar-sem-kyc/U98392452Y?sck=HOTMART_SITE&search=8a74a902-915e-4768-8643-b4e4599ec347&hotfeature=33",
    },
    {
        title: "Bots Python (Telegram)",
        description: "Bots criados para monitoramento de grupos no Telegram, a ideia principal foi para monitorar preços de tênis em um canal de promoção, um dos bots encaminha todas mensagens recebidas no canal, para um grupo onde há meu número e outro bot, esse outro bot monitora uma palavra chave e quando detecta ela, envia uma mensagem de alerta a si mesmo.",
        image: botsPython,
        techs: ["Python", "Telegram"],
        github: "https://github.com/opedrogado/Bots_Encaminhamento_e_Alerta",
    },
];
