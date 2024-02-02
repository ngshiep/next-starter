import HeaderComponent from "@/components/Header";

function PlaylistLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      {children}
    </>
  );
}

export default PlaylistLayout;
