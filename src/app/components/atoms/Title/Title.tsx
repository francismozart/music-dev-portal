import s from "./title.module.css";

interface ITitle {
  tag: "h1" | "h2" | "h3" | "h4" | "h5";
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}

export function Title({ children, tag, className }: ITitle) {
  const classNames = `${s.title} ${className}`;

  switch (tag) {
    case "h1":
      return <h1 className={classNames}>{children}</h1>;
    case "h2":
      return <h2 className={classNames}>{children}</h2>;
    case "h3":
      return <h3 className={classNames}>{children}</h3>;
    case "h4":
      return <h4 className={classNames}>{children}</h4>;
    default:
      return <h1 className={classNames}>{children}</h1>;
  }
}
