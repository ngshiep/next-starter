"use client";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SliderComponent() {
  const ButtonPrev = (props: any) => {
    return (
      <Button
        onClick={props.onClick}
        variant="outlined"
        sx={{
          position: "absolute",
          left: 0,
          top: "40%",
          zIndex: 2,
          minWidth: 30,
          width: 35,
          background: "white",
        }}
      >
        <ChevronLeft></ChevronLeft>
      </Button>
    );
  };

  const ButtonNext = (props: any) => {
    return (
      <Box>
        <Button
          onClick={props.onClick}
          variant="outlined"
          sx={{
            position: "absolute",
            right: 0,
            top: "40%",
            minWidth: 30,
            zIndex: 20,
            width: 35,
            background: "white",
          }}
        >
          <ChevronRight></ChevronRight>
        </Button>
      </Box>
    );
  };
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <ButtonNext />,
    prevArrow: <ButtonPrev />,
  };
  return (
    <Box
      sx={{
        margin: "50px 0px",
        ".slider-item": {
          padding: "0 10px",
        },
        h3: {
          textAlign: "center",
          height: "200px",
          lineHeight: "200px",
          border: "solid 1px #ccc",
        },
      }}
    >
      <Slider {...settings}>
        <div className="slider-item">
          <h3>1</h3>
        </div>
        <div className="slider-item">
          <h3>2</h3>
        </div>
        <div className="slider-item">
          <h3>3</h3>
        </div>
        <div className="slider-item">
          <h3>4</h3>
        </div>
        <div className="slider-item">
          <h3>5</h3>
        </div>
        <div className="slider-item">
          <h3>6</h3>
        </div>
      </Slider>
    </Box>
  );
}

export default SliderComponent;
