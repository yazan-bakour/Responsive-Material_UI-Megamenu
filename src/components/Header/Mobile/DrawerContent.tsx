import React, { FC } from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { TABS } from "../../../Models/content";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    closeIcon: {
      zIndex: 1003,
      position: "fixed",
      right: "4px",
      top: "5px",
      color: "#d789d7",
    },
    toolbar: theme.mixins.toolbar,
    expanded: {
      "&$expanded": {
        margin: 0,
      },
    },
    MuiPaper: {
      backgroundColor: "#5d54a4",
      color: "#d789d7",
      "& .MuiAccordionDetails-root": {
          flexDirection: 'column'
      }
    },
    MuiIconButton: {
        "& .MuiIconButton-root": {
            color: "rgb(215, 137, 215)"
        }
    },
  })
);
export type MobileHeaderProps = {
  handleDrawerToggle: () => void;
};
const DrawerContent: FC<MobileHeaderProps> = ({ handleDrawerToggle }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.closeIcon}
      >
        <CloseIcon fontSize="large" />
      </IconButton>

      <div className={classes.toolbar} />

      <Divider />

      {TABS.map((items, key) => (
        <Accordion
          key={key}
          className={classes.MuiPaper}
          expanded={expanded === items.name}
          onChange={handleChange(items.name)}
        >
          <AccordionSummary
            className={classes.MuiIconButton}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{items.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {"children" in items
              ? items.children.map((child, i) => (
                  <List key={i} component="nav">
                    <ListItemLink href='/' style={{backgroundColor: child.color}}>
                      <ListItemText primary={child.name} style={{color: '#5d54a4'}} />
                    </ListItemLink>
                  </List>
                ))
              : ""}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
export default DrawerContent;
