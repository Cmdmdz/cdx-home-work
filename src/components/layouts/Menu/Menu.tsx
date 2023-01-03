/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Layers from "@mui/icons-material/Layers";
import BarChart from "@mui/icons-material/BarChart";
import Person from "@mui/icons-material/Person";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const drawerWidth = 240;


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

type MenuProp = {
  open: boolean;
  onDrawerClose: () => void;
};

export default function Menu({ open, onDrawerClose }: MenuProp) {
  const theme = useTheme();

  const handleDrawerClose = () => {
    // setOpen(false);
    onDrawerClose();
  };

  const MyNavLink = React.forwardRef<any, any>((props, ref) => (
    <NavLink
      ref={ref}
      to={props.to}
      className={({ isActive }) =>
        `${props.className} ${isActive ? props.activeClassName : ""}`
      }
    >
      {props.children}
    </NavLink>
  ));

  const listMenu = () => {

    if (localStorage.getItem('status') === "1") {
      return <div>
        <ListItem
          button
          to="/homework"
          component={MyNavLink}
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
          <ListItemText primary="Homework" />
        </ListItem>

        <ListItem
          button
          to="/create"
          component={MyNavLink}
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <NoteAddIcon />
          </ListItemIcon>
          <ListItemText primary="Create Work" />
        </ListItem>
      </div>
    } else {
      return <div>
        <ListItem
          button
          to="/student"
          component={MyNavLink}
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Students" />
        </ListItem>
        <ListItem
          button
          to="/courseAdd"
          component={MyNavLink}
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Add course" />
        </ListItem>
      </div>
    }
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Stack direction="row" alignItems="center">

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Stack>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem
          button
          to="/course"
          component={MyNavLink}
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <Layers />
          </ListItemIcon>
          <ListItemText primary="Course" />
        </ListItem>
        {listMenu()}
      </List>
      <Divider />
    </Drawer>
  );
}
