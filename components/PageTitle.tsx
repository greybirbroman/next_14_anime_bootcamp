import React from 'react';

type PageTitleProps = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
  return <h2 className="text-3xl text-white font-bold">{title}</h2>;
};

export default PageTitle;
