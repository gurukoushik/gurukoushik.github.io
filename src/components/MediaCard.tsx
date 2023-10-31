import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from '@mui/icons-material/Description';

type MediaCardProps = {
  title: string;
  desc: string;
  imagePath: string;
  githubPath?: string;
  gscholarPath?: string;
  readMorePath?: string;
};

export default function MediaCard(propes: MediaCardProps) {
  return (
    <Card sx={{ display: "flex", border: 1, fontFamily: "Monospace" }}>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        src={propes.imagePath}
        alt={propes.title}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", fontFamily: "inherit" }}
      >
        <CardContent sx={{ flex: "1 0 auto", fontFamily: "default" }}>
          <Typography
            component="div"
            variant="h6"
            sx={{ fontFamily: "Monospace", fontWeight: "bold" }}
          >
            {propes.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ fontFamily: "Monospace" }}
          >
            {propes.desc}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          {propes.readMorePath && (
            <IconButton aria-label="paper">
              <Link href={propes.readMorePath}>
              <DescriptionIcon />
            </Link>
            </IconButton>
          )}
          {propes.githubPath && (
            <IconButton aria-label="github">
              <Link target="_blank" href={propes.githubPath}>
                <GitHubIcon />
              </Link>
            </IconButton>
          )}
          {propes.gscholarPath && (
            <IconButton aria-label="paper">
              <SchoolIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Card>
  );
}
