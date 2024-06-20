import React from "react";

interface ArticleProps {
  children: React.ReactNode;
  className?: string;
}

export const Article: React.FC<ArticleProps> = ({ children, className }) => {
  return <article className={className}>{children}</article>;
};
