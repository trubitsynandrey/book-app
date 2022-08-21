import React from "react";

export const Button = ({ children, type, isDisabled, handleClick, version }) => {
  const mainButtonClassNames =
    "text-white w-[74px] h-[24px] text-center rounded text-[11px] font-semibold";
const redButtonClassNames = `${mainButtonClassNames} bg-redWarning`
const greenButtonClassNames = `${mainButtonClassNames} bg-green`
const blueButtonClassNames = `${mainButtonClassNames} bg-blue`
const buttonClassName = version === "success" ? greenButtonClassNames : version === 'secondary'? blueButtonClassNames :  redButtonClassNames
  return (
    <button
      type={type}
      className={buttonClassName}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
