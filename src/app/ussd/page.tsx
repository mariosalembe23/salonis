"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import FirstSlide from "./SlidesComponents/FirstSlide";
import ProvincesSLide from "./SlidesComponents/ProvincesSlide";
import MessageSlide from "./SlidesComponents/MessageSlide";
import FinishSlide from "./SlidesComponents/FinishSlide";
import Hospitais from "./SlidesComponents/Hospitais";
import ZonasAfProps from "./SlidesComponents/ZonasAf";

interface NumberPhoneProps {
  number: number | string;
  text: string;
  addNumberFunc: (number: string) => void;
}

const NumberItem: React.FC<NumberPhoneProps> = ({ number, addNumberFunc }) => {
  return (
    <button
      onClick={() => addNumberFunc(String(number))}
      className="dt:w-14 select-none text-3xl font-medium justify-center items-center dt:h-14 h-16 w-16 flex bg-zinc-900 flex-col transition-all hover:bg-zinc-700 rounded-full border border-zinc-700 shadow-lg text-white"
    >
      {number}
    </button>
  );
};

type TypeRedirect = "first" | "second" | "third";

const ChoiceCard: React.FC<{
  setUssdAccept: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setUssdAccept }) => {
  const [numberOption, setNumberOption] = useState<string>("");
  const [numberSelected, setNumberSelected] = useState<number>(0);
  const [provinceName, setProvinceName] = useState<string>("");
  const [municipeName, setMunicipeName] = useState<string>("");
  const [typeRedirect, setTypeRedirect] = useState<TypeRedirect>("first");

  console.log(typeRedirect);

  useEffect(() => {
    if (numberSelected === 40) setUssdAccept(false);
  }, [numberSelected, setUssdAccept]);

  return (
    <div className="absolute z-30 top-0 rounded-[1.4rem] left-0 w-full h-full bg-zinc-800 ">
      <header className="flex items-center justify-center h-full w-full">
        {numberSelected === 0 && (
          <section>
            <FirstSlide
              numberOption={numberOption}
              setNumberOption={setNumberOption}
              setNumberSelected={setNumberSelected}
              setTypeRedirect={setTypeRedirect}
            />
          </section>
        )}
        {numberSelected === 1 ? (
          <section className="pt-5 w-full h-full">
            <ProvincesSLide
              numberOption={numberOption}
              setNumberOption={setNumberOption}
              setNumberSelected={setNumberSelected}
              setProvinceName={setProvinceName}
              setMunicipeName={setMunicipeName}
              typeRedirect={typeRedirect}
            />
          </section>
        ) : numberSelected === 20 ? (
          <section className="pt-5 w-full h-full">
            <ProvincesSLide
              numberOption={numberOption}
              setNumberOption={setNumberOption}
              setNumberSelected={setNumberSelected}
              setProvinceName={setProvinceName}
              setMunicipeName={setMunicipeName}
              typeRedirect={typeRedirect}
            />
          </section>
        ) : null}

        {numberSelected === 2 && (
          <MessageSlide
            provinceName={provinceName}
            municipeName={municipeName}
            setNumberSelected={setNumberSelected}
          />
        )}

        {numberSelected === 6 && (
          <Hospitais
            provinceName={provinceName}
            municipeName={municipeName}
            setNumberSelected={setNumberSelected}
          />
        )}

        {numberSelected === 30 && (
          <ZonasAfProps setNumberSelected={setNumberSelected} />
        )}

        {numberSelected === 3 && (
          <FinishSlide setNumberSelected={setNumberSelected} />
        )}
      </header>
    </div>
  );
};

export default function USSD() {
  const [valueCall, setValueCall] = useState<string>("");
  const [ussdAccept, setUssdAccept] = useState<boolean>(false);

  const addNumber = (number: string) => {
    if (valueCall.length < 6) {
      setValueCall((prev) => prev + number);
    }
  };
  const removeNumber = () => {
    if (valueCall.length > 0) {
      setValueCall((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className="flex items-center justify-center smaller:h-auto h-dvh  w-full">
      <Toaster position="bottom-center" />
      <div className="pt:max-w-[20rem] max-w-full shadow-2xl bg-zinc-500 w-full shadow-zinc-700 pt:rounded-[2rem]  dt:p-2 h-full pt:h-[40rem]">
        <div className="w-full relative  px-5 py-5 pt:pb-5 pb-16 h-full bg-zinc-800 pt:rounded-[1.4rem] flex flex-col justify-between items-center">
          {ussdAccept && <ChoiceCard setUssdAccept={setUssdAccept} />}
          <div className="flex relative z-20 w-full items-center justify-between">
            <div>
              <p className="text-white font-medium">12:50</p>
            </div>
            <div>
              <div className="w-5 h-5 bg-zinc-900 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-zinc-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex  items-center gap-0">
              <span className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler size-5 icons-tabler-outline icon-tabler-antenna-bars-5"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 18l0 -3" />
                  <path d="M10 18l0 -6" />
                  <path d="M14 18l0 -9" />
                  <path d="M18 18l0 -12" />
                </svg>
              </span>
              <span className="text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon size-6 icon-tabler icons-tabler-outline icon-tabler-battery-3"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 7h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
                  <path d="M7 10l0 4" />
                  <path d="M10 10l0 4" />
                  <path d="M13 10l0 4" />
                </svg>
              </span>
            </div>
          </div>
          <footer className="grid grid-cols-1 gap-2 mb-3">
            <header className="w-full py-5 mb-3 flex items-center justify-between">
              <div className="w-full text-center">
                {valueCall.length > 0 ? (
                  <p className="text-zinc-100 text-4xl">{valueCall}</p>
                ) : (
                  <p className="text-zinc-400 text-md">Enter USSD Code</p>
                )}
              </div>
            </header>
            <div className="gap-x-5 grid grid-cols-3">
              <NumberItem number={1} addNumberFunc={addNumber} text="" />
              <NumberItem number={2} addNumberFunc={addNumber} text="" />
              <NumberItem number={3} addNumberFunc={addNumber} text="" />
            </div>
            <div className="gap-x-5 grid grid-cols-3">
              <NumberItem number={4} addNumberFunc={addNumber} text="" />
              <NumberItem number={5} addNumberFunc={addNumber} text="" />
              <NumberItem number={6} addNumberFunc={addNumber} text="" />
            </div>
            <div className="gap-x-5 grid grid-cols-3">
              <NumberItem number={7} addNumberFunc={addNumber} text="" />
              <NumberItem number={8} addNumberFunc={addNumber} text="" />
              <NumberItem number={9} addNumberFunc={addNumber} text="" />
            </div>
            <div className="gap-x-5 grid grid-cols-3">
              <NumberItem number={"*"} addNumberFunc={addNumber} text="" />
              <NumberItem number={0} addNumberFunc={addNumber} text="" />
              <NumberItem number={"#"} addNumberFunc={addNumber} text="" />
            </div>

            <div className="gap-x-5 w-full grid grid-cols-3 mt-3">
              <Link
                href={"/"}
                className="dt:w-14 select-none h-16 w-16 dt:h-14 flex items-center justify-center bg-zinc-900 flex-col transition-all hover:bg-zinc-700 rounded-full border border-zinc-700 shadow-lg text-white"
              >
                <span className="text-3xl font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M5 12l6 6" />
                    <path d="M5 12l6 -6" />
                  </svg>
                </span>
              </Link>
              <button
                onClick={() => {
                  if (valueCall.length > 0 && valueCall === "*42#") {
                    setUssdAccept(true);
                  } else {
                    toast.error("Código Inválido ou não Registrado", {
                      classNames: {
                        toast:
                          "!text-white !bg-zinc-800 !border-zinc-700 !border-2",
                        icon: "!text-red-500",
                      },
                    });
                  }
                }}
                className="dt:w-14 w-16 h-16 dt:h-14 flex items-center justify-center transition-all hover:bg-green-500/70 bg-green-500/60 flex-col rounded-full border border-zinc-800 shadow-lg text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler size-7 icons-tabler-outline icon-tabler-phone"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
              </button>
              <button
                onClick={removeNumber}
                className="dt:w-14 w-16  self-center h-16 dt:h-14 transition-all hover:bg-red-500/70 flex items-center justify-center bg-red-500/60 flex-col rounded-full border border-zinc-800 shadow-lg text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler size-7 icons-tabler-filled icon-tabler-backspace"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 5a2 2 0 0 1 1.995 1.85l.005 .15v10a2 2 0 0 1 -1.85 1.995l-.15 .005h-11a1 1 0 0 1 -.608 -.206l-.1 -.087l-5.037 -5.04c-.809 -.904 -.847 -2.25 -.083 -3.23l.12 -.144l5 -5a1 1 0 0 1 .577 -.284l.131 -.009h11zm-7.489 4.14a1 1 0 0 0 -1.301 1.473l.083 .094l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.403 1.403l.094 -.083l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.403 -1.403l-.094 .083l-1.293 1.292l-1.293 -1.292l-.094 -.083l-.102 -.07z" />
                </svg>
              </button>
            </div>
          </footer>
        </div>
      </div>

      {/* ASSETS */}
      <aside className="fixed top-4 dt:inline-flex hidden left-1/2 -translate-x-1/2 ring-4 ring-blue-500/30 bg-blue-500 px-4 py-1.5 rounded-full">
        <p className="text-white text-[14px] font-medium">Marque *42#</p>
      </aside>
    </div>
  );
}
