import { Stack } from "@mui/material";
import SocialMediaLink from "@atoms/SocialMediaLink";
import { Social } from "@/app/types/Global";
import s from "./sociallist.module.css";

interface ISocialList {
  socialProps: Social;
}

export function SocialList({ socialProps }: ISocialList) {
  const getSocialIcon = (fileName: string) => {
    return `/assets/images/icons/${fileName}.svg`;
  };

  return (
    <Stack flexDirection={"row"} gap={"24px"} className={s.sociallist}>
      <SocialMediaLink
        url={socialProps.facebook}
        imgSrc={getSocialIcon("facebook")}
      />
      <SocialMediaLink
        url={socialProps.instagram}
        imgSrc={getSocialIcon("instagram")}
      />
      <SocialMediaLink
        url={socialProps.twitter}
        imgSrc={getSocialIcon("twitter")}
      />
      <SocialMediaLink
        url={socialProps.youTube}
        imgSrc={getSocialIcon("youtube")}
      />
      <SocialMediaLink
        url={socialProps.tikTok}
        imgSrc={getSocialIcon("tiktok")}
      />
      <SocialMediaLink
        url={socialProps.linkedIn}
        imgSrc={getSocialIcon("linkedin")}
      />
    </Stack>
  );
}
