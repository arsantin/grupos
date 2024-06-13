"use client";

export default function TemplateDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "calc(100% - 40px)",
        padding: "20px",
        display: "flex",
        margin: "auto",
        maxWidth: "1200px",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
}
