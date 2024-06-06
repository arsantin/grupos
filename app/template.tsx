"use client";
import { StyleMain } from "./styles";

export default function TemplateDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyleMain>{children}</StyleMain>;
}
