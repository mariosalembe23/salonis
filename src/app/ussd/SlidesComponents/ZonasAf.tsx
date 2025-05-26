"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

interface AffectedZonesProps {
  address: string;
  description: string;
  id: string;
  latitude: string;
  level: string;
  longitude: string;
  number_checkers: string;
  objectsFinds: string[] | null;
  photo: string;
}

const ZonasAfProps: React.FC<{
  setNumberSelected: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setNumberSelected }) => {
  const [buttonValid, setButtonValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [affectedZones, setAffectedZones] = useState<AffectedZonesProps[]>([]);
  const [numberOption, setNumberOption] = useState<string>("");

  useEffect(() => {
    if (numberOption.length > 0) {
      setButtonValid(true);
    } else {
      setButtonValid(false);
    }
  }, [numberOption]);

  const sendState = React.useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://mapazzz.onrender.com/api/hospital/most_effected",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Dados carregados com succeso", {
        classNames: {
          toast: "!text-white !bg-zinc-800 !border-zinc-700 !border-2",
          icon: "!text-green-500",
        },
      });

      setLoading(false);
      console.log(response.data.mostAffectedZones);
      setAffectedZones(response.data.mostAffectedZones);
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
  }, [setAffectedZones]);

  useEffect(() => {
    sendState();
  }, [sendState]);

  const changePage = () => {
    const numberRegex = /^[0-9]+$/;

    if (!numberRegex.test(numberOption)) {
      return toast.error("Por favor, insira um número.", {
        classNames: {
          toast: "!text-white !bg-zinc-800 !border-zinc-700 !border-2",
          icon: "!text-red-500",
        },
      });
    }

    if (numberOption !== "1") {
      return toast.error("Por favor, insira um número válido.", {
        classNames: {
          toast: "!text-white !bg-zinc-800 !border-zinc-700 !border-2",
          icon: "!text-red-500",
        },
      });
    }

    setNumberSelected(0);
  };

  return (
    <div className="flex gap-2 flex-col items-center justify-start py-5 h-full w-full">
      <section className="flex flex-col h-full justify-between w-full">
        <header className="flex flex-col gap-1 items-center pb-2  justify-start w-full">
          <h3 className="text-zinc-100 font-medium">Zonas mais Afectadas</h3>

          <button
            onClick={() => {
              setNumberOption(String(1));
            }}
            className="text-white select-none font-medium text-[14px] hover:text-orange-400 transition-all cursor-pointer"
          >
            1 - Voltar
          </button>
        </header>
        <footer className="my-0 w-full px-1 h-full overflow-y-auto flex flex-col justify-between">
          <div className="h-full overflow-y-auto">
            {loading && (
              <div className="h-full flex items-center justify-center">
                <span className="loader"></span>
              </div>
            )}
            {!loading && affectedZones.length > 0 ? (
              affectedZones.map((hospital, index) => (
                <div key={index} className="bg-zinc-800 p-3 mb-1 rounded-lg">
                  <h4 className="text-white font-medium text-[14px]">
                    {hospital.address}
                  </h4>
                  <p className="text-zinc-400 text-[12px]">
                    Nível: {hospital.level}
                  </p>
                  <p className="text-zinc-400 text-[12px]">
                    Descrição: {hospital.description}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-zinc-400 pt-7 text-[13px] px-4 font-medium text-center">
                Nenhum hospital encontrado nas proximidades.
              </p>
            )}
          </div>
          <div className="my-5 px-6 grid grid-cols-2 gap-2">
            <input
              type="text"
              name="numberOption"
              id="numberOption"
              onChange={(e) => setNumberOption(e.target.value)}
              value={numberOption}
              className="bg-transparent border text-[15px] placeholder:text-[14px] px-4 w-full text-white outline-none transition-all font-medium focus:border-zinc-600 placeholder:text-zinc-400 border-zinc-700 py-1.5 rounded-lg"
              placeholder="Digite o número da opção"
            />
            <button
              onClick={changePage}
              disabled={!buttonValid || loading}
              className="text-white disabled:opacity-30 border transition-all hover:bg-zinc-950 border-zinc-700 bg-zinc-900 py-1.5 rounded-lg  text-[15px] font-medium"
            >
              Confirmar
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default ZonasAfProps;
