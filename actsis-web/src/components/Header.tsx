"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

interface SubServiceItem {
  readonly label: string;
  readonly href: string;
}

const SERVICE_ITEMS: readonly SubServiceItem[] = [
  { label: "Consultoria Protheus", href: "#protheus" },
  { label: "Integrações API", href: "#integracoes" },
  { label: "Power BI", href: "#powerbi" },
  { label: "Fábrica de Software", href: "#fabrica" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState<boolean>(false);

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpenMobile(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-zinc-950/85 via-zinc-950/40 to-transparent backdrop-blur-[2px]">
      <div className="mx-auto flex h-20 items-center justify-between px-6 lg:justify-center lg:px-8">
        {/* Barra Mobile (Logo na esquerda, hambúrguer na direita) */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
            aria-label="Act Sistemas - Voltar ao início"
          >
            <Image
              src="/images/logo-dark.png"
              alt="Act Sistemas"
              width={130}
              height={36}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Fechar navegação" : "Abrir navegação"}
            aria-expanded={isOpen}
            className="rounded-lg p-2 text-zinc-300 hover:bg-zinc-900/60 hover:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Grupo Centralizado Desktop Estilo TOTVS (Logo + Links + CTA aproximados sem vazios) */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          {/* Logo Actsis */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center shrink-0 pr-1"
            aria-label="Act Sistemas - Voltar ao início"
          >
            <Image
              src="/images/logo-dark.png"
              alt="Act Sistemas"
              width={130}
              height={36}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Links Centrais */}
          <nav
            className="flex items-center gap-6 xl:gap-7 text-[12.5px] font-light tracking-normal text-zinc-200"
            aria-label="Navegação Principal"
          >
            <Link href="#sobre" className="transition-colors hover:text-white">
              Sobre Nós
            </Link>

            {/* Dropdown Serviços */}
            <div className="relative group/dropdown">
              <button
                type="button"
                className="flex items-center gap-1.5 py-2 transition-colors hover:text-white focus:outline-none"
              >
                <span>Serviços</span>
                <ChevronDown className="h-3 w-3 text-zinc-400 transition-transform duration-200 group-hover/dropdown:rotate-180 group-hover/dropdown:text-white" />
              </button>

              <div className="invisible group-hover/dropdown:visible opacity-0 group-hover/dropdown:opacity-100 transition-all duration-200 absolute top-full left-0 mt-0.5 w-56 rounded-xl border border-zinc-800/80 bg-zinc-950/95 p-1.5 shadow-2xl backdrop-blur-md">
                {SERVICE_ITEMS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block rounded-lg px-3 py-2 text-[12px] font-light text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-[#00b07b]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="#clientes" className="transition-colors hover:text-white">
              Clientes
            </Link>

            <Link href="#contato" className="transition-colors hover:text-white">
              Contatos
            </Link>
          </nav>

          {/* Botão CTA Desktop aproximado do centro */}
          <div className="flex items-center shrink-0 pl-1">
            <Link
              href="#contato"
              className="rounded-full bg-[#00b07b] px-4 py-1.5 text-[10.5px] font-semibold uppercase tracking-wider text-white shadow-md shadow-black/40 transition-all hover:bg-[#009668] hover:scale-105 active:scale-95"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="border-b border-zinc-800 bg-zinc-950/95 px-6 pt-3 pb-6 backdrop-blur-md lg:hidden"
        >
          <nav className="flex flex-col space-y-2.5 text-sm font-light text-zinc-200" aria-label="Navegação Mobile">
            <Link href="#sobre" onClick={closeMenu} className="px-3 py-2 rounded-md hover:bg-zinc-900">
              Sobre Nós
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setIsServicesOpenMobile((prev) => !prev)}
                className="flex w-full items-center justify-between px-3 py-2 rounded-md hover:bg-zinc-900 text-left"
              >
                <span>Serviços</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isServicesOpenMobile ? "rotate-180 text-[#00b07b]" : "text-zinc-400"
                  }`}
                />
              </button>

              {isServicesOpenMobile && (
                <div className="ml-4 mt-1 flex flex-col space-y-1.5 border-l border-zinc-800 pl-3">
                  {SERVICE_ITEMS.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={closeMenu}
                      className="py-1 text-xs text-zinc-300 hover:text-[#00b07b]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="#clientes" onClick={closeMenu} className="px-3 py-2 rounded-md hover:bg-zinc-900">
              Clientes
            </Link>

            <Link href="#contato" onClick={closeMenu} className="px-3 py-2 rounded-md hover:bg-zinc-900">
              Contatos
            </Link>

            <div className="pt-2">
              <Link
                href="#contato"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-full bg-[#00b07b] px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#009668]"
              >
                Entre em Contato
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
