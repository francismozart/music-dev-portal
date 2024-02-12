import Image from "next/image";

interface ILogo {
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function Logo({
  alt,
  width = 157.16,
  height = 32,
  className,
  priority,
}: ILogo) {
  return (
    <Image
      aria-hidden="true"
      tabIndex={-1}
      className={className}
      src="/assets/images/logo-music-dev.svg"
      alt={alt}
      width={width}
      height={height}
      priority={priority}
    />
  );
}
