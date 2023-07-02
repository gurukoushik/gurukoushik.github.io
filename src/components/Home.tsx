import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/system";
import { Divider, Grid } from "@mui/material";
import { Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import SchoolIcon from "@mui/icons-material/School";
import { Instagram } from "@mui/icons-material";
import { useMediaQuery, useTheme } from '@mui/material';

export default function Home() {
  const pages = [
    {
      title: "About",
      link: "/About",
    },
    {
      title: "Projects",
      link: "/Projects",
    },
    {
      title: "Blogs",
      link: "/Blogs",
    },
    {
      title: "Resume",
      link: "/Resume",
    },
  ];
  const social = [
    {
      icon: GitHubIcon,
      link: "https://github.com/gurukoushik",
    },
    {
      icon: SchoolIcon,
      link: "https://scholar.google.com/citations?user=O09KvSYAAAAJ&hl=en",
    },
    {
      icon: LinkedInIcon,
      link: "https://www.linkedin.com/in/gurukoushik/",
    },
    {
      icon: TwitterIcon,
      link: "https://twitter.com/gurukoushik",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/guru_koushik/?hl=en",
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const containerDirection = isMobile ? 'column' : 'row';

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ textAlign: "center", fontFamily: "Monospace" }}
      >
        <Stack direction="column" spacing={1} alignItems="center">
          <Typography
            variant="h2"
            sx={{ fontFamily: "default", fontWeight: "bold" }}
          >
            {"< /🤖 >"}
          </Typography>

          <Typography
            variant="h3"
            sx={{ fontFamily: "Monospace", fontWeight: "bold" }}
          >
            Guru Senthil
          </Typography>

          <Typography
            variant="h5"
            sx={{ fontFamily: "Monospace", fontWeight: "bold", color: "gray" }}
          >
            Software Developer | Roboticist
          </Typography>

          <Stack direction="row" spacing={3} alignItems="center">
            {social.map((elem, index) => (
              <Link key={elem.link} target="_blank" href={elem.link}>
                <elem.icon fontSize="large" sx={{ color: "black" }} />
              </Link>
            ))}
          </Stack>

          <Box sx={{ mx: "auto", height: 20 }} />
          <Divider sx={{ width: "100%", color: "black" }} />
          <Box sx={{ mx: "auto", height: 20 }} />

          <Stack direction={containerDirection} spacing={3} alignItems="center">
            {pages.map((elem, index) => (
              <Link key={elem.title} href={elem.link}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Monospace",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {elem.title}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
