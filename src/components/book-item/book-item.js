import React from "react";

export const BookItem = ({ number, title }) => {
  return (
    <div className="flex items-center h-[60px] bg-[#FAFAFA] border-[1px] border-[#CCCCCC] pr-[12px]">
      <div className="w-[6px] h-[100%] bg-palewhite" />
      <div className="flex flex-1 justify-between">
      <p className="w-[24px] ml-[14px]">{`${number}.`}</p>
        <div className="flex flex-1 justify-between ml-[26px]">
          <p className="sm:max-w-[500px] lg:max-w-[800px] overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]">{title}</p>
          <button className="bg-green text-white w-[74px] h-[24px] text-center rounded">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};
