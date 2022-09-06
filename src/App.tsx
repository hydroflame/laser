import React, { useState } from "react";
import { Box } from "@mui/material";
import { Header } from "./Header";
import { Pages } from "./Pages";
import { ProductsPage } from "./ProductsPage";
import { HomePage } from "./HomePage";
import { Footer } from "./Footer";
import { MaterialsPage } from "./MaterialsPage";
import { ContactPage } from "./ContactPage";

function App() {
  const [page, setPage] = useState(Pages.HOME);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Header page={page} setPage={setPage} />
        <Box sx={{ margin: "2em" }}>
          {page === Pages.HOME && <HomePage />}
          {page === Pages.OUR_WORK && <ProductsPage />}
          {page === Pages.MATERIALS && <MaterialsPage />}
          {page === Pages.CONTACT && <ContactPage />}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default App;
