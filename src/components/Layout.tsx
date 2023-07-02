import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery, useTheme } from '@mui/material';

export default function Layout(props: any) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const boxWidth = isMobile ? '100vw' : '50vw';

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: {boxWidth},
        height: "100vh",
        margin: "0 auto",
        // backgroundColor: "red",
      }}
    >
      <CssBaseline />
      {props.children}
    </Box>
  );
}
