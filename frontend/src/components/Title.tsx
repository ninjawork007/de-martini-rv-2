import React from "react";

interface TitleProps {
  heading: string;
  children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ heading, children }) => {
  return (
    <div
      id="title"
      className="bg-F2F4F5 flex flex-wrap justify-center items-center container-padding-x py-5 my-10"
    >
      <h2 className="mr-auto font-bold text-2xl 2xl:text-[28px]">{heading}</h2>
      {children}
    </div>
  );
};

export default Title;
