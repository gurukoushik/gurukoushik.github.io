import * as React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/system";
import Header from "@/components/Header";
import MediaCard from "@/components/MediaCard";

export default function ProjectsPage() {
  React.useEffect(() => {
    document.title = "Projects - Guru Senthil";
  }, []);

  const projects = [
    {
      title: "Project Title 1",
      desc: "Project Description 1",
      imagePath: "robot.jpg",
    },
    {
      title: "Project Title 2",
      desc: "Project Description 2",
      imagePath: "robot.jpg",
    },
    {
      title: "Project Title 3",
      desc: "Project Description 3",
      imagePath: "robot.jpg",
    },
    {
      title: "Project Title 4",
      desc: "Project Description 4",
      imagePath: "robot.jpg",
    },
  ];

  return (
    <>
      <Header />

      <Box
        display="flex"
        alignItems="left"
        justifyContent="left"
        marginTop={5}
        sx={{ textAlign: "left", fontFamily: "Monospace" }}
      >
        <Stack direction="column" spacing={1} alignItems="left">
          <Typography
            variant="h4"
            sx={{ fontFamily: "Monospace", fontWeight: "bold" }}
          >
            Projects
          </Typography>

          <Grid container>
            {projects.map((elem, index) => (
              <Grid key={index} item xs={12} md={6} sx={{ pr: 2, pb: 2 }}>
                <MediaCard
                  title={elem.title}
                  desc={elem.desc}
                  imagePath={elem.imagePath}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </>
  );
}
