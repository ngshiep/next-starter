import HeaderComponent from "@/components/Header";

function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      {children}
    </>
  );
}

export default ProfileLayout;
