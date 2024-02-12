import Image from "next/image";
import s from "./socialmedialink.module.css";

interface ISocialMediaLink {
  url: string;
  imgSrc: string;
}

export function SocialMediaLink({ url, imgSrc }: ISocialMediaLink) {
  return (
    <div className={s.socialmedialink}>
      <a href={url} target="_blank">
        <Image src={imgSrc} width={24} height={24} alt="" />
      </a>
    </div>
  );
}
