import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import WoodImg from "./img/wood_example.png";
import AcrylicImg from "./img/acrylic_example.png";
import PaperImg from "./img/paper_example.png";
import LeatherImg from "./img/leather_example.png";
import GlassImg from "./img/glass_example.png";
import RubberImg from "./img/rubber_example.png";
import MetalImg from "./img/metal_example.png";
import GraniteImg from "./img/granite_example.png";

import CheckIcon from "@mui/icons-material/Check";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";

const Icon = ({ canDo }: { canDo: boolean }): React.ReactElement => {
  return canDo ? <CheckIcon /> : <DoNotDisturbAltIcon />;
};

interface IProps {
  name: string;
  picture: string;
  engraving?: boolean;
  depth?: string;
}

const MaterialPaper = ({
  name,
  picture,
  engraving,
  depth,
}: IProps): React.ReactElement => {
  return (
    <Paper
      sx={{
        margin: "2em",
        padding: "1em",
        width: "20em",
        height: "25em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      elevation={5}
    >
      <Typography variant="h3">{name}</Typography>
      {picture && (
        <img
          style={{ width: "16em", height: "16em" }}
          src={picture}
          alt={`Example of ${name} engraving and cutting`}
        />
      )}
      <Typography sx={{ display: "flex", justifyContent: "center" }}>
        engraving&nbsp;
        <Icon canDo={!!engraving} />
      </Typography>
      <Typography sx={{ display: "flex", justifyContent: "center" }}>
        cutting&nbsp;
        <Icon canDo={depth !== undefined} /> {depth && `~ ${depth}`}
      </Typography>
    </Paper>
  );
};

export const MaterialsPage = (): React.ReactElement => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={{ alignItems: "center" }} variant="h5">
        At Ignis we work with a variety of materials. Below you can find a more
        details list of our capabilities. This will help you determine wether we
        are the right choice for you.
      </Typography>
      <Box sx={{ display: "flex", padding: "2em", flexWrap: "wrap" }}>
        <MaterialPaper
          name={"Wood"}
          picture={WoodImg}
          depth={'1/8"'}
          engraving
        />
        <MaterialPaper
          name={"Acrylic"}
          picture={AcrylicImg}
          depth={'1/4"'}
          engraving
        />
        <MaterialPaper name={"Paper"} picture={PaperImg} depth={""} />
        <MaterialPaper
          name={"Leather"}
          picture={LeatherImg}
          engraving
          depth={'1/8"'}
        />
        <MaterialPaper name={"Glass"} picture={GlassImg} engraving />
        <MaterialPaper
          name={"Rubber"}
          picture={RubberImg}
          engraving
          depth={'1/8"'}
        />
        <MaterialPaper name={"Granite"} picture={GraniteImg} engraving />
        <MaterialPaper name={"Metal"} picture={MetalImg} engraving />
      </Box>
    </Box>
  );
};
