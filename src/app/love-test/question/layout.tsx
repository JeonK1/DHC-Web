export default function QuestionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background-main)" }}
    >
      {children}
    </div>
  );
}
