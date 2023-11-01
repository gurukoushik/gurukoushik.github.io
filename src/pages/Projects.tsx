import * as React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/system";
import Header from "@/components/Header";
import MediaCard from "@/components/MediaCard";

interface ProjectProps {
  id: number;
  title: string;
  desc: string;
  imagePath: string;
  githubPath?: string;
}

export default function ProjectsPage() {
  React.useEffect(() => {
    document.title = "Projects - Guru Senthil";
  }, []);

  const projects: ProjectProps[] = [
    {
      id: 1,
      title: "Route Planning with Charging Stops",
      desc: "Plan a route between cities with charging stops in minimal time.",
      imagePath: "/projects/images/route_planning_charging.jpeg",
      githubPath: "https://github.com/gurukoushik/charging-planning"
    },
    {
      id: 2,
      title: "Project Title 2",
      desc: "Project Description 2",
      imagePath: "/projects/images/robot.jpg",
    },
    {
      id: 3,
      title: "Project Title 3",
      desc: "Project Description 3",
      imagePath: "/projects/images/robot.jpg",
    },
    {
      id: 4,
      title: "Project Title 4",
      desc: "Project Description 4",
      imagePath: "/projects/images/robot.jpg",
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
                  readMorePath={"/project/" + elem.id}
                  githubPath={elem.githubPath}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </>
  );
}
