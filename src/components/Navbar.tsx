import React, { FC, ReactElement, useState } from "react";
import {
  Box,
  Link,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import routes from "../routes";
import { NavLink } from "react-router-dom";

const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderMenuItems = () => {
    return routes.map((page) => (
      <Link
        key={page.key}
        component={NavLink}
        to={page.path}
        color="black"
        underline="none"
        variant="button"
      >
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{page.title}</Typography>
        </MenuItem>
      </Link>
    ));
  };

  const renderMobileMenu = () => {
    return (
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
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
            horizontal: "left"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" }
          }}
        >
          {renderMenuItems()}
        </Menu>
      </Box>
    );
  };

  const renderDesktopMenu = () => {
    return (
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          marginLeft: "1rem"
        }}
      >
        {renderMenuItems()}
      </Box>
    );
  };

  return (
    <Box
      data-testid="navbar"
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" }
            }}
          >
            Starter App
          </Typography>
          {renderMobileMenu()}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            React Starter App
          </Typography>
          {renderDesktopMenu()}
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Navbar;
