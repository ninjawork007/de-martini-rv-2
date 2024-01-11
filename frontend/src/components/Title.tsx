import React from "react";

interface TitleProps {
  heading: string;
  children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ heading, children }) => {
  return (
    <div
      id="title"
      className="bg-F2F4F5 flex flex-wrap justify-center items-center px-12 md:px-28 lg:px-48 py-5 my-10"
    >
      <h2 className="mr-auto font-medium text-2xl">{heading}</h2>
      {children}
    </div>
  );
};

export default Title;
