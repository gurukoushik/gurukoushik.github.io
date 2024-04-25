import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export default function Layout(props: any) {

  const theme = createTheme({
    palette: {
      background: {
        default: "#f6ffde"
      }
    }
  });

  // const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const boxWidth = isMobile ? "100vw" : "70vw";

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: boxWidth,
        height: "100vh",
        margin: "0 auto",
        // backgroundColor: "red",
      }}
    >
      <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
      </ThemeProvider>
    </Box>
  );
}
