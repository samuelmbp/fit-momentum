import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#2e94ff" fontWeight="600" fontSize="28px">
        Fit Momentum Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> & Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        href="#exercises"
        variant="contained"
        sx={{
          backgroundColor: "#2e94ff",
          padding: "10px",
          // borderRadius: "50px",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight="600"
        fontSize="150px"
        color="#2e94ff"
        sx={{ opacity: "0.1", display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
