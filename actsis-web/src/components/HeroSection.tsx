"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const { scrollY } = useScroll();

  // Efeito Parallax: conforme o usuário rola, a imagem translada para cima,
  // revelando o globo terrestre e as cidades iluminadas progressivamente.
  const y = useTransform(scrollY, [0, 800], ["0%", "-28%"]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center overflow-hidden px-6 pt-24 pb-16 sm:px-12 lg:px-20 lg:pt-0"
    >
      {/* Contêiner da Imagem com Parallax Suave */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 -z-10 h-[135%] w-full will-change-transform"
      >
        <Image
          src="/images/world.jpg"
          alt="Rede de Conexões Globais Act Sistemas"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-top"
        />
      </motion.div>

      {/* Overlay de Gradiente Escuro para Legibilidade Perfeita */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-zinc-950/30"
        aria-hidden="true"
      />

      {/* Transição Inferior Gradual e Suave (Sem Linhas) */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent"
        aria-hidden="true"
      />

      {/* Conteúdo Central com Escala Reduzida e Equilibrada */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-xl sm:max-w-2xl">
          {/* Frase de Efeito com destaque em negrito e quebra forçada */}
          <h1 className="mb-4 text-lg font-light sm:text-2xl lg:text-[27px] xl:text-[30px] tracking-tight text-white leading-[1.25]">
            Aceleramos o crescimento da sua empresa com
            <br />
            <strong className="font-bold text-white">o maior ERP do Brasil</strong>
          </h1>

          {/* Subtítulo Institucional B2B */}
          <p className="mb-6 sm:mb-7 text-xs sm:text-sm lg:text-[14px] font-light text-zinc-300/90 leading-relaxed max-w-xl">
            Há mais de 15 anos atuando com excelência na implantação,
            desenvolvimento, sustentação, infraestrutura e cloud no segmento
            Protheus® Totvs®
          </p>

          {/* Botão de Ação */}
          <div>
            <Link
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#00b07b] px-5 py-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-[#00b07b]/25 transition-all duration-300 hover:bg-[#009668] hover:scale-105 active:scale-95"
            >
              <span>Fale com um Especialista</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Seta Animada Inferior (Sem o texto "explorar") */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#sobre"
          aria-label="Ir para a seção Sobre Nós"
          className="flex items-center justify-center p-2 text-zinc-400 transition-colors hover:text-[#00b07b]"
        >
          <ChevronDown className="h-6 w-6 animate-bounce text-[#00b07b]" />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
