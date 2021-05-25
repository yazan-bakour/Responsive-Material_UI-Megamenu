import React from "react";
import { Box } from "@material-ui/core";
import Sidebar from "./Mobile/Sidebar";
import DesktopTabs from "./Desktop/DesktopTabs";

const Header = () => {
  const Logo = (
    <Box
      component="div"
      width="200px"
      bgcolor="rgb(215, 137, 215)"
      color="#2a3d66"
      display="flex"
      mr="20px"
      fontSize="18px"
      justifyContent="center"
      alignItems="center"
    >
      Logo
    </Box>
  );

  return (
    <Box
      component="div"
      position="relative"
      display="flex"
      flexDirection="row"
      height="75px"
      bgcolor="#5d54a4"
      boxShadow="0 3px 5px rgba(57, 63, 72, 0.3)"
    >
      {Logo}
      <DesktopTabs />
      <Sidebar />
    </Box>
  );
};

export default Header;
