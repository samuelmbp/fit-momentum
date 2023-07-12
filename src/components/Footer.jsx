import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/icons/main.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} height="60px" alt="Logo" />
        <Typography variant="h5" pb="40px" color="2e94ff">
          <span style={{ color: "#2e94ff", fontWeight: "bold" }}>
            Fit Momentum
          </span>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
