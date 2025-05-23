import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="w-full dt:h-dvh p-5 flex items-center justify-center">
      <div className="grid grid-cols-1 dt:pt-0 pt-12 dt:grid-cols-10 dt:gap-0 gap-y-10 items-center max-w-[85rem] w-full">
        <div className="col-span-3 dt:order-1 order-2">
          <div className="grid grid-cols-1 gap-2">
            <header>
              <h3 className="text-2xl text-center pb-5 font-medium text-[#6D1625]">
                Funcionalidades
              </h3>
            </header>
            <div className="p-5 bg-white rounded-2xl border border-zinc-200">
              <header>
                <h1 className="font-medium text-[#6D1625] flex flex-col items-start gap-2 text-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler size-5 icons-tabler-outline icon-tabler-map-route"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
                    <path d="M9 12v.01" />
                    <path d="M6 13v.01" />
                    <path d="M17 15l-4 -4" />
                    <path d="M13 15l4 -4" />
                  </svg>
                  Mapa de Risco Interativo
                </h1>
              </header>
              <div>
                <p className="text-sm text-zinc-800 font-[450] mt-2">
                  O Mapa de Risco Interativo é uma funcionalidade da aplicação
                  que permite visualizar e analisar os riscos associados a
                  diferentes áreas geográficas.
                </p>
              </div>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-zinc-200">
              <header>
                <h1 className="font-medium text-[#6D1625] flex flex-col gap-2 items-start  text-md">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler size-5 icons-tabler-outline icon-tabler-notification"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 6h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M17 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    </svg>
                  </span>
                  Sistemas de Alerta & Notificações
                </h1>
              </header>
              <div>
                <p className="text-sm text-zinc-800 font-[450] mt-2">
                  O sistema de alerta e notificações é uma funcionalidade que
                  permite enviar alertas e notificações em tempo real para os
                  usuários da aplicação.
                </p>
              </div>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-zinc-200">
              <header>
                <h1 className="font-medium text-[#6D1625] flex flex-col gap-2 items-start  text-md">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler size-5 icons-tabler-outline icon-tabler-device-gamepad-2"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z" />
                      <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232" />
                      <path d="M8 9v2" />
                      <path d="M7 10h2" />
                      <path d="M14 10h2" />
                    </svg>
                  </span>
                  Gamificação educativa, privacidade & segurança
                </h1>
              </header>
              <div>
                <p className="text-sm text-zinc-800 font-[450] mt-2">
                  A gamificação educativa é uma abordagem que utiliza elementos
                  de jogos para tornar o aprendizado mais envolvente e
                  motivador. A privacidade e segurança são aspectos cruciais a
                  serem considerados na implementação de qualquer sistema.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 dt:order-2 order-1 relative flex flex-col items-center justify-center">
          <header className="text-center mb-10 absolute -top-5 dt:top-0">
            <h1 className="dt:text-5xl text-4xl leading-none pb-2 text-[#6D1625] font-medium dt:font-semibold">
              MapZzz
            </h1>
            <h2 className="text-center leading-none font-[450] text-md text-zinc-700 ">
              Desenvolvido Pela Salonis
            </h2>
          </header>
          <Image
            src={"/mockup_size.png"}
            alt="mockup image"
            width={600}
            height={900}
            className="w-[32rem] relative my-6"
          />
          <footer className="text-center gap-2 grid grid-cols-1 dt:grid-cols-2 mb-10 dt:-mt-0 -mt-14 dt:absolute bottom-0">
            <button className="bg-[#6D1625] justify-center hover:bg-[#520f1a] flex items-center gap-2 transition-all px-5 py-2 rounded-lg text-white font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler size-5 icons-tabler-outline icon-tabler-download"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <path d="M7 11l5 5l5 -5" />
                <path d="M12 4l0 12" />
              </svg>
              Download
            </button>
            <Link
              href={"/ussd"}
              className="border-[#6D1625] hover:bg-[#f5f5f5] hover:border-zinc-300 justify-center border text-[#6D1625] flex items-center gap-2 transition-all px-5 py-2 rounded-lg font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler size-5 icons-tabler-outline icon-tabler-download"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <path d="M7 11l5 5l5 -5" />
                <path d="M12 4l0 12" />
              </svg>
              Simulação USSD
            </Link>
          </footer>
        </div>
        <div className="col-span-3 dt:order-3 order-3">
          <div className="grid grid-cols-1 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-zinc-200">
              <header>
                <h1 className="font-medium text-[#6D1625] flex flex-col items-start gap-2 text-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon size-5 icon-tabler icons-tabler-outline icon-tabler-brain"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
                    <path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" />
                    <path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" />
                    <path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" />
                    <path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" />
                    <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
                  </svg>
                  Inteligência Artificial & Validações
                </h1>
              </header>
              <div>
                <p className="text-sm text-zinc-800 font-[450] mt-2">
                  Utilizamos algoritmos de inteligência artificial para analisar
                  as imagens capturadas pelas câmeras para averiguar e validar
                  caso realmente haja um risco de contaminação.
                </p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-zinc-200">
              <header>
                <h1 className="font-medium text-[#6D1625] flex flex-col gap-2 items-start  text-md">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler size-6 icons-tabler-outline icon-tabler-access-point"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12l0 .01" />
                      <path d="M14.828 9.172a4 4 0 0 1 0 5.656" />
                      <path d="M17.657 6.343a8 8 0 0 1 0 11.314" />
                      <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
                      <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
                    </svg>
                  </span>
                  Tecnologia USSD e Funcionalidades offline
                </h1>
              </header>
              <div>
                <p className="text-sm text-zinc-800 font-[450] mt-2">
                  Integramos a tecnologia USSD (Unstructured Supplementary
                  Service Data) para permitir que os usuários acessem a
                  aplicação e funcionalidades mesmo sem conexão com a internet.
                </p>
              </div>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-zinc-200">
              <header>
                <h1 className="font-medium text-[#6D1625] flex flex-col gap-2 items-start  text-md">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler size-6 icons-tabler-outline icon-tabler-api"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 13h5" />
                      <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" />
                      <path d="M20 8v8" />
                      <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />
                    </svg>
                  </span>
                  Escalabilidade, ONG & API
                </h1>
              </header>
              <div>
                <p className="text-sm text-zinc-800 font-[450] mt-2">
                  Nossa aplicação é escalável, o que significa que pode ser
                  expandida para atender a um número crescente de usuários e
                  demandas. Além disso, a aplicação pode ser integrada com
                  outras plataformas e serviços por meio de uma API.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
