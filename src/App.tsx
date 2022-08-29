import React, { useState } from "react";
import { Box } from "@mui/material";
import { TopBar } from "./TopBar";
import { Pages } from "./Pages";
import { ProductsPage } from "./ProductsPage";
import { ContactPage } from "./ContactPage";
import { HomePage } from "./HomePage";

function App() {
  const [page, setPage] = useState(Pages.HOME);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <TopBar setPage={setPage} />
      {page === Pages.HOME && <HomePage />}
      {page === Pages.PRODUCTS && <ProductsPage />}
      {page === Pages.CONTACT && <ContactPage />}
    </Box>
  );
}

export default App;
