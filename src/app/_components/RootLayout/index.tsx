import HeaderComponent from "@/components/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      {children}
    </>
  );
}

export default RootLayout;
