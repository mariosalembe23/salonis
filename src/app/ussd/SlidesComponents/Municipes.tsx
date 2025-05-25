"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Provinces } from "../data";

const MunicipesSlide: React.FC<{
  numberOption: string;
  setNumberOption: React.Dispatch<React.SetStateAction<string>>;
  setNumberSelected: React.Dispatch<React.SetStateAction<number>>;
}> = ({ numberOption, setNumberOption, setNumberSelected }) => {
  const [buttonValid, setButtonValid] = useState<boolean>(false);

  useEffect(() => {
    if (numberOption.length > 0) {
      setButtonValid(true);
    } else {
      setButtonValid(false);
    }
  }, [numberOption]);

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

    setNumberSelected(parseInt(numberOption));
    setNumberOption("");
  };

  return (
    <div className="flex gap-2 flex-col items-center justify-between h-full w-full">
      <div>
        <h2 className="text-zinc-300 text-[15px] font-medium">
          Selecione uma opção
        </h2>
      </div>
      <section className="h-[95%] flex flex-col justify-between smaller:overflow-y-auto w-full">
        <div className="flex flex-col gap-2 items-center overflow-y-auto h-full justify-center w-full">
          {Provinces.map((option, index) => (
            <button
              onClick={() => {
                setNumberOption(String(index + 1));
              }}
              key={index}
              className="text-white select-none font-medium text-[14px] hover:text-orange-400 transition-all cursor-pointer"
            >
              {index + 1} - {option}
            </button>
          ))}
        </div>
        <footer className="my-5 px-6 flex flex-col justify-center">
          <input
            type="text"
            name="numberOption"
            onChange={(e) => setNumberOption(e.target.value)}
            value={numberOption}
            id="numberOption"
            className="bg-transparent border text-[15px] placeholder:text-[14px] px-4 w-full text-white outline-none transition-all font-medium focus:border-zinc-600 placeholder:text-zinc-400 border-zinc-700 py-1.5 rounded-lg"
            placeholder="Digite o número da opção"
          />
          <button
            onClick={() => setNumber("1", "4")}
            disabled={!buttonValid}
            className="text-white disabled:opacity-30 border transition-all hover:bg-zinc-950 border-zinc-700 bg-zinc-900 py-1.5 rounded-lg mt-2 text-[15px] font-medium"
          >
            Confirmar
          </button>
        </footer>
      </section>
    </div>
  );
};

export default MunicipesSlide;
