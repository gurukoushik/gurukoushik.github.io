import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/system";
import Header from "@/components/Header";

export default function ResumePage() {
  React.useEffect(() => {
    document.title = "Resume - Guru Senthil";
  }, []);

  return (
    <>
      <Header />

      <Box
        m={3}
        p={5}
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
            Resume
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
