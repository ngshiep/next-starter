import { Container } from "@mui/material";
import RootLayout from "./_components/RootLayout";
import SliderComponent from "./_components/SliderComponent";

export default function HomePage() {
  return (
    <RootLayout>
      <Container>
        <SliderComponent></SliderComponent>
        <span>Next.js Starter</span>
      </Container>
    </RootLayout>
  );
}
