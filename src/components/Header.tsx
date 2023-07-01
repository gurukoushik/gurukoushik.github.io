import * as React from "react";
import { Typography } from "@mui/material";
import { Box, color } from "@mui/system";
import { Link } from "@mui/material";

export default function Header() {
  return (
    <div>
      <Link href="/" underline="none">
        <Box
          alignItems="center"
          justifyContent="center"
          sx={{ textAlign: "center", fontFamily: "Monospace" }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "Monospace", fontWeight: "bold", color: "black" }}
          >
            {"< /🤖 > Guru Senthil"}
          </Typography>
        </Box>
      </Link>
    </div>
  );
}
