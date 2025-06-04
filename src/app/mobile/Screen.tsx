import React, { use, useEffect } from "react";
import { Municipes, Options, Provinces } from "../ussd/data";
import Cookies from "js-cookie";
import axios from "axios";

interface ScreenProps {
  valuePhone: string;
  setValuePhone: React.Dispatch<React.SetStateAction<string>>;
  isCalling: boolean;
  setIsCalling: React.Dispatch<React.SetStateAction<boolean>>;
  setResponse: React.Dispatch<React.SetStateAction<boolean>>;
  setBack: React.Dispatch<React.SetStateAction<boolean>>;
  back: boolean;
  response: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  isSelected: boolean;
}

const AnswerScreenOp: React.FC<{
  value: string;
  range: number[];
  isCalling: boolean;
  setIsCalling: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ value, isCalling, setIsCalling, range }) => {
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (value !== "*42#") {
  //       setIsCalling(false);
  //     }
  //   }, 1000);

  //   return () => clearTimeout(timeout);
  // }, [value, isCalling, setIsCalling]);

  return (
    <div className="flex overflow-hidden flex-col relative h-full justify-end items-end">
      {/* {value && value !== "*42#" && isCalling && (
          <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)]">
            <div className="absolute w-[90%] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 px-5 py-3 rounded-md bg-white">
              <p className="text-[13px] font-medium">Código USSD Inválido.</p>
            </div>
          </div>
        )} */}
      <p className="text-black text-5xl font-semibold">{value}</p>
    </div>
  );
};

const ResponseComponent: React.FC<{
  isFinal?: boolean;
}> = ({ isFinal = false }) => {
  return (
    <footer className="flex px-2 bg-zinc-100 py-1 items-center justify-between">
      <p className="text-black text-[14px] font-medium">
        {isFinal ? "Enviar" : "Responder"}
      </p>
      <p className="text-black text-[14px] font-medium">
        {isFinal ? "Cancelar" : "Voltar"}
      </p>
    </footer>
  );
};

const AnswerScreen: React.FC<{
  value: string;
  isCalling: boolean;
  setIsCalling: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ value, isCalling, setIsCalling }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value !== "*42#") {
        setIsCalling(false);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [value, isCalling, setIsCalling]);

  return (
    <div className="flex overflow-hidden flex-col relative h-full justify-end items-end">
      {value && value !== "*42#" && isCalling && (
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)]">
          <div className="absolute w-[90%] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 px-5 py-3 rounded-md bg-white">
            <p className="text-[13px] font-medium">Código USSD Inválido.</p>
          </div>
        </div>
      )}
      <p className="text-black text-5xl font-semibold">{value}</p>
    </div>
  );
};

type Option = -1 | -2 | 0 | 1 | 11 | 111 | 1111 | 2 | 3 | 4 | 5;

const Screen: React.FC<ScreenProps> = ({
  valuePhone,
  isCalling,
  setIsCalling,
  setResponse,
  setBack,
  back,
  response,
  setValuePhone,
  setIsSelected,
  isSelected,
}) => {
  const [options, setOptions] = React.useState<Option>(0);
  const [municipeIndex, setMunicipeIndex] = React.useState<number>(0);
  const [provinceIndex, setProvinceIndex] = React.useState<number>(0);
  const [selectedProvince, setSelectedProvince] =
    React.useState<boolean>(false);
  const [stage, setStage] = React.useState<string>("initial");
  const [message, setMessage] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  console.log("Value Phone: ", valuePhone);
  console.log("Options: ", options);
  console.log("Selected Province: ", selectedProvince);
  console.log("Municipe Index: ", municipeIndex);
  console.log("Province Index: ", provinceIndex);
  console.log("Stage: ", stage);

  // useEffect(() => {
  //   Cookies.set("stage", "initial");
  // }, []);

  const sendData = React.useCallback(async () => {
    console.log("Sending data...");
    try {
      setLoading(true);
      await axios.post(
        "https://mapazzz.onrender.com/api/danger_zone/sendHelpToReport",
        {
          address:
            "Angola, " +
            Provinces[provinceIndex] +
            ", " +
            Municipes[provinceIndex][municipeIndex] +
            ", " +
            message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setLoading(false);
    } catch (error) {
      console.log("Error sending state:", error);
      setLoading(false);
    }
  }, [provinceIndex, municipeIndex, message]);

  useEffect(() => {
    // ENTRAR NAS CONFIGURAÇÕES INICIAIS
    if (isCalling && valuePhone === "*42#") {
      setOptions(1);
      setIsCalling(false);
      setResponse(false);
      setBack(false);
      setIsSelected(false);
      setValuePhone("");
    }
  }, [
    isCalling,
    valuePhone,
    setIsCalling,
    setResponse,
    setBack,
    setIsSelected,
    setValuePhone,
  ]);

  useEffect(() => {
    // SELECIONAR UMA OPÇÃO
    if (response && stage !== "report_message") {
      setOptions(5);
      setIsCalling(false);
      setBack(false);
      setIsSelected(false);
      setValuePhone("");
    }
  }, [
    response,
    setIsCalling,
    setBack,
    setIsSelected,
    setValuePhone,
    stage,
    options,
  ]);

  useEffect(() => {
    // SELECIONADA UMA DAS OPÇÕES
    if (isSelected && parseInt(valuePhone) === 1 && stage === "initial") {
      setStage("report_province");
      console.log("**************************************1");
      setOptions(11);
      setIsCalling(false);
      setResponse(false);
      setBack(false);
      setIsSelected(false);
      setValuePhone("");
    }
  }, [
    isSelected,
    valuePhone,
    setIsCalling,
    setResponse,
    setBack,
    setIsSelected,
    setValuePhone,
    selectedProvince,
    stage,
  ]);

  useEffect(() => {
    // SELECIONAR UMA OPÇÃO DE PROVÍNCIA
    if (
      isSelected &&
      parseInt(valuePhone) >= 1 &&
      parseInt(valuePhone) <= Provinces.length &&
      stage === "report_province" &&
      !selectedProvince
    ) {
      console.log("**************************************");
      setStage("report_municipe");
      setOptions(111);
      setProvinceIndex(valuePhone ? parseInt(valuePhone) - 1 : 0);
      setSelectedProvince(true);
      setIsCalling(false);
      setResponse(false);
      setBack(false);
      setIsSelected(false);
      setValuePhone("");
    }
  }, [
    response,
    setIsCalling,
    setBack,
    setIsSelected,
    setValuePhone,
    valuePhone,
    isSelected,
    setResponse,
    selectedProvince,
    stage,
  ]);

  useEffect(() => {
    // SELECIONAR UMA OPÇÃO DE MUNICÍPIO
    if (
      isSelected &&
      parseInt(valuePhone) >= 1 &&
      parseInt(valuePhone) <= Municipes[provinceIndex].length &&
      stage === "report_municipe" &&
      selectedProvince
    ) {
      setStage("report_message");
      setOptions(1111);
      setMunicipeIndex(valuePhone ? parseInt(valuePhone) - 1 : 0);
      setIsCalling(false);
      setBack(false);
      setIsSelected(false);
      setResponse(false);
      setValuePhone("");
    }
  }, [
    response,
    setIsCalling,
    setBack,
    setIsSelected,
    setValuePhone,
    valuePhone,
    isSelected,
    selectedProvince,
    provinceIndex,
    stage,
    setResponse,
  ]);

  useEffect(() => {
    if (response && options === 1111 && stage === "report_message") {
      if (message.trim() === "") {
        setError("Por favor, insira uma Descrição.");

        setTimeout(() => {
          setError("");
          setResponse(false);
        }, 1000);
        return;
      }

      if (message.length < 10 || message.length > 200) {
        setError("Descrição Inválida");
        setTimeout(() => {
          setError("");
          setResponse(false);
        }, 1000);
        return;
      }

      setStage("final");
      setOptions(-1);
      setIsCalling(false);
      setBack(false);
      setIsSelected(false);
      setValuePhone("");
      sendData();
    }
  }, [
    response,
    options,
    setIsCalling,
    setBack,
    setIsSelected,
    setValuePhone,
    stage,
    message,
    setResponse,
    sendData,
  ]);

  return (
    <div className="h-[23rem] grid grid-rows-[10%_80%_10%] w-full rounded-t-2xl rounded-b-lg bg-zinc-800">
      <header className="flex py-3 w-full items-center justify-center gap-1">
        <div className="w-3 h-3 rounded-full bg-zinc-900"></div>
        <div className="w-16 h-3 bg-zinc-900 rounded-full"></div>
      </header>

      <div className="h-full bg-white w-[92%] mx-auto mb-2 relative">
        {stage === "final" && loading && (
          <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)]">
            <div className="absolute flex items-center justify-start gap-2 w-[90%] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 px-5 py-3 rounded-md bg-white">
              <span className="loader !text-black"></span>{" "}
              <p className="text-[13px] font-medium">Enviando</p>
            </div>
          </div>
        )}

        {error.length !== 0 && (
          <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)]">
            <div className="absolute flex items-center justify-start gap-2 w-[90%] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 px-5 py-3 rounded-md bg-white">
              <p className="text-[13px] font-medium">{error}</p>
            </div>
          </div>
        )}
        {options === 1 && (
          <div className="h-full flex flex-col justify-between">
            {!response && options === 1 && (
              <header className="h-full overflow-y-auto items-center flex flex-col justify-center">
                <p className="text-black text-[14px] font-medium mb-2 text-center">
                  Escolha uma das opções abaixo:
                </p>
                {Options.map((option, index) => (
                  <p
                    key={index}
                    className="text-black select-none font-medium text-[15px] hover:text-orange-400 transition-all cursor-pointer"
                  >
                    {index + 1} - {option}
                  </p>
                ))}
              </header>
            )}

            <ResponseComponent />
          </div>
        )}

        {options === 11 && (
          <div className="h-full flex flex-col justify-between">
            <header className="h-full py-2 overflow-y-auto ">
              <p className="text-black text-[14px] font-medium mb-2 text-center">
                Escolha a província:
              </p>
              {Provinces.map((option, index) => (
                <p
                  key={index}
                  className="text-black text-center select-none font-medium text-[15px] hover:text-orange-400 transition-all cursor-pointer"
                >
                  {index + 1} - {option}
                </p>
              ))}
            </header>
            <ResponseComponent />
          </div>
        )}

        {options === 111 && (
          <div className="h-full flex flex-col justify-between">
            <header className="h-full py-2 overflow-y-auto ">
              <p className="text-black text-[14px] font-medium mb-2 text-center">
                Escolha o município:
              </p>
              {Municipes[provinceIndex].map((option, index) => (
                <p
                  key={index}
                  className="text-black text-center select-none font-medium text-[15px] hover:text-orange-400 transition-all cursor-pointer"
                >
                  {index + 1} - {option}
                </p>
              ))}
            </header>
            <ResponseComponent />
          </div>
        )}

        {options === 1111 && (
          <div className="h-full flex flex-col justify-between">
            <header className="h-full flex flex-col gap-2 py-2 overflow-y-auto ">
              <p className="text-black text-[14px] font-medium mb-2 text-center">
                {Municipes[provinceIndex][municipeIndex]
                  ? `Local: ${Provinces[provinceIndex]} - ${Municipes[provinceIndex][municipeIndex]}`
                  : "Selecione o município"}
              </p>
              <textarea
                name="desc"
                id="desc"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border p-3 font-medium text-[14px] mx-auto rounded-md"
              ></textarea>
            </header>
            <ResponseComponent isFinal={true} />
          </div>
        )}

        {options === 5 && (
          <AnswerScreenOp
            value={valuePhone}
            range={[1, 2, 3, 4]}
            isCalling={isCalling}
            setIsCalling={setIsCalling}
          />
        )}

        {options === 0 && (
          <AnswerScreen
            value={valuePhone}
            setIsCalling={setIsCalling}
            isCalling={isCalling}
          />
        )}
      </div>
      <footer className="w-full">
        <p className="text-center pb-2 text-white text-lg font-semibold">
          Salonis
        </p>
      </footer>
    </div>
  );
};

export default Screen;
