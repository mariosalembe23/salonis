"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

interface FinishSlideProps {
  setNumberSelected: React.Dispatch<React.SetStateAction<number>>;
}

const FinishSlide: React.FC<FinishSlideProps> = ({ setNumberSelected }) => {
  const [numberOption, setNumberOption] = useState<string>("");
  const [buttonValid, setButtonValid] = useState<boolean>(false);

  useEffect(() => {
    if (numberOption.length > 0) {
      setButtonValid(true);
    } else {
      setButtonValid(false);
    }
  }, [numberOption]);

  const setNumber = () => {
    const numberRegex = /^[0-9]+$/;

    if (
      !numberOption ||
      !numberRegex.test(numberOption) ||
      parseInt(numberOption) !== 1
    ) {
      return toast.error("Por favor, insira um número válido.", {
        classNames: {
          toast: "!text-white !bg-zinc-800 !border-zinc-700 !border-2",
          icon: "!text-red-500",
        },
      });
    }

    setNumberSelected(0);
    setNumberOption("");
  };

  return (
    <div className="flex gap-2 flex-col items-center justify-center h-full w-full">
      <section className="flex flex-col px-5 w-full">
        <header className="flex flex-col gap-1 items-center overflow-y-auto h-full justify-center w-full">
          <h3 className="text-zinc-100 text-center font-medium">
            Zona Cadastrada com Sucesso!
          </h3>
          <button
            onClick={() => setNumberOption("1")}
            className="text-white select-none font-medium text-[15px] hover:text-orange-400 transition-all cursor-pointer"
          >
            1 - Voltar ao Menu Principal
          </button>
        </header>
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
            onClick={() => setNumber()}
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

export default FinishSlide;
