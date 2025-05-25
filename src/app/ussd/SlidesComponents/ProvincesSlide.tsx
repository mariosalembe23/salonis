"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Municipes, Provinces } from "../data";

interface ProvincesSlideProps {
  numberOption: string;
  setNumberOption: React.Dispatch<React.SetStateAction<string>>;
  setNumberSelected: React.Dispatch<React.SetStateAction<number>>;
  setProvinceName: React.Dispatch<React.SetStateAction<string>>;
  setMunicipeName: React.Dispatch<React.SetStateAction<string>>;
}

const ProvincesSLide: React.FC<ProvincesSlideProps> = ({
  numberOption,
  setNumberOption,
  setNumberSelected,
  setMunicipeName,
  setProvinceName,
}) => {
  const [buttonValid, setButtonValid] = useState<boolean>(false);
  const [municipeIndex, setMunicipeIndex] = useState<number | null>(null);
  const [numberOptionMunicipe, setNumberOptionMunicipe] = useState<string>("");

  useEffect(() => {
    if (municipeIndex !== null && numberOptionMunicipe.length > 0) {
      setButtonValid(true);
    } else if (municipeIndex === null && numberOption.length > 0) {
      setButtonValid(true);
    } else {
      setButtonValid(false);
    }
  }, [numberOption, numberOptionMunicipe, municipeIndex]);

  const setNumber = (startOption: string, endOption: string) => {
    const numberRegex = /^[0-9]+$/;

    if (numberOption && !numberRegex.test(numberOption)) {
      return toast.error("Por favor, insira um número.", {
        classNames: {
          toast: "!text-white !bg-zinc-800 !border-zinc-700 !border-2",
          icon: "!text-red-500",
        },
      });
    }

    if (
      parseInt(numberOption) < parseInt(startOption) ||
      parseInt(numberOption) > parseInt(endOption)
    ) {
      return toast.error(
        `Por favor, insira um número entre ${startOption} e ${endOption}.`,
        {
          classNames: {
            toast: "!text-white !bg-zinc-800 !border-zinc-700 !border-2",
            icon: "!text-red-500",
          },
        }
      );
    }

    // Lógica para "Voltar" na lista de municípios
    if (
      municipeIndex !== null &&
      numberOption === String(Municipes[municipeIndex].length + 1)
    ) {
      setMunicipeIndex(null);
      setNumberOptionMunicipe("");
      return;
    }

    // Lógica para "Voltar" na lista de províncias
    if (
      numberOption === String(Provinces.length + 1) &&
      municipeIndex === null
    ) {
      setMunicipeIndex(null);
      setNumberOption("");
      return setNumberSelected(0);
    }

    // Seleção de município
    if (
      municipeIndex !== null &&
      numberOptionMunicipe === String(Municipes[municipeIndex].length + 1)
    ) {
      setNumberOptionMunicipe("");
      return setMunicipeIndex(null);
    }

    // Seleção de província
    setMunicipeIndex(parseInt(numberOption) - 1);

    if (municipeIndex === null) {
      setProvinceName(Provinces[parseInt(numberOption) - 1]);
    }
    if (municipeIndex !== null) {
      setMunicipeName(
        Municipes[municipeIndex][parseInt(numberOptionMunicipe) - 1]
      );
    }

    if (municipeIndex !== null) setNumberSelected(2);
    setNumberOption("");
  };

  return (
    <div className="flex gap-2 flex-col items-center justify-between h-full w-full">
      <div>
        <h2 className="text-zinc-300 text-[15px] font-medium">
          Selecione uma opção
        </h2>
      </div>
      <section className="h-[100%] flex flex-col justify-between smaller:overflow-y-auto w-full">
        <div className="flex flex-col gap-2 items-center overflow-y-auto h-full justify-center w-full">
          {municipeIndex === null
            ? Provinces.map((option, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => {
                      setNumberOption(String(index + 1));
                    }}
                    key={index}
                    className="text-white select-none font-medium text-[14px] hover:text-orange-400 transition-all cursor-pointer"
                  >
                    {index + 1} - {option}
                  </button>
                  {index === Provinces.length - 1 && (
                    <button
                      onClick={() => {
                        setNumberOption(String(Provinces.length + 1));
                      }}
                      className="text-white select-none font-medium text-[14px] hover:text-orange-400 transition-all cursor-pointer"
                    >
                      {Provinces.length + 1} - Voltar
                    </button>
                  )}
                </div>
              ))
            : municipeIndex !== null &&
              Array.isArray(Municipes[municipeIndex]) &&
              Municipes[municipeIndex].map((option, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => {
                      setNumberOptionMunicipe(String(index + 1));
                    }}
                    key={index}
                    className="text-white select-none font-medium text-[14px] hover:text-orange-400 transition-all cursor-pointer"
                  >
                    {index + 1} - {option}
                  </button>
                  {index === Municipes[municipeIndex].length - 1 && (
                    <button
                      onClick={() => {
                        setNumberOptionMunicipe(
                          String(Municipes[municipeIndex].length + 1)
                        );
                      }}
                      className="text-white select-none font-medium text-[14px] hover:text-orange-400 transition-all cursor-pointer"
                    >
                      {Municipes[municipeIndex].length + 1} - Voltar
                    </button>
                  )}
                </div>
              ))}
        </div>
        <footer className="my-5 px-6 grid grid-cols-2 gap-2">
          <input
            type="text"
            name="numberOption"
            onChange={(e) => {
              if (municipeIndex === null) {
                setNumberOption(e.target.value);
              } else {
                setNumberOptionMunicipe(e.target.value);
              }
            }}
            value={municipeIndex === null ? numberOption : numberOptionMunicipe}
            id="numberOption"
            className="bg-transparent border text-[15px] placeholder:text-[14px] px-4 w-full text-white outline-none transition-all font-medium focus:border-zinc-600 placeholder:text-zinc-400 border-zinc-700 py-1.5 rounded-lg"
            placeholder="Digite o número da opção"
          />
          <button
            onClick={() =>
              setNumber(
                String(municipeIndex === null ? 1 : 1),
                String(
                  municipeIndex === null
                    ? Provinces.length + 1
                    : Municipes[municipeIndex].length + 1
                )
              )
            }
            disabled={!buttonValid}
            className="text-white disabled:opacity-30 border transition-all hover:bg-zinc-950 border-zinc-700 bg-zinc-900 py-1.5 rounded-lg  text-[15px] font-medium"
          >
            Confirmar
          </button>
        </footer>
      </section>
    </div>
  );
};

export default ProvincesSLide;
