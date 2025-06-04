"use client";

import React, { useState } from "react";
import Buttons from "./Buttons";
import Screen from "./Screen";

export default function Mobile() {
  const [valuePhone, setValuePhone] = useState<string>("");
  const [isCalling, setIsCalling] = useState<boolean>(false);
  const [response, setResponse] = useState<boolean>(false);
  const [back, setBack] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleButtonClick = (number: string) => {
    if (valuePhone.length < 6) {
      setValuePhone((prev) => prev + number);
    }
  };

  const handleDelete = () => {
    if (valuePhone.length > 0) {
      setValuePhone((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className=" flex flex-col w-72 rounded-[1.5rem] bg-zinc-700 p-2">
        <Screen
          valuePhone={valuePhone}
          setIsCalling={setIsCalling}
          isCalling={isCalling}
          setResponse={setResponse}
          setBack={setBack}
          response={response}
          back={back}
          setValuePhone={setValuePhone}
          setIsSelected={setIsSelected}
            isSelected={isSelected}
        />
        <Buttons
          handleButtonClick={handleButtonClick}
          handleDelete={handleDelete}
          setIsCalling={setIsCalling}
          setResponse={setResponse}
          setBack={setBack}
          setIsSelected={setIsSelected}
        />
      </div>
    </div>
  );
}
