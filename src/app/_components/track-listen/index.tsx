"use client";
import useWaveSurfer from "@/hooks/useWavesurfer";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Box, IconButton, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { WaveSurferOptions } from "wavesurfer.js";
import "./waveSurfer.style.css";

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secondsRemainder = Math.round(seconds) % 60;
  const paddedSeconds = `0${secondsRemainder}`.slice(-2);
  return `${minutes}:${paddedSeconds}`;
};

export default function TrackListenComponent() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const fileName = searchParams.get("audio");
  const containerRef = useRef<HTMLDivElement>(null);
  const timeElRef = useRef<HTMLDivElement>(null);
  const durationElRef = useRef<HTMLDivElement>(null);
  const hoverElRef = useRef<HTMLDivElement>(null);

  const optionsMemo = useMemo((): Omit<WaveSurferOptions, "container"> => {
    let gradient, progressGradient;
    if (typeof window !== undefined) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;

      // Define the waveform gradient
      gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35);
      gradient.addColorStop(0, "#f7f7f7"); // Top color
      gradient.addColorStop((canvas.height * 0.7) / canvas.height, "#656666"); // Top color
      gradient.addColorStop(
        (canvas.height * 0.7 + 1) / canvas.height,
        "#ffffff"
      ); // White line
      gradient.addColorStop(
        (canvas.height * 0.7 + 2) / canvas.height,
        "#ffffff"
      ); // White line
      gradient.addColorStop(
        (canvas.height * 0.7 + 3) / canvas.height,
        "#B1B1B1"
      ); // Bottom color
      gradient.addColorStop(1, "#B1B1B1"); // Bottom color

      // Define the progress gradient
      progressGradient = ctx.createLinearGradient(
        0,
        0,
        0,
        canvas.height * 1.35
      );
      progressGradient.addColorStop(0, "#EE772F"); // Top color
      progressGradient.addColorStop(
        (canvas.height * 0.7) / canvas.height,
        "#EB4926"
      ); // Top color
      progressGradient.addColorStop(
        (canvas.height * 0.7 + 1) / canvas.height,
        "#ffffff"
      ); // White line
      progressGradient.addColorStop(
        (canvas.height * 0.7 + 2) / canvas.height,
        "#ffffff"
      ); // White line
      progressGradient.addColorStop(
        (canvas.height * 0.7 + 3) / canvas.height,
        "#F6B094"
      ); // Bottom color
      progressGradient.addColorStop(1, "#F6B094"); // Bottom color
    }

    return {
      waveColor: gradient,
      progressColor: progressGradient,
      height: 100,
      barWidth: 3,
      url: `/audios/roi-em-se-gap.mp3`,
    };
  }, []);
  const waveSurfer = useWaveSurfer(containerRef, optionsMemo);

  const onPlayClick = useCallback(() => {
    if (waveSurfer) {
      waveSurfer.isPlaying() ? waveSurfer.pause() : waveSurfer.play();
    }
  }, [waveSurfer]);

  useEffect(() => {
    if (!waveSurfer) return;
    //waveSurfer event
    const subscriptions = [
      waveSurfer.on("play", () => setIsPlaying(true)),
      waveSurfer.on("pause", () => setIsPlaying(false)),
      waveSurfer.on(
        "decode",
        (duration) =>
          (durationElRef.current!.textContent = formatTime(duration))
      ),
      waveSurfer.on(
        "timeupdate",
        (currentTime) =>
          (timeElRef.current!.textContent = formatTime(currentTime))
      ),
    ];

    //add hover
    if (containerRef.current && hoverElRef.current) {
      containerRef.current.addEventListener(
        "pointermove",
        (e) => (hoverElRef.current!.style.width = `${e.offsetX}px`)
      );
    }

    return () => {
      subscriptions.forEach((sub) => sub());
      if (containerRef.current && hoverElRef.current) {
        containerRef.current.removeEventListener(
          "pointermove",
          (e) => (hoverElRef.current!.style.width = `${e.offsetX}px`)
        );
      }
    };
  }, [waveSurfer]);
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgb(128, 92, 88) 0%, rgb(57, 54, 64) 100%)",
      }}
    >
      <Box sx={{ display: "flex", width: "100%", height: 380 }}>
        <Box
          sx={{
            margin: "30px",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
            {/* title */}
            <Box sx={{ display: "flex" }}>
              {isPlaying ? (
                <IconButton onClick={onPlayClick} sx={{ height: 65 }}>
                  <PauseCircleIcon
                    sx={{ color: "#EB4926", fontSize: 50 }}
                    fontSize="large"
                  ></PauseCircleIcon>
                </IconButton>
              ) : (
                <IconButton onClick={onPlayClick} sx={{ height: 65 }}>
                  <PlayCircleIcon
                    sx={{ color: "#EB4926", fontSize: 50 }}
                    fontSize="large"
                  ></PlayCircleIcon>
                </IconButton>
              )}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: "1",
                  gap: "5px",
                }}
              >
                <Typography sx={{ color: "white" }} variant="h5">
                  <span>
                    Rồi Em Sẽ Gặp Một Chàng Trai Khác (Live) - HippoHappy
                  </span>
                </Typography>
                <Typography sx={{ color: "white" }}>
                  Trieu
                </Typography>
              </Box>
            </Box>

            {/* time */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexShrink: "0",
                gap: "5px",
              }}
            >
              <Typography sx={{ color: "white" }}>3 months ago</Typography>
              <Typography sx={{ color: "white" }}>#Pop</Typography>
            </Box>
          </Box>
          <div className="wave-surfer-container">
            <div className="wave-overlayBar"></div>
            <div ref={containerRef} className="wave-surfer">
              <div ref={timeElRef} className="wave-time">
                0:00
              </div>
              <div ref={durationElRef} className="wave-duration">
                0:00
              </div>
              <div ref={hoverElRef} className="wave-hover"></div>
            </div>
          </div>
        </Box>
        <Box sx={{ margin: "20px", height: 340, width: 340 }}>
          <img
            style={{ objectFit: "cover", height: 340, width: 340 }}
            src="https://i1.sndcdn.com/artworks-Zv3YYDwWmpDegmo1-BvBZgg-t500x500.jpg"
            alt="img"
          ></img>
        </Box>
      </Box>
    </div>
  );
}
