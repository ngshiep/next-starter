"use client";
import { useHasMounted } from "@/hooks/useHasMounted";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const FooterComponent = () => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return <></>; //fragment

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          background: "#f2f2f2",
        }}
      >
        <Container sx={{ display: "flex", gap: 10 }}>
          <AudioPlayer
            src={`/audios/roi-em-se-gap.mp3`}
            volume={0.5}
            style={{
              boxShadow: "unset",
              background: "#f2f2f2",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              minWidth: 100,
            }}
          >
            <div style={{ color: "#ccc" }}>Baby</div>
            <div style={{ color: "black" }}>Who am I ?</div>
          </div>
        </Container>
      </AppBar>
    </div>
  );
};

export default FooterComponent;
