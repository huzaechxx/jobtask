import React, { useState } from "react";
import {
  Box,
  Typography,
  Popper,
  Paper,
  ClickAwayListener,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  useMediaQuery,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/PersonOutline";
import LanguageIcon from "@mui/icons-material/ChatOutlined";
import Arrow from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";

const UpperNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const uppertabs = [
    {
      title: "AI",
      options: [
        "Consultancy",
        "Agents",
        "Overview",
        "WatonX",
        "Granite Modals",
      ],
    },
    {
      title: "Hybrid Cloud",
      options: [
        "Consultancy",
        "Overview",
        "Hybrid Services",
        "VMware",
        "Granite Modals",
      ],
    },
    {
      title: "Products",
      options: [
        "Overview",
        "WatonX",
        "API Tools",
        "Data Studio",
        "Granite Modals",
      ],
    },
    { title: "Consulting", options: null },
    {
      title: "Support",
      options: ["Agents", "Help Center", "FAQ", "Contact", "Granite Modals"],
    },
    { title: "Think", options: null },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const handleAccordionToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (isMobile) {
    return (
      <Box
        sx={{
          borderBottom: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 1,
        }}
      >
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <SearchIcon sx={{ mx: 1 }} />
        <LanguageIcon sx={{ mx: 1 }} />
        <AccountCircleIcon sx={{ mx: 1 }} />

        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          <Box sx={{ width: 250, p: 2 }}>
            <img
              src="/ibm.png"
              alt="IBM"
              style={{ width: 100, marginBottom: 16 }}
            />
            <List>
              {uppertabs.map((tab, index) => (
                <React.Fragment key={index}>
                  <ListItem button onClick={() => handleAccordionToggle(index)}>
                    <ListItemText primary={tab.title} />
                    {tab.options ? (
                      expandedIndex === index ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : null}
                  </ListItem>
                  {tab.options && (
                    <Collapse
                      in={expandedIndex === index}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {tab.options.map((option, subIndex) => (
                          <ListItem key={subIndex} sx={{ pl: 4 }}>
                            <Arrow fontSize="small" />
                            <Typography sx={{ ml: 1 }}>{option}</Typography>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    );
  }

  // Desktop view (same as your original)
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid  rgb(200, 200, 200)",
        py: 0.5,
      }}
    >
      {/* Logo */}
      <Box sx={{ width: "60px", mr: 3, ml: 3 }}>
        <img src="/ibm.png" alt="IBM" style={{ width: "100%", height: 25 }} />
      </Box>

      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

      {/* Tabs */}
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {uppertabs.map((tab, index) => (
          <Box
            key={index}
            sx={{
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography sx={{ color: "grey" }}>{tab.title}</Typography>
            {tab.options && <ArrowDropDownIcon fontSize="small" />}
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2, pr: 3 }}>
        <SearchIcon sx={{ cursor: "pointer" }} />
        <LanguageIcon sx={{ cursor: "pointer" }} />
        <AccountCircleIcon sx={{ cursor: "pointer" }} />
      </Box>
    </Box>
  );
};

export default UpperNav;
