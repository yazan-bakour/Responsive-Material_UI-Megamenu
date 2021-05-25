import React, { FC, useRef, useState } from "react";
import { Box, Button, withStyles } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { UseOnClickOutside } from "../../../helpers";
import { TABS } from "../../../Models/content";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: "none",
      justifyContent: "space-between",
      fontSize: "16px",
      flexDirection: "row",
      width: "60%",
      [theme.breakpoints.up("lg")]: {
        display: "flex",
      },
    },
    mainButton: {
      color: "rgb(215, 137, 215)",
    },

    open: {
      height: "max-content",
      width: "-webkit-fill-available",
      padding: "20px",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#9d65c9",
      position: "absolute",
      top: "75px",
      left: "0",
      transition: "1s ease"
    },
    close: {
      height: "0px",
      width: "0px",
      overflow: "hidden"
    },
    menuButton: {
      fontSize: '16px',
      border: '0',
      color: '#2a3d66',
      padding: '10px 20px',
    }
  })
);

const DesktopTabs = () => {
  const [index, setIndex] = useState(-1);
  const [hover, setHover] = useState(null);

  const node = useRef();

  const handleClick = (key: any) => {
    setIndex(key === index ? -1 : key);
  };

  UseOnClickOutside(node, () => setIndex(-1));

  const classes = useStyles();

  return (
    <Box {...({ ref: node } as any)} className={classes.header}>
      {TABS.map((tab, key) => (
        <Box component='div' display='flex'>
          <Button
            className={classes.mainButton}
            key={key}
            onClick={(e) => {
              // e.preventDefault()
              handleClick(key);
            }}
            endIcon={
              <ExpandMore
                style={{
                  transform: key === index ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            }
          >
            {tab.name}
          </Button>
          <Box
            component="div"
            display="flex"
            height="0px"
            className={`${key === index ? classes.open : classes.close}`}
          >
            {tab.children.map((child, i) => (
              <Box component="button" key={i} bgcolor={child.color} className={classes.menuButton}>
                {child.name}
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default DesktopTabs;
