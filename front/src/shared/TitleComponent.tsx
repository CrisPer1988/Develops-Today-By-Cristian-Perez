import React from "react";
interface Props {
  text: string;
  bg?: boolean;
  isTitle?: boolean;
}
const TitleComponent = ({ text, bg, isTitle }: Props) => {
  return (
    <div
      className={`z-50 ${
        bg ? "bg-slate-800 text-slate-50 p-4 rounded-md" : "none"
      }`}
    >
      <p
        className={`font-extrabold text-center ${
          isTitle ? `text-4xl` : "text-2xl"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default TitleComponent;
