import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/system";
import { Link } from "@mui/material";
import Header from "@/components/Header";

export default function Home() {
  React.useEffect(() => {
    document.title = "About - Guru Senthil";
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
            About
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Monospace", fontWeight: "bold" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
