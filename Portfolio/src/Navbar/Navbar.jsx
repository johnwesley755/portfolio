import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import FeaturedPlayListTwoToneIcon from "@mui/icons-material/FeaturedPlayListTwoTone";
import { Link } from "react-scroll";

const Navbar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100%",
        backgroundColor: "#2c2c2c",
        color: "white",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h1 className="text-3xl text-white p-2 m-2 font-bold">John Wesley</h1>

        {[
          {
            text: "Home",
            icon: <HomeIcon style={{ color: "white" }} />,
            to: "home",
          },
          {
            text: "About",
            icon: <InfoIcon style={{ color: "white" }} />,
            to: "about",
          },
          {
            text: "Skills",
            icon: <FeaturedPlayListTwoToneIcon style={{ color: "white" }} />,
            to: "features",
          },
          {
            text: "Projects",
            icon: <LiveHelpIcon style={{ color: "white" }} />,
            to: "faq",
          },
          {
            text: "Contact",
            icon: <PermContactCalendarIcon style={{ color: "white" }} />,
            to: "contact",
          },
        ].map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="Link"
                onClick={toggleDrawer("left", false)}
              >
                <ListItemText primary={item.text} style={{ color: "white" }} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="text-white font-bold text-xl flex justify-between items-center p-4">
      {/* Logo */}
      <div className="mx-10 my-10 text-4xl">
        <h1>
          John <span className="text-blue-400">Wesley</span>
        </h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-x-16 my-10 mx-10 cursor-pointer">
        <Link to="home" smooth={true} duration={500} className="Link">
          <h4>Home</h4>
        </Link>
        <Link to="about" smooth={true} duration={500} className="Link">
          <h4>About</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500} className="Link">
          <h4>Skills</h4>
        </Link>
        <Link to="project" smooth={true} duration={500} className="Link">
          <h4>Project</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500} className="Link">
          <h4>Contact</h4>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden my-10 mx-10 cursor-pointer">
        <MenuIcon onClick={toggleDrawer("left", true)} fontSize="large" />
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        className="Drawer"
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
};

export default Navbar;
