import { ButtonType } from "@/types/interfaces";
import { ButtonHTMLAttributes } from "react";
import Spinner from "./spinner";

type ButtonProps = {
  children?: React.ReactNode;
  buttonType?: ButtonType;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getButtonClasses = (buttonType = ButtonType.Base): string =>
  ({
    [ButtonType.Base]:
      "bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black",
    [ButtonType.Google]:
      "bg-[#4285f4] text-white hover:bg-[#357ae8] hover:text-black",
    [ButtonType.Inverted]:
      "bg-white text-black hover:bg-black hover:text-white hover:border-none",
  }[buttonType]);

export default function Button({
  children,
  buttonType,
  isLoading,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`min-w-40 w-auto min-h-[50px] tracking-[0.5px] text-base/[50px]
      py-0 px-9 uppercase font-bold cursor-pointer flex justify-center items-center 
      max-[800px]:text-[12px] max-[800px]:py-7 ${getButtonClasses(buttonType)}`}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
}
