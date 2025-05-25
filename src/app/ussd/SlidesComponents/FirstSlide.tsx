"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Options } from "../data";

type TypeRedirect = "first" | "second" | "third";

interface FirstSlideProps {
  numberOption: string;
  setNumberOption: React.Dispatch<React.SetStateAction<string>>;
  setNumberSelected: React.Dispatch<React.SetStateAction<number>>;
  setTypeRedirect: React.Dispatch<React.SetStateAction<TypeRedirect>>;
}

const FirstSlide: React.FC<FirstSlideProps> = ({
  numberOption,
  setNumberOption,
  setNumberSelected,
  setTypeRedirect,
}) => {
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

    const parsedNumberOption = parseInt(numberOption, 10);
    setNumberSelected(
      parsedNumberOption === 2 ||
        parsedNumberOption === 3 ||
        parsedNumberOption === 4
        ? parsedNumberOption * 10
        : parsedNumberOption
    );

    if (parsedNumberOption === 1) setTypeRedirect("first");
    else if (parsedNumberOption === 20) setTypeRedirect("second");
    else if (parsedNumberOption === 30) setTypeRedirect("third");

    setNumberOption("");
  };

  return (
    <div className="flex gap-2 flex-col items-center justify-center h-full w-full">
      <div>
        <h2 className="text-zinc-300 text-[15px] font-medium">
          Selecione uma opção
        </h2>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        {Options.map((option, index) => (
          <button
            onClick={() => {
              setNumberOption(String(index + 1));
            }}
            key={index}
            className="text-white select-none font-medium text-[15px] hover:text-orange-400 transition-all cursor-pointer"
          >
            {index + 1} - {option}
          </button>
        ))}
      </div>
      <footer className="mt-5 flex flex-col justify-center">
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
    </div>
  );
};

export default FirstSlide;
