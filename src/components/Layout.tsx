import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

export default function Layout(props: any) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: "65%",
        height: "100vh",
        margin: "0 auto",
        backgroundColor: "red",
      }}
    >
      <CssBaseline />
      {props.children}
    </Box>
  );
}
