import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const exercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com/";

      const exercisesDetailData = await fetchData(
        `${exerciseDbUrl}/exercise/${id}`,
        exerciseOptions
      );

      setExerciseDetail(exercisesDetailData);
    };

    exercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
