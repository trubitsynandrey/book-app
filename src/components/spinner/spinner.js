import React from "react";

export const Spinner = () => {
    const className = "absolute top-[80px] w-10px h-10px left-1/2 transform -translate-x-1/2"
  return (
    <div className={className}>
      <svg
        width="40"
        height="40"
        className="animate-spin"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z"
          fill="#0079B8"
        />
      </svg>
    </div>
  );
};
