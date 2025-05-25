"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

interface MessageSlideProps {
  provinceName: string;
  municipeName: string;
  setNumberSelected: React.Dispatch<React.SetStateAction<number>>;
}

const MessageSlide: React.FC<MessageSlideProps> = ({
  provinceName,
  municipeName,
  setNumberSelected,
}) => {
  const [buttonValid, setButtonValid] = useState<boolean>(false);
  const [textDescription, setTextDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [numberOption, setNumberOption] = useState<string>("");

  useEffect(() => {
    if (textDescription.length > 0 && numberOption.length > 0) {
      setButtonValid(true);
    } else if (numberOption === "1") {
      setButtonValid(true);
    } else {
      setButtonValid(false);
    }
  }, [textDescription, numberOption]);

  const sendState = async () => {
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
      parseInt(numberOption) < 1 ||
      parseInt(numberOption) > 2 ||
      numberOption.length === 0
    ) {
      return toast.error("Por favor, insira um número entre 1 e 2.", {
        classNames: {
          toast: "!text-white !bg-zinc-800 !border-zinc-700 !border-2",
          icon: "!text-red-500",
        },
      });
    }

    if (numberOption === "1") {
      setNumberSelected(1);
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        "https://mapazzz.onrender.com/api/danger_zone/sendHelpToReport",
        {
          address:
            "Angola, " +
            provinceName +
            ", " +
            municipeName +
            ", " +
            textDescription,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Mensagem enviada com sucesso!", {
        classNames: {
          toast: "!text-white !bg-zinc-800 !border-zinc-700 !border-2",
          icon: "!text-green-500",
        },
      });
      setLoading(false);
      setNumberSelected(3);
    } catch (error) {
      console.log("Error sending state:", error);
      toast.error("Erro ao enviar a mensagem. Tente novamente.", {
        classNames: {
          toast: "!text-white !bg-zinc-800 !border-zinc-700 !border-2",
          icon: "!text-red-500",
        },
      });
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2 flex-col items-center justify-center h-full w-full">
      <section className="flex flex-col  w-full">
        <header className="flex flex-col gap-1 items-center overflow-y-auto h-full justify-center w-full">
          <h3 className="text-zinc-100 font-medium">Bairro e Referência</h3>
          <p className="text-zinc-400 font-medium text-[14px]">
            {provinceName ? provinceName : "Luanda"} |{" "}
            {municipeName ? municipeName : "Kilamba Kiaxi"}
          </p>
          <div className="flex mt-2 flex-col gap-2">
            <button
              onClick={() => {
                setNumberOption(String(1));
              }}
              className="text-white select-none font-medium text-[15px] hover:text-orange-400 transition-all cursor-pointer"
            >
              1 - Voltar
            </button>
            <button
              onClick={() => {
                setNumberOption(String(2));
              }}
              className="text-white select-none font-medium text-[15px] hover:text-orange-400 transition-all cursor-pointer"
            >
              2 - Enviar
            </button>
          </div>
        </header>
        <footer className="my-3 px-6 flex flex-col justify-center">
          <textarea
            maxLength={100}
            disabled={loading}
            name="textDescription"
            onChange={(e) => setTextDescription(e.target.value)}
            value={textDescription}
            id="textDescription"
            className="bg-transparent disabled:opacity-30 border text-[14px] placeholder:text-[14px] px-4 w-full text-white outline-none transition-all font-medium focus:border-zinc-600 placeholder:text-zinc-400 border-zinc-700 py-3 rounded-lg"
            placeholder="Insira o Bairro e uma referência"
          ></textarea>
          <div className="grid grid-cols-2 mt-3 gap-2">
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
              onClick={sendState}
              disabled={!buttonValid}
              className="text-white flex items-center justify-center disabled:opacity-30 border transition-all hover:bg-zinc-950 border-zinc-700 bg-zinc-900 py-2 rounded-lg  text-[15px] font-medium"
            >
              {loading ? <span className="loader"></span> : "Confirmar"}
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default MessageSlide;
