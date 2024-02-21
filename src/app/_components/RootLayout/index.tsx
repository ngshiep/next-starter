import HeaderComponent from "@/components/header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      {children}
    </>
  );
}

export default RootLayout;
