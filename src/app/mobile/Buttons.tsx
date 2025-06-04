import React from "react";

interface ButtonProps {
  handleButtonClick: (number: string) => void;
  handleDelete: () => void;
  setIsCalling: (isCalling: boolean) => void;
  setResponse: React.Dispatch<React.SetStateAction<boolean>>;
  setBack: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button: React.FC<{
  number: string;
  str: string;
  radius: string;
  setValue: (number: string) => void;
}> = ({ number, str, radius, setValue }) => {
  return (
    <button
      onClick={() => setValue(number)}
      className={`text-white gap-2 border-2 transition-all hover:from-zinc-700 hover:to-zinc-950 border-zinc-900 flex items-center justify-center text-[14px] font-medium px-2 py-1 bg-gradient-to-b from-zinc-600 to-zinc-900 ${radius} `}
    >
      <span className="text-xl font-medium">{number}</span>
      <span className="text-[12px]">{str}</span>
    </button>
  );
};

const Buttons: React.FC<ButtonProps> = ({
  handleButtonClick,
  handleDelete,
  setIsCalling,
  setResponse,
  setBack,
  setIsSelected,
}) => {
  return (
    <div className="h-[40%] px-2 w-full rounded-b-2xl bg-zinc-700 mt-3">
      <header className="flex items-center justify-between">
        <div className="grid grid-cols-1 rounded-xl">
          <button
            onClick={() => setResponse(true)}
            className="text-white text-[14px] font-medium px-2 py-1 bg-gradient-to-r from-zinc-600 to-zinc-900 rounded-t-xl"
          >
            MENU
          </button>
          <button
            onClick={() => setIsCalling(true)}
            className="text-white flex items-center justify-center text-[14px] font-medium px-2 py-1 bg-gradient-to-r from-zinc-600 to-zinc-900 rounded-b-xl border-t border-zinc-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon size-6 fill-green-500 stroke-green-500 rotate-[135deg] icon-tabler icons-tabler-outline icon-tabler-phone"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col  items-center justify-center">
          <div className="">
            <button className="text-white text-[14px] transition-all hover:bg-zinc-900 font-medium px-2 py-2 bg-zinc-800 rounded-t-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon size-5 icon-tabler icons-tabler-outline icon-tabler-chevron-up"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 15l6 -6l6 6" />
              </svg>
            </button>
          </div>
          <div className="flex items-center  justify-between">
            <button className="text-white text-[14px] font-medium transition-all hover:bg-zinc-900 px-2 py-2 bg-zinc-800 rounded-l-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon size-5 -rotate-90 icon-tabler icons-tabler-outline icon-tabler-chevron-up"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 15l6 -6l6 6" />
              </svg>
            </button>
            <button
              onClick={() => setIsSelected(true)}
              className="text-white text-[14px] font-medium transition-all hover:bg-zinc-900 px-2 py-2 bg-zinc-800 "
            >
              OK
            </button>
            <button className="text-white text-[14px] font-medium transition-all hover:bg-zinc-900 px-2 py-2 bg-zinc-800 rounded-r-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon size-5 rotate-90 icon-tabler icons-tabler-outline icon-tabler-chevron-up"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 15l6 -6l6 6" />
              </svg>
            </button>
          </div>
          <div className="">
            <button className="text-white text-[14px] transition-all hover:bg-zinc-900 font-medium px-2 py-2 bg-zinc-800 rounded-b-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon size-5 rotate-180 icon-tabler icons-tabler-outline icon-tabler-chevron-up"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 15l6 -6l6 6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <button
            onClick={() => {
              handleDelete();
              setBack(true);
            }}
            className="text-white text-[14px] font-medium px-2 py-1 bg-gradient-to-r from-zinc-600 to-zinc-900 rounded-t-xl"
          >
            BACK
          </button>
          <button className="text-white flex items-center justify-center text-[14px] font-medium px-2 py-1 bg-gradient-to-r from-zinc-600 to-zinc-900 rounded-b-xl border-t border-zinc-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon size-6 fill-red-500 stroke-red-500 rotate-[135deg] icon-tabler icons-tabler-outline icon-tabler-phone"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
          </button>
        </div>
      </header>
      <footer className="flex mb-2 flex-col mt-5 justify-center">
        <div className="grid grid-cols-3">
          <Button
            setValue={handleButtonClick}
            number="1"
            str="«"
            radius="rounded-tl-xl"
          />
          <Button
            setValue={handleButtonClick}
            number="2"
            str="ABC"
            radius="rounded-none"
          />
          <Button
            setValue={handleButtonClick}
            number="3"
            str="DEF"
            radius="rounded-tr-xl"
          />
          <Button
            setValue={handleButtonClick}
            number="4"
            str="GHI"
            radius="rounded-none"
          />
          <Button
            setValue={handleButtonClick}
            number="5"
            str="JKL"
            radius="rounded-none"
          />
          <Button
            setValue={handleButtonClick}
            number="6"
            str="MNO"
            radius="rounded-none"
          />
          <Button
            setValue={handleButtonClick}
            number="7"
            str="PQRS"
            radius="rounded-none"
          />
          <Button
            setValue={handleButtonClick}
            number="8"
            str="TUV"
            radius="rounded-none"
          />
          <Button
            setValue={handleButtonClick}
            number="9"
            str="WXYZ"
            radius="rounded-none"
          />
          <Button
            setValue={handleButtonClick}
            number="*"
            str="+"
            radius="rounded-bl-xl"
          />
          <Button
            setValue={handleButtonClick}
            number="0"
            str=" "
            radius="rounded-none"
          />
          <Button
            setValue={handleButtonClick}
            number="#"
            str=" "
            radius="rounded-br-xl"
          />
        </div>
      </footer>
    </div>
  );
};

export default Buttons;
