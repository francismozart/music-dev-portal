import Paragraph from "@atoms/Paragraph";
import { Locale } from "@/app/types/I18n";
import s from "./systemstatus.module.css";
import { Stack } from "@mui/material";

interface ISystemStatus {
  locale: Locale;
}

export function SystemStatus({ locale }: ISystemStatus) {
  const statusText =
    locale === "pt"
      ? "Todos os sistemas estão funcionando normalmente"
      : "All systems are normal";

  return (
    <Stack flexDirection={"row"} alignItems={"center"} gap={"8px"}>
      <Paragraph className={s.paragraph}>Status</Paragraph>
      <div className={s.dot}></div>
      <Paragraph className={s.systems}>{statusText}</Paragraph>
    </Stack>
  );
}
