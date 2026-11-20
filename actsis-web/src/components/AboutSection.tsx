import Image from "next/image";
import { CounterNumber } from "./CounterNumber";

interface MetricData {
  readonly value: number;
  readonly label: string;
}

const METRICS: readonly MetricData[] = [
  { value: 100, label: "Clientes" },
  { value: 300, label: "Usuários Treinados" },
  { value: 600, label: "Tickets Atendidos por Mês" },
  { value: 400, label: "Projetos Atendidos" },
  { value: 1200, label: "Horas de Suporte por Mês" },
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative w-full bg-zinc-950 py-24 sm:py-32 px-6 sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Coluna Esquerda: Textos e Métricas */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Título Principal da Seção */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
            O cliente é o centro da nossa solução
          </h2>

          {/* Subtítulo */}
          <p className="mt-4 text-sm sm:text-base font-light text-zinc-300 leading-relaxed max-w-2xl">
            Nossa equipe de especialistas está pronta para analisar os desafios da sua empresa
            e entregar a solução ideal.
          </p>

          {/* Bloco de Destaque dos Projetos */}
          <div className="mt-8 border-l-2 border-[#00b07b] pl-4">
            <h3 className="text-base sm:text-lg font-medium text-white">
              Experiência comprovada em centenas de projetos
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-light text-zinc-400">
              Atuamos de ponto a ponta, de customizações pontuais a grandes integrações.
            </p>
          </div>

          {/* Grade de Indicadores Numéricos Animados */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-zinc-900">
            {METRICS.map(({ value, label }) => (
              <CounterNumber key={label} value={value} label={label} />
            ))}
          </div>
        </div>

        {/* Coluna Direita: Imagem da Equipe */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800/80 shadow-2xl">
            <Image
              src="/images/equipe1.jpg"
              alt="Equipe de Especialistas Act Sistemas"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
            />
            {/* Gradiente sutil inferior */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
