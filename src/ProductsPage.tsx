import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-material-ui-carousel";

export const ProductsPage = (): React.ReactElement => {
  return (
    <Carousel>
      {[
        "https://stardewvalleywiki.com/mediawiki/images/1/18/Banner_Left.png",
        "https://stardewvalleywiki.com/mediawiki/images/4/4a/Banner_Right.png",
      ].map((i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img style={{ backgroundColor: "black" }} src={i} alt="img" />
        </Box>
      ))}
    </Carousel>
  );
};
