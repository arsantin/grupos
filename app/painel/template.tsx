"use client";

import { StylePainel } from "./styles";

export default function TemplatePainel({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StylePainel>{children}</StylePainel>;
}
