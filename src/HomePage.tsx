import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const HomePage = (): React.ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>Family owned, Canadian owned, local laser cutting</Typography>
    </Box>
  );
};
