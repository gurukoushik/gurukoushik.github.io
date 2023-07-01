import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/system";
import Header from "@/components/Header";

export default function ProjectsPage() {
  React.useEffect(() => {
    document.title = "Projects - Guru Senthil";
  }, []);

  return (
    <>
      <Header />

      <Box
        display="flex"
        alignItems="left"
        justifyContent="left"
        sx={{ textAlign: "left", fontFamily: "Monospace" }}
      >
        <Stack direction="column" spacing={1} alignItems="left">
          <Typography
            variant="h4"
            sx={{ fontFamily: "Monospace", fontWeight: "bold" }}
          >
            Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Monospace", fontWeight: "bold" }}
          >
            TODO
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
