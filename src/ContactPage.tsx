import React from "react";
import { Paper, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const ContactPage = (): React.ReactElement => {
  return (
    <Paper
      elevation={10}
      sx={{
        margin: "2em",
        padding: "2em",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography>
        We love to work with artists or designers to bring your ideas to live.
        If you'd like to work with us contact us at:
      </Typography>
      <Typography sx={{ display: "flex", justifyContent: "center" }}>
        <MailIcon />
        &nbsp;oli.gagnon4418@gmail.com
      </Typography>
    </Paper>
  );
};
