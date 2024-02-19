import HeaderComponent from "@/components/Header";

function LikeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      {children}
    </>
  );
}

export default LikeLayout;
