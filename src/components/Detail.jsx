import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import QuestionMark from "../assets/icons/question-mark.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    { icon: QuestionMark, name: bodyPart },
    { icon: QuestionMark, name: target },
    { icon: QuestionMark, name: equipment },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} {` `}
          is one of the nest exercises to target your {target}. It will help you
          improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item, idx) => (
          <Stack key={idx} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img src={item.icon} alt={item.name} width="80px" height="80px" />
            </Button>
            <Typography
              textTransform="capitalize"
              fontWeight="600"
              variant="h6"
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
