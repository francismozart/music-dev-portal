import s from "./pretitle.module.css";

interface IPreTitle {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}

export function PreTitle({ children, className }: IPreTitle) {
  const classNames = `${s.pretitle} ${className}`;
  return <p className={classNames}>{children}</p>;
}
