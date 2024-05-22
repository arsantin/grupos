"use client";
import { HeaderDashboard } from "@/components/Header";
import { Footer } from "@/components/Layout/Footer";
import { StyleMain } from "./styles";

export default function TemplateDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StyleMain>{children}</StyleMain>
    </>
  );
}
