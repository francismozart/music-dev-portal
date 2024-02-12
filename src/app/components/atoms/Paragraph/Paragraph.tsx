import s from "./paragraph.module.css";

interface IParagraph {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}

export function Paragraph({ children, className }: IParagraph) {
  const classNames = `${s.paragraph} ${className}`;
  return <p className={classNames}>{children}</p>;
}
