import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Pages } from "./Pages";
import LogoImg from "./logo.svg";

interface IProps {
  page: Pages;
  setPage: (page: Pages) => void;
}

export const Header = ({ page, setPage }: IProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              style={{ width: "50px", color: "white", fill: "white" }}
              src={LogoImg}
              alt={"ignis laser logo"}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {Object.values(Pages).map((p) => (
                <MenuItem
                  key={p}
                  onClick={() => {
                    handleCloseNavMenu();
                    setPage(p);
                  }}
                >
                  <Typography
                    color={p === page ? "primary" : "disabled"}
                    textAlign="center"
                  >
                    {p}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              style={{ width: "50px", color: "white", fill: "white" }}
              src={LogoImg}
              alt={"ignis laser logo"}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Object.values(Pages).map((p) => (
              <Button
                key={p}
                onClick={() => {
                  handleCloseNavMenu();
                  setPage(p);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography color={p === page ? "primary" : "disabled"}>
                  {p}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
