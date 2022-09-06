import { Box, Paper } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";

export const Footer = (): React.ReactElement => {
  return (
    <Paper
      elevation={3}
      sx={{ width: "100%", position: "fixed", bottom: 0, zIndex: 9999 }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "1em",
        }}
      >
        <MailIcon />
        &nbsp;oli.gagnon4418@gmail.com
      </Box>
    </Paper>
  );
};
