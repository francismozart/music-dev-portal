import Image from "next/image";
import s from "./icon.module.css";

interface IIcon {
  src: string;
  className?: string;
}

export function Icon({ src, className }: IIcon) {
  const classNames = `${s.icon} ${className}`;
  return (
    <Image
      aria-hidden="true"
      tabIndex={-1}
      width={0}
      height={0}
      className={classNames}
      src={`/assets/images/icons/${src}.svg`}
      alt=""
    />
  );
}
